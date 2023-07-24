/**
 * Classe abstraite représentant un personnage
 */
export abstract class Personnage {
    public pointsDeVie: number;

    constructor(private _pseudo: string, pointsDeVie: number) {
        this.pointsDeVie = pointsDeVie;
    }

    get pseudo(): string {
        return this._pseudo;
    }
    set pseudo(pseudo: string) {
        this._pseudo = pseudo;
    }
}