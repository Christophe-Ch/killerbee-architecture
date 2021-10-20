import Modele from "../entities/Modele"

export default async (id: string, request: { name: string, description: string, puht: number, gamme: string }) => {
    const modele = await Modele.findOne(id);

    if (!modele) {
        throw new Error("Modele not found");
    }

    modele.name = request.name;
    modele.description = request.description;
    modele.puht = request.puht;
    modele.gamme = request.gamme;

    modele.save();
}