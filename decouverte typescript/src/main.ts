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

class ArrayList<T extends Item | number> implements List<T> {
    private elements: T[] = [];

    add(element: T): void {
        if (typeof(element) !== 'number') {
            const index = element.id;
        }
        this.elements.push(element);
    }

    get(index: number): T {
        return this.elements[index];
    }

    size(): number {
        return this.elements.length;
    }
}

const listeS = new ArrayList<Item | number>();
listeS.add(1);
listeS.add({ id: 1, nom: 'Sam'});

const listeN = new ArrayList<Item>();
listeN.add({ id: 1, nom: 'Sam'});


function display<T extends Item | number>(liste: List<T>): void {
    for (let i = 0; i < liste.size(); i++) {
        const element = liste.get(i);

        console.info(element);
        if (typeof(element) !== 'number') {
            console.log(element.nom);
        }
    }
}
display(listeS);
display(listeN);
display(new ArrayList<Item>());

// -----------------------------

type Elfe = { 
    tirerALarc(): void;
    grimper(): void;
};
type Nain = {
    utiliserHache(): void;
    manger(): void;
}

function fight(personnage: Elfe | Nain) {
    if (isElfe(personnage)) {
        personnage.tirerALarc();
        personnage.grimper();
    } else {
        personnage.utiliserHache();
        personnage.manger();
    }
}

/** Functional type guard */
function isNain(personnage: Elfe | Nain): personnage is Nain {
    return 'utiliserHache' in personnage;
}

function isElfe(item: Elfe | Nain): item is Elfe {
    return (item as Elfe).tirerALarc !== undefined;
}

const nain = isNain({ tirerALarc: () => {}, grimper: () => {} });

/** Aller plus loin */

type Oliphant = {
    id: number;
    taille: number;
    longueurTrompe: number;
}

type monEnum = 'id' | 'taille' | 'longueurTrompe';


type Test =  keyof Oliphant; // 'id' | 'taille' | 'longueurTrompe'
const test: Test = 'longueurTrompe';

function getValue(objet: Oliphant, key: keyof Oliphant): number {
    return objet[key];
}

getValue({ id: 1, taille: 10, longueurTrompe: 5 }, 'longueurTrompe');



type TypeAPartirAutreType<T> = {
    [key in keyof T]: key
}

const t: TypeAPartirAutreType<Oliphant> = { id: 'id', taille: 'taille', longueurTrompe: 'longueurTrompe'}





type GetKeysAsLiteral<T> = keyof T;

type Sort = 'asc' | 'desc';
function sortObjectArray<Type, Key extends GetKeysAsLiteral<Type>>(array: Type[], key: Key, sort: Sort) {
    return array.sort((a, b) => {
        if (sort === 'asc') {
            return a[key] > b[key] ? 1 : -1;
        } else {
            return a[key] < b[key] ? 1 : -1;
        }
    });
}
const oliphants: Oliphant[] = [ { id: 1, taille: 10, longueurTrompe: 3 } ];
sortObjectArray(oliphants, 'taille', 'asc');

// -----------------------------

type OliphantSans = Omit<Oliphant, 'id'>;
type OliphantPick = Pick<Oliphant, 'id' | 'taille'>;

type OliphantPartial = Partial<Oliphant>;
type OliphantRequired = Required<OliphantPartial>;


function saisirTaille(): OliphantPartial {
    return {
        taille: 10
    };
}