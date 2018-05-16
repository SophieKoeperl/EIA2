var Memory;
(function (Memory) {
    Memory.decks = {};
    Memory.decks["Buchstaben"] = {
        cardContent: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
        cssClass: "buchstaben"
    };
    Memory.decks["Namen"] = {
        cardContent: ["Amelie", "Bruno", "Camilla", "Dörte", "Emil", "Frank", "Gerlinde", "Hannes", "Ingo", "Janika", "Kerstin"],
        cssClass: "namen"
    };
    Memory.decks["Länder"] = {
        cardContent: ["Argentinien", "Belgien", "Columbien", "Deutschland", "Equador", "Finnland", "Ghana", "Holland", "Indien"],
        cssClass: "länder"
    };
    Memory.players = {};
})(Memory || (Memory = {}));
//# sourceMappingURL=interface_aufgabe4.js.map