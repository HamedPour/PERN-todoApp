require("dotenv").config();

module.exports = {
  port: process.env.PORT,
  db: {
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    options: {
      dialect: process.env.DIALECT,
      host: process.env.HOST,
    },
  },
};
