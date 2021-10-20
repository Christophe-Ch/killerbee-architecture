import Ingredient from "../entities/Ingredient";

export default async (name :string, description: string) =>{
const ingredient = await Ingredient.create({ name, description });
await ingredient.save();
return ingredient;
};
