import Modele from "../entities/Modele";
import Procede from "../entities/Procede";

export default async (request: { name: string, description: string, puht: number, gamme: string }) => {
    // TODO: replace with procede ms call
    const procede = Procede.create();
    procede.name = "";
    procede.description = "";
    procede.steps = "";
    procede.validationDescription = "";
    await procede.save();
    
    const modele = Modele.create(request);
    modele.procede = procede;
    await modele.save();

    return modele;
}