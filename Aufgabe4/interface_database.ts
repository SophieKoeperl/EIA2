namespace Aufgabe4 {
    // heterogenen assoziativen Arrays: Eine Studi
    export interface Studi {
        name: string;
        firstname: string;
        matrikel: number;
        age: number;
        gender: boolean;
        course: string;
    }

    // homogenen assoziativen Arrays: Ordnung nach Matrikelnummer
    export interface Studis {
         [matrikel: string]: Studi;
    }

    // Simples Array: Speichern
    export let studiSimpleArray: Studi[] = [];
    
    // Homogenes assoziatives Array: Speichern unter Matrikelnummer
    export let studiInfo: Studis = {};
    
}