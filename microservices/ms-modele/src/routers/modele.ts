import express from "express";
import controller from "../controllers/modeleController";

const router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.get);
router.post("/", controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

export default router;
