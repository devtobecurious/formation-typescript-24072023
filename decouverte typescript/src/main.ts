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
FaireVoler(new Leia());
FaireVoler(new Perroquet());

FaireVoler({
    voler: () => console.log('Je vole')
});