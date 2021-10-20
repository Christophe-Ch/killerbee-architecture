import Ingredient from "../entities/Ingredient";
export default async (id :number ,name :string,description: string) => {
  const ingredient = await Ingredient.findOne(id);

  if (!ingredient) {
    throw new Error("Ingredient not found");
  }

  ingredient.name = name;
  ingredient.description = description;
  await ingredient.save();
};
