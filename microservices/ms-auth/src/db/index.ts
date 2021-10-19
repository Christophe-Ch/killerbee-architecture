import User from "../entities/User";
import { createConnection } from "typeorm";
import entities from "../entities";
import bcrypt from "bcrypt";

export default async () => {
  await createConnection({
    type: "mssql",
    host: process.env.DB_HOST,
    port: parseInt(<string>process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities,
    synchronize: true,
    extra: {
      trustServerCertificate: true,
    },
  });

  // Seeder
  let user = await User.findOne({
    where: { email: process.env.DB_SEED_EMAIL },
  });

  if (!user) {
    user = User.create({
      email: process.env.DB_SEED_EMAIL,
      password: bcrypt.hashSync(
        <string>process.env.DB_SEED_PASSWORD,
        parseInt(<string>process.env.DB_SALT_ROUNDS)
      ),
    });

    user.save();
    console.log("User table seeded");
  }
};
