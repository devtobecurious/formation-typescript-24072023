import { Arme } from "./arme";
import { Personnage } from "./personnage";

/** 
 * Classe Hobbit
*/
export class Hobbit extends Personnage {
    constructor(pseudo: string, pointsDeVie: number, arme: Arme) {
        super(pseudo, pointsDeVie, arme);
    }
}
