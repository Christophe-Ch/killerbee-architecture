import Procede from "../entities/Procede";
export default async () => {
  const procede = await Procede.find();

  return procede;
};
