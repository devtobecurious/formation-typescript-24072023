import { Personnage } from "./personnage";

/** 
 * Classe Hobbit
*/
export class Hobbit extends Personnage {
    constructor(pseudo: string, pointsDeVie: number) {
        super(pseudo, pointsDeVie);
    }
}
