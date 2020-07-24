const Pool = require("pg").Pool;
const config = require("../config/config");

const pool = new Pool({
  user: config.db.user,
  password: config.db.password,
  host: config.db.host,
  port: 5432,
  database: config.db.database,
});

module.exports = pool;
