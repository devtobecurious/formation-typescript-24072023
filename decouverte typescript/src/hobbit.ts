export class Hobbit {
    private _nom = '';
    private _age: number = 25;
    private _statut: boolean = true;
    private _poids : number | undefined | null;
    
    constructor(nom: string, age: number, statut: boolean) {
        this._nom = nom;
        this._age = age;
        this._statut = statut;
    }

    get poidsAsKg(): number {
        let poids = 15;

      if (this._poids) { // type guard
         poids = this._poids;
      }  

      return poids * 100;
    } 

    get nom(): string {
        return this._nom;
    }

    set nom(nom: string) {
        this._nom = nom;
    }
}