import { Hobbit } from './hobbit';

const fredon = new Hobbit('Fredon', 25, true);
fredon.nom = 'Fredon le Hobbit';
// fredon.nom = 1;


// -------
// LE ANY EST BANNI !!!!!!!!!
let enemyPointsDeVie: any = 10;
enemyPointsDeVie = '10';

// PLUTOT QUE LE ANY, UTILISER LE TYPE UNKNOWN
function afficher(valeur: any): void {
    console.log(valeur.toLowerCase());
}

function afficherMieux(valeur: unknown): void {
    if (typeof valeur === 'string') {
        console.log(valeur.toLowerCase());
    } else if (typeof valeur === 'number') {
        console.log(valeur.toFixed(2));
    } else if (typeof valeur === 'boolean') {
        console.log(valeur ? 'oui' : 'non');
    }
}

afficher('Frodo');
afficher(1);

// ----------------------------------------------------
type callBackAfficher = (message: string) => void;

//type 

function afficherInfo(afficher: callBackAfficher) : void {
    afficher('Frodo');
}
// afficherInfo('bbb');
afficherInfo(mess => console.log(mess.toLocaleLowerCase()));


//////////////////////////////////////////////////////////////////

interface Voler {
    voler(): void;
}

class Leia implements Voler {
    voler(): void {
        console.log('Je vole');
    }
}

class Perroquet implements Voler {
    voler(): void {
        console.log('Je vole comme un perroquet');
    }
}

function FaireVoler(objet: { voler(): void }) {
    objet.voler();
}

type VolerT = { 
    voler(): void 
};

function FaireVolerBis(objet: VolerT) {
    objet.voler();
}
FaireVoler(new Leia());
FaireVolerBis(new Perroquet());

const monObjQuiVole = {
    voler: () => console.log('Je vole')
}
FaireVolerBis(monObjQuiVole);

/* ----------------------------------- */
// Travailler la notion de type => bis, avec class ?
class Urukhai {
    nom: string;
    pointsDeVie = 100;
    force: number | undefined | null;
    poids !: number;
    //armes: string | string[] = [];

    constructor() {
        this.nom = 'Urukhai';
    }
    
    // combattre(): void {
    //     if (this.force) {
    //         console.log('Je combat avec ' + this.force);
    //     }
    // }

    // combattre(): void {
    //     if (typeof this.armes === 'string') {
    //         console.log('Je combat avec ' + this.armes);
    //     }
    // }
}

const urukhai = new Urukhai();
const urukhai2: Urukhai = {
    nom: 'Urukhai',
    pointsDeVie: 100,
    force: 10,
    poids: 100
};

type UrukhaiT = {
    nom: string;
    pointsDeVie: number;
    force: number | undefined | null;
    poids: number;
    taille ?: number;
    //armes: string | string[];
}

const caRessembleAUnUrukhai: UrukhaiT = {
    nom: 'Urukhai',
    pointsDeVie: 100,
    force: 10,
    poids: 100
};

function formattedTaille(objet: UrukhaiT): string | undefined {
     return objet.taille?.toFixed(2);
}

const mechants: Urukhai[] = [
    urukhai,
    urukhai2, 
    caRessembleAUnUrukhai
];

function afficherMechants(mechants: Urukhai[]): void {
    mechants.forEach(mechant => console.log(mechant.pointsDeVie));
}


// -----------------------------
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {});
});


// -----------------------------



interface ListComplete<Type, Index> {
    add(element: Type, index: Index): void;
    get(index: Index): Type;
    size(): number;
}

const typeTest: ListComplete<string, number> = {
    add: (element: string, index: number): void => {},
    get: (index: number): string => '',
    size: (): number => 0
}

interface Item {
    id: number;
    nom: string;
}

interface List<Type extends Item | number> {
    add(element: Type): void;
    get(index: number): Type;
    size(): number;
}

class ArrayList<T extends Item> implements List<T> {
    private elements: T[] = [];

    add(element: T): void {
        const index = element.id;
        this.elements.push(element);
    }

    get(index: number): T {
        return this.elements[index];
    }

    size(): number {
        return this.elements.length;
    }
}

const listeS = new ArrayList<{ id: number, nom: string }>();
listeS.add({ id: 1, nom: 'Frodo' });
const listeN = new ArrayList<Item>();
listeN.add({ id: 1, nom: 'Sam'});


function display<T extends Item>(liste: List<T>): void {
    for (let i = 0; i < liste.size(); i++) {
        const element = liste.get(i);
        console.log(element.nom);
    }
}
display(listeS);
display(listeN);
display(new ArrayList<Item>());