const {
  Sequelize
} = require("sequelize");

const sequelize = new Sequelize(process.env.MSSQL_DB, process.env.MSSQL_USERNAME, process.env.MSSQL_PASSWORD, {
  host: process.env.MSSQL_HOST,
  dialect: "mssql",
  define: {
    timestamps: false,
  },
  retry: {
    max: Infinity
  },
});
try {
  (async () => {
    await sequelize.authenticate();
    console.log("Connection to SQL Server has been established successfully.");
  })();
} catch (error) {
  console.log("Connection to SQL Server failed: ");
}

module.exports = sequelize;