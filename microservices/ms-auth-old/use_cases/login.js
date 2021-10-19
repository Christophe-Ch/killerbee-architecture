const User = require("../repositories/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!user) {
    throw new Error("User not found");
  }

  if (!(await bcrypt.compare(password, user.password))) {
    throw new Error("Invalid password");
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET);

  return token;
};
