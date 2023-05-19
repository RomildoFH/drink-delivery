require('dotenv').config();

const options = {
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  dialect: 'postgres',
  define: {
    timestamps: true,
  },
};
module.exports = {
  production: {
    ...options,
  },
};