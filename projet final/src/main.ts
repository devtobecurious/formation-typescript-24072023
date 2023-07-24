import { Personnage } from "./personnage";
import { Elfe } from "./elfe";
import { Hobbit } from "./hobbit";

const resultPseudo = prompt('Prenom ?');
const personnage: Personnage = new Hobbit(resultPseudo, 100);


function afficherInfosPersonnage(personnage: Personnage) {
    console.log(`${personnage.pseudo} a ${personnage.pointsDeVie} points de vie`);
}

afficherInfosPersonnage(personnage);
// afficherInfosPersonnage(new Elfe('Legolas', 200));