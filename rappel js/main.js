

/**
 * Création d'un objet Hobbit
 */
class Hobbit {
    #_nom = 'coucou';

    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
        this.adulte = false;
    }

    seDeplacer(afficher) {
        afficher(`${this.nom} se déplace`);
    }

    //#region getters/setters
    get nom() {
        return this.#_nom;
    }

    set nom(nom) {
        this.#_nom = nom;
    }
    //#endregion
}

let frodon = new Hobbit('Frodon', 33);
frodon.nom = 'coucou';
frodon.nom = 1;
frodon.seDeplacer(function(message) {
 console.info(message);   
});

frodon.seDeplacer((message) => {
    console.info(message);
});

frodon.seDeplacer('truc');

frodon = 1;