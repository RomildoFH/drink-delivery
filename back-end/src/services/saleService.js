const { newSaleSchema } = require('./validations/schemas');

const { Users, Sales, SalesProducts, sequelize } = require('../database/models');

const registerSalesProducts = async ({ products, saleCreated, t }) => {
  const saleId = saleCreated.id;
  try {
    const salesProductsData = products.map(({ productId, quantity }) => 
      ({ saleId, productId, quantity }));

    await SalesProducts.bulkCreate(salesProductsData, { transaction: t });
    return { type: 201, message: saleCreated };
  } catch (error) {
    return { type: 500, message: error };
  }
};

const registerSale = async ({ saleData, userId }) => {
  const { error: errorData } = newSaleSchema.validate(saleData);
  if (errorData) return { type: 400, message: { message: errorData.message } };

  const { sellerId, totalPrice, deliveryAddress, deliveryNumber, products } = saleData;

  const user = await Users.findOne({ where: { id: Number(sellerId) } });
  if (!user) return { type: 404, message: { message: 'Invalid seller id!' } };

  try {
    const result = await sequelize.transaction(async (t) => {
      const saleCreated = await Sales.create(
        { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status: 'Pendente' },
        { transaction: t },
      );

      const registerResult = await registerSalesProducts({ products, saleCreated, t });

      return registerResult;
    });
    return result;
  } catch (error) {
    return { type: 500, message: error };
  }
};

module.exports = {
  registerSale,
};