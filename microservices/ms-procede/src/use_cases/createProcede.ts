import Procede from "../entities/Procede";

export default async (name :string, description: string, steps: string, validationDescription: string) =>{
const procede = await Procede.create({ name, description,steps,validationDescription});
await procede.save();
return procede;
};
