import Procede from "../entities/Procede";
export default async (id :number ,name :string, description: string, steps: string, validationDescription: string) => {
  const procede = await Procede.findOne(id);

  if (!procede) {
    throw new Error("procede not found");
  }

  procede.name = name;
  procede.description = description;
  procede.steps = steps;
  procede.validationDescription = validationDescription;
 
  await procede.save();
};
