namespace Memory {

    export interface Deck {
        cardContent: string[];
        cssClass: string;
    }

    export interface Decks {
        [deckname: string]: Deck;
    }

    export let decks: Decks = {}

    decks["Letters"] = {
        cardContent: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
        cssClass: "letter"
    };

    decks["Animals"] = {
        cardContent: ["Krokdil", "Pferd", "Guerteltier", "Zebra", "Schnecke", "Frosch", "Forelle", "Tiger", "Maus"],
        cssClass: "animals"
    };

    decks["Cities"] = {
        cardContent: ["Berlin", "Hamburg", "New York", "Tokyo", "Oslo", "Rom", "Paris", "Wien", "Moskau", "Amsterdam", "Seoul"],
        cssClass: "cities"
    };


    export interface Player {
        name: string;
        points: number;
    }

    export interface Players {
        [players: string]: Player;
    }

    export let players: Players = {}
}

