import { Request, Response } from "express";
import getAllIngredient from "../use_cases/getAllIngredient";
import createIngredient from "../use_cases/createIngredient";
import deleteIngredient from "../use_cases/deleteIngredient";
import updateIngredient from "../use_cases/updateIngredient";
export default {
  getAllIngredient: async (req: Request, res: Response) => {
    
      try {
        return res.send(await getAllIngredient());
      } catch (err) {
        return res.status(400).send(err.message);
      }
    },
    createIngredient: async (req: Request, res: Response) => {
      try {
        return res.send(
          await createIngredient(req.body.name, req.body.description)
        );
      } catch (err) {
        return res.status(400).send(err.message);
      }
    },
    updateIngredient: async (req: Request, res: Response) => {
      try {
        return res.send(
          await updateIngredient(
            parseInt(req.params.id),
            req.body.name,
            req.body.description
          )
        );
      } catch (err) {
        return res.status(400).send(err.message);
      }
    },
    deleteIngredient: async (req: Request, res: Response) => {
      try {
        return res.send(await deleteIngredient(parseInt(req.params.id)));
      } catch (err) {
        return res.status(400).send(err.message);
      }
    },
 
};
