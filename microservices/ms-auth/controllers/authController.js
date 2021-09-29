const login = require("../use_cases/login");

module.exports = {
  login: async (req, res) => {
    try {
      return res.send(await login(req.body.email, req.body.password));
    } catch (err) {
      return res.status(400).send(err.message);
    }
  },
};
