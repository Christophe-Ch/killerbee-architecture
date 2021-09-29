const express = require("express");
const controller = require("../controllers/ingredientController.js");

const router = express.Router();

router.get("/ingredients", controller.getAllIngredients);
router.post("/ingredients", controller.createIngredient);
router.put("/ingredients/:id", controller.updateIngredient);
router.delete("/ingredients/:id", controller.deleteIngredient);

module.exports = router;
