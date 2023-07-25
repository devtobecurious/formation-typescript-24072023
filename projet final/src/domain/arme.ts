// export class Arme {
//     constructor(public nom: string, public puissance: number) {}
// }

export interface ArmeI {
    nom: string;
    puissance : number;
}

export interface EpeeI extends ArmeI { 
    tranchant: number;
    trancher(): void;
}

export type Arme = {
    nom: string;
    puissance : number;
}

export type Epee = Arme & { 
    tranchant: number;
    trancher(): void;
}
const epee: Epee = {
    nom: 'Epee',
    puissance: 10,
    tranchant: 5,
    trancher: () => console.log('Je tranche')
};

// function utiliserArme(arme: Epee) {
//     console.log('Utilisation de l\'arme ' + arme.trancher());
// }
