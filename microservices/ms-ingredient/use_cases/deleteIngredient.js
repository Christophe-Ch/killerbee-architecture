const Ingredient = require("../repositories/ingredient");

module.exports = async (id) => {
  const ingredient = await Ingredient.findByPk(id);

  if (!ingredient) {
    throw new Error("Ingredient not found");
  }

  await ingredient.destroy();
};
