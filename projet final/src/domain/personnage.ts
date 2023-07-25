 import { Arme } from "./arme";
import { AfficherString, AfficherStringOrNonReference } from "../core/custom-types/callbacks";

export interface Attaquer {
    attaquer(personnage: Personnage, afficher: AfficherString): void;
}

/**
 * Classe abstraite représentant un personnage
 */
export abstract class Personnage implements Attaquer {
    public pointsDeVie: number;
    private afficher: AfficherStringOrNonReference;

    constructor(private _pseudo: string, pointsDeVie: number, public arme: Arme) {
        this.pointsDeVie = pointsDeVie;
    }

    attaquer(personnage: Personnage, afficher: AfficherString) {
        this.afficher = afficher;
        personnage.prendreUnCoup(this.arme.puissance);
    }

    private prendreUnCoup(degats: number) {
        this.pointsDeVie -= degats;
        if(this.afficher) {
            this.afficher('Prendre un coup ! ' + this.pointsDeVie);
        }
    }

    get pseudo(): string {
        return this._pseudo;
    }
    set pseudo(pseudo: string) {
        this._pseudo = pseudo;
    }
}