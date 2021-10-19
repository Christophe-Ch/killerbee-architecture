const authRouter = require("./auth");

module.exports = [
  {
    router: authRouter,
    path: "/",
  },
];
