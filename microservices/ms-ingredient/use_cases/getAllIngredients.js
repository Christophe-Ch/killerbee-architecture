const Ingredient = require("../repositories/ingredient");

module.exports = async () => {
  const ingredients = await Ingredient.findAll();

  return ingredients;
};
