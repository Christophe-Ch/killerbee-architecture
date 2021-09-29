const getAllIngredients = require("../use_cases/getAllIngredients");
const createIngredient = require("../use_cases/createIngredient");
const updateIngredient = require("../use_cases/updateIngredient");
const deleteIngredient = require("../use_cases/deleteIngredient");

module.exports = {
  getAllIngredients: async (req, res) => {
    try {
      return res.send(await getAllIngredients());
    } catch (err) {
      return res.status(400).send(err.message);
    }
  },
  createIngredient: async (req, res) => {
    try {
      return res.send(
        await createIngredient(req.body.name, req.body.description)
      );
    } catch (err) {
      return res.status(400).send(err.message);
    }
  },
  updateIngredient: async (req, res) => {
    try {
      return res.send(
        await updateIngredient(
          req.params.id,
          req.body.name,
          req.body.description
        )
      );
    } catch (err) {
      return res.status(400).send(err.message);
    }
  },
  deleteIngredient: async (req, res) => {
    try {
      return res.send(await deleteIngredient(req.params.id));
    } catch (err) {
      return res.status(400).send(err.message);
    }
  },
};
