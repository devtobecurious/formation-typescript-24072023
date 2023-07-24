export class Hobbit {
    private _nom = '';
    private _age: number = 25;
    private _statut: boolean = true;
    
    constructor(nom: string, age: number, statut: boolean) {
        this._nom = nom;
        this._age = age;
        this._statut = statut;
    }

    get nom(): string {
        return this._nom;
    }

    set nom(nom: string) {
        this._nom = nom;
    }
}