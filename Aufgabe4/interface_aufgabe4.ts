namespace Memory {

    export interface Deck {
        cardContent: string[];
        cssClass: string;
    }

    export interface Decks {
        [deckname: string]: Deck;
    }

    export let decks: Decks = {}

    decks["Buchstaben"] = {
        cardContent: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
        cssClass: "buchstaben"
    };

    decks["Namen"] = {
        cardContent: ["Amelie", "Bruno", "Camilla", "Dörte", "Emil", "Frank", "Gerlinde", "Hannes", "Ingo", "Janika", "Kerstin"],
        cssClass: "namen"
    };

    decks["Länder"] = {
        cardContent: ["Argentinien", "Belgien", "Columbien", "Deutschland", "Equador", "Finnland", "Ghana", "Holland", "Indien"],
        cssClass: "länder"
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

