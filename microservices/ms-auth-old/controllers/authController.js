const login = require("../use_cases/login");

module.exports = {
  login: async (req, res) => {
    try {
      return res.send(await login(req.body.email, req.body.password));
    } catch (err) {
      console.log(
        `${Date.now()} - Login error: ${err.message} (${req.body.email}:${
          req.body.password
        })`
      );
      return res.status(401);
    }
  },
};
