import { Personnage } from "./domain/personnage";
import { Elfe } from "./domain/elfe";
import { Hobbit } from "./domain/hobbit";
import { Arme } from "./domain/arme";

const resultPseudo = prompt('Prenom ?');

if (resultPseudo) { // type guard
    const arme = new Arme('Epée', 10);

    const personnage: Personnage = new Hobbit(resultPseudo, 100, arme);
}


function afficherInfosPersonnage(personnage: Personnage) {
    console.log(`${personnage.pseudo} a ${personnage.pointsDeVie} points de vie`);
}

// afficherInfosPersonnage(personnage);
// afficherInfosPersonnage(new Elfe('Legolas', 200));