import Ingredient from "../entities/Ingredient";

export default async (id: number) => {
  const ingredient = await Ingredient.findOne(id);

  if (!ingredient) {
    throw new Error("Ingredient not found");
  }

  await ingredient.remove();
};
