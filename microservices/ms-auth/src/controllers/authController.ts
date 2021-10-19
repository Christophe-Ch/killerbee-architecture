import { Request, Response } from "express";
import login from "../use_cases/login";

export default {
  login: async (req: Request, res: Response) => {
    try {
      return res.send(await login(req.body.email, req.body.password));
    } catch (err) {
      console.log(
        `${Date.now()} - Login error: ${err.message} (${req.body.email}:${
          req.body.password
        })`
      );
      return res.sendStatus(401);
    }
  },
};
