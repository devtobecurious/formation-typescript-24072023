import { Arme } from "./arme";
import { Personnage } from "./personnage";

/** 
 * Classe elfe
*/
export class Elfe extends Personnage {
    constructor(pseudo: string, pointsDeVie: number, arme: Arme) {
        super(pseudo, pointsDeVie, arme);
    }
}
