import express from "express";
import controller from "../controllers/procedeController";

const router = express.Router();

router.post("/", controller.createProcede);
router.get("/", controller.getAllProcede);
router.delete("/:id", controller.deleteProcede);
router.put("/:id", controller.updateProcede);
export default router;
