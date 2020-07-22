module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || "todo_database",
    user: process.env.DB_USER || "r2d2",
    password: process.env.DB_PASS || "TerribleM1",
    options: {
      dialect: process.env.DIALECT || "postgres",
      host: process.env.HOST || "127.0.0.1",
      // operationAliases: "Op",
    },
  },
  authenticationToken: null,
};
