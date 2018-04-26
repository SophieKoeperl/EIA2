/* Aufgabe: 3 - Memory-Funktion Name: Sophie Köperl Matrikel:257762 Datum: 15.04.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. */
var Memory;
(function (Memory) {
    let numPlayers;
    let numPairs;
    let cardContent = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let cardPush = [];
    let cardOpen = [];
    var classList = ["hidden", "taken", "open"];
    var numPairsInt;
    var numPlayerInt;
    var numCardsOpen = 0;
    var numCardsFound = 0;
    document.addEventListener('DOMContentLoaded', main);
    function main() {
        //player();
        creatCardList(numPairsInt);
        enterName(numPlayerInt);
        createCards(numPairsInt);
    }
    //Spieleranzahl
    /*function player(): number {
        var numPlayer: string = prompt("Gewünschte Anzahl der Spieler   min. 1 | max. 4", "");
        numPlayerInt = parseInt(numPlayer);

        if (numPlayerInt >= 1 && numPlayerInt <= 4) {
            return numPlayerInt;
        }
        else {
            alert("Deine Zahl liegt nicht zwischen 1 und 4");
            player();
        }
    }*/
    //Kartenpaare
    function pair() {
        var numPairsEnter = prompt("Gewünschte Anzahl der Kartenpaare   min. 1 | max. 26");
        numPairsInt = parseInt(numPairsEnter);
        if (numPairsInt >= 1 && numPairsInt <= 26) {
            return numPairsInt;
        }
        else {
            alert("Deine Zahl liegt nicht zwischen 1 und 26");
            pair();
        }
    }
    let amount = pair();
    //Spielernamen erstellen
    function enterName(_numPlayer) {
        let node = document.getElementById("spielernamen");
        let childNodeHTML;
        for (let i = 0; i < _numPlayer; i++) {
            childNodeHTML = "<form class='namen'>";
            childNodeHTML += "<label for='vname'=Name:>";
            childNodeHTML += "<input type='text' id='vname' name='vname'>";
            childNodeHTML += "<button class='button' type='button'>Enter</button>";
            childNodeHTML += "</label>";
            childNodeHTML += "</form>";
            node.innerHTML += childNodeHTML;
        }
    }
    //Inhalt erstellen
    function creatCardList(x) {
        for (let i = 1; i <= x; i++) {
            var content = cardContent[0];
            cardPush.push(content);
            cardPush.push(content);
            var remove = cardContent.splice(0, 1);
        }
    }
    //Karten erstellen
    function createCards(_numPairs) {
        let node = document.getElementById("spielfeld");
        let childNodeHTML;
        let i = 0;
        for (let i = 0; i < _numPairs * 2; i++) {
            let min = 0;
            let max = (cardPush.length * 2);
            var random = Math.floor(Math.random() * cardPush.length);
            childNodeHTML = "<div  class='hidden" + "' id='Karte" + i + "'>";
            childNodeHTML += "<h3>";
            childNodeHTML += cardPush[random];
            childNodeHTML += "</h3>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
            var remove = cardPush.splice(random, 1);
            var hiddenCards = document.getElementsByClassName("hidden");
            for (let i = 0; i < hiddenCards.length; i++) {
                hiddenCards[i].addEventListener("click", cardStatus);
            }
        }
    }
    //Karten klick
    function cardStatus(_event) {
        let target = _event.currentTarget;
        if (numCardsOpen >= 0 && numCardsOpen < 2) {
            if (target.className == "hidden") {
                target.classList.remove("hidden");
                target.classList.add("open");
                numCardsOpen++;
            }
        }
        if (numCardsOpen == 2) {
            setTimeout(compareCard, 2000);
        }
        if (numCardsOpen > 2) {
            target.classList.remove("open");
            target.classList.add("hidden");
        }
    }
    //Karten vergleichen
    function compareCard() {
        let card0 = document.getElementsByClassName("open")[0];
        let card1 = document.getElementsByClassName("open")[1];
        cardOpen.push(card0, card1);
        if (cardOpen[0].innerHTML == cardOpen[1].innerHTML) {
            card0.classList.remove("open");
            card0.classList.add("taken");
            card1.classList.remove("open");
            card1.classList.add("taken");
            numCardsFound++;
            console.log("Pärchen gefunden");
            finish();
        }
        else {
            card0.classList.remove("open");
            card0.classList.add("hidden");
            card1.classList.remove("open");
            card1.classList.add("hidden");
            console.log("leider nicht passend");
        }
        cardOpen.splice(0, 2);
        numCardsOpen = 0;
        console.log(numCardsFound, numPairsInt);
    }
    //Spiel zuende - Glückwunsch
    function finish() {
        if (numCardsFound == numPairsInt) {
            prompt("Glückwunsch: Alle Pärchen gefunden!");
        }
    }
})(Memory || (Memory = {}));
//# sourceMappingURL=aufgabe3.js.map