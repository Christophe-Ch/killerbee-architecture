import Modele from "../entities/Modele"

export default async (id: string) => {
    const modele = await Modele.findOne(id);

    if (!modele) {
        throw new Error("Modele not found");
    }

    return modele;
}