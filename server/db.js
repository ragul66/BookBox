const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "200400",
  host: "localhost",
  port: 5432,
  database: "bookbox",
});

module.exports = pool;
