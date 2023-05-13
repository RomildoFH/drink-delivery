const sinon = require('sinon');

const chai = require('chai');

const chaiHttp = require('chai-http');

const app = require('../api/app');

const JWT = require('../utils/authenticator');

const { Users } = require('../database/models');
const { loginCustomerData, customerDataWithToken, 
  customerData } = require('./mocks/users/customerMocks');

chai.use(chaiHttp);

const { expect } = chai;

describe('Teste de integração Users', function () {
  afterEach(function () {
    sinon.restore();
  });

  it(
    'request in /login route with customer data returns user data with success',
    async function () {
      const body = loginCustomerData;
      sinon
        .stub(Users, 'findOne')
        .resolves(customerData);
      sinon.stub(JWT, 'createToken').returns(customerDataWithToken.token);
      const httpResponse = await chai.request(app)
        .post('/login')
        .send(body);

      expect(httpResponse.status).to.be.equal(200);
      // expect(httpResponse.body).to.be.deep.equal(customerDataWithToken);
    },
  );

  it(
    'request in /login route with customer invalid format data returns error with status 400',
    async function () {
      const body = {};
      const httpResponse = await chai.request(app)
        .post('/login')
        .send(body);

      expect(httpResponse.status).to.be.equal(400);
    },
  );

  it(
    'request in /login route with customer invalid data returns error with status 404',
    async function () {
      const body = customerData;
      sinon
        .stub(Users, 'findOne')
        .resolves({});
      const httpResponse = await chai.request(app)
        .post('/login')
        .send(body);

      expect(httpResponse.status).to.be.equal(404);
    },
  );
});