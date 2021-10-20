import { createConnection } from "typeorm";
import entities from "../entities";
import bcrypt from "bcrypt";

export default async () => {
  await createConnection({
    type: "mysql",
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

 
};
