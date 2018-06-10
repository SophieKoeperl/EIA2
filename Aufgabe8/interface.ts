namespace Aufgabe8{
    // heteroge assoziativ: Datensatz
    export interface Studi {
        name: string;
        firstname: string;
        matrikel: number;
        age: number;
        gender: boolean;
        course: string;
    }

     // homogen assoziativ: Datensatz wird Matrikelnummer zugeordnet
    export interface Studis {
         [matrikel: string]: Studi;
    }
 
    // Homogen assoziativ: Speicherung unter Matrikelnummer
    export let studiHomoAssoc: Studis = {};  
}