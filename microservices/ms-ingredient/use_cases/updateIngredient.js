const Ingredient = require("../repositories/ingredient");

module.exports = async (id, name, description) => {
  const ingredient = await Ingredient.findByPk(id);

  if (!ingredient) {
    throw new Error("Ingredient not found");
  }

  ingredient.name = name;
  ingredient.description = description;
  await ingredient.save();
};
