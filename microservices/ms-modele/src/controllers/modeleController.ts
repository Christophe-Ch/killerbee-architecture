import { Request, Response } from "express";
import getAllModeles from "../use_cases/getAll";
import getModele from "../use_cases/get";
import createModele from "../use_cases/create";
import updateModele from "../use_cases/update";
import deleteModele from "../use_cases/delete";

export default {
  getAll: async (req: Request, res: Response) => {
    try {
      return res.send(await getAllModeles());
    }
    catch (err) {
      console.log(
        `${Date.now()} - GetAll error: ${err.message}`
      );
      return res.sendStatus(400);
    }
  },

  get: async (req: Request, res: Response) => {
    try {
      return res.send(await getModele(req.params.id));
    }
    catch (err) {
      console.log(
        `${Date.now()} - Get error: ${err.message} (id: ${req.params.id})`
      );
      return res.sendStatus(400);
    }
  },

  create: async (req: Request, res: Response) => {
    try {
      return res.send(await createModele(req.body));
    }
    catch (err) {
      console.log(
        `${Date.now()} - Create error: ${err.message} (object: ${JSON.stringify(req.body)})`
      );
      return res.sendStatus(400);
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      await updateModele(req.params.id, req.body);
      return res.sendStatus(200);
    }
    catch (err) {
      console.log(
        `${Date.now()} - Update error: ${err.message} (id: ${req.params.id}; object: ${req.body})`
      );
      return res.sendStatus(400);
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      await deleteModele(req.params.id);
      return res.sendStatus(200);
    }
    catch (err) {
      console.log(
        `${Date.now()} - Delete error: ${err.message} (id: ${req.params.id})`
      );
      return res.sendStatus(400);
    }
  }
};
