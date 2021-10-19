import User from "../entities/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async (email: string, password: string) => {
  const user = await User.findOne({ where: { email } });

  if (!user) {
    throw new Error("User not found");
  }

  if (!(await bcrypt.compare(password, user.password))) {
    throw new Error("Invalid password");
  }

  const token = jwt.sign({ email }, <string>process.env.JWT_SECRET);

  return token;
};
