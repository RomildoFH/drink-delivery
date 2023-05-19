require('dotenv').config();

const options = {
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT),
  database: process.env.PGDATABASE,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  dialect: 'postgres',
  // use_env_variable: process.env.DATABASE_URL,
  define: {
    timestamps: true,
  },
};
module.exports = {
  production: {
    ...options,
  },
};