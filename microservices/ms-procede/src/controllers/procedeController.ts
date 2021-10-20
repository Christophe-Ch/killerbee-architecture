import { Request, Response } from "express";
import getAllProcede from "../use_cases/getAllProcede";
import createProcede  from "../use_cases/createProcede";
import deleteProcede  from "../use_cases/deleteProcede";
import updateProcede  from "../use_cases/updateProcede";
export default {
  getAllProcede : async (req: Request, res: Response) => {
    
      try {
        return res.send(await getAllProcede ());
      } catch (err) {
        return res.status(400).send(err.message);
      }
    },
    createProcede: async (req: Request, res: Response) => {
      try {
        return res.send(
          await createProcede (req.body.name, req.body.description,req.body.steps,req.body.validationDescription)
        );
      } catch (err) {
        return res.status(400).send(err.message);
      }
    },
    updateProcede: async (req: Request, res: Response) => {
      try {
        return res.send(
          await updateProcede (
            parseInt(req.params.id),
            req.body.name,
            req.body.description,
            req.body.steps,
            req.body.validationDescription
          )
        );
      } catch (err) {
        return res.status(400).send(err.message);
      }
    },
    deleteProcede: async (req: Request, res: Response) => {
      try {
        return res.send(await deleteProcede (parseInt(req.params.id)));
      } catch (err) {
        return res.status(400).send(err.message);
      }
    },
 
};
