import { Arme } from "./arme";
import { Personnage } from "./personnage";

/** 
 * Classe humain
*/
export class Humain extends Personnage {
    constructor(pseudo: string, pointsDeVie: number, arme: Arme) {
        super(pseudo, pointsDeVie, arme);
    }
}
