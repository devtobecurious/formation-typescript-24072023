import { Personnage } from "./personnage";

/** 
 * Classe humain
*/
export class Humain extends Personnage {
    constructor(pseudo: string, pointsDeVie: number) {
        super(pseudo, pointsDeVie);
    }
}
