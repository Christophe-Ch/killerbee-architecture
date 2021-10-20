import Ingredient from "../entities/Ingredient";
export default async () => {
  const ingredient = await Ingredient.find();

  return ingredient;
};
