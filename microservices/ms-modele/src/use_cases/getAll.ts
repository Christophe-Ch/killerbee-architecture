import Modele from "../entities/Modele"

export default async () => {
    return await Modele.find();
}