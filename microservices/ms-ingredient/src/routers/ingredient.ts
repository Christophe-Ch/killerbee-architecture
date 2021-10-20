import express from "express";
import controller from "../controllers/ingredientController";

const router = express.Router();

router.post("/", controller.createIngredient);
router.get("/", controller.getAllIngredient);
router.delete("/:id", controller.deleteIngredient);
router.put("/:id", controller.updateIngredient);
export default router;
