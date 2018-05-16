var Memory;
(function (Memory) {
    Memory.decks = {};
    Memory.decks["Letters"] = {
        cardContent: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
        cssClass: "letter"
    };
    Memory.decks["Animals"] = {
        cardContent: ["Krokdil", "Pferd", "Guerteltier", "Zebra", "Schnecke", "Frosch", "Forelle", "Tiger", "Maus"],
        cssClass: "animals"
    };
    Memory.decks["Cities"] = {
        cardContent: ["Berlin", "Hamburg", "New York", "Tokyo", "Oslo", "Rom", "Paris", "Wien", "Moskau", "Amsterdam", "Seoul"],
        cssClass: "cities"
    };
    Memory.players = {};
})(Memory || (Memory = {}));
//# sourceMappingURL=interface_aufgabe4.js.map