import express, { NextFunction, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import initDatabase from "./db";
import routers from "./routers";

// Populate process.env with .env values
dotenv.config();

// Initialize database
initDatabase()
  .then(() => {
    console.log("Connected to database.");

    const app = express();
    app.use(cookieParser());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());

    routers.forEach((router) => {
      app.use(router.path, router.router);
    });

    app.listen(81, () => {
      console.log("Microservice up on port 81");
    });
  })
  .catch((error) => {
    console.error("Database connection failed.");
    console.error(error);
  });
