import Procede from "../entities/Procede";

export default async (id: number) => {
  const procede = await Procede.findOne(id);

  if (!procede) {
    throw new Error("procede not found");
  }

  await procede.remove();
};
