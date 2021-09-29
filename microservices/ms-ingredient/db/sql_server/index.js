const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("killerbee", "sa", process.env.MSSQL_PASSWORD, {
  host: "192.168.1.62",
  dialect: "mssql",
  define: {
    timestamps: false,
  },
  retry: { max: Infinity },
});
try {
  (async () => {
    await sequelize.authenticate();
  })();
  console.log("Connection to SQL Server has been established successfully.");
} catch (error) {
  console.log("Connection to SQL Server failed: ");
}

module.exports = sequelize;
