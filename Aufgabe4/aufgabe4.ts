/* Aufgabe: 4 - Memory-Menü Name: Sophie Köperl Matrikel:257762 Datum: 06.05.2018 
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. */

/*Leider finde ich den Fehler nicht, um die init-Funktion ausführen zu lassen. 
Ich weiß nicht, wie ich anders weiter machen kann!*/

namespace Memory {

    let numPlayers: number = 1;
    let numPairs: number;
    let cardContent: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let cardPush: string[] = [];
    let cardOpen: any = [];
    var classList = ["hidden", "taken", "open"];
    var numPairsInt: number;
    var numPlayerInt: number;
    var numCardsOpen: number = 0;
    var numCardsFound: number = 0;
    let newArray: string[] = [];

    let inputs: NodeListOf<HTMLElement> = document.getElementsByTagName("input");

    document.addEventListener('DOMContentLoaded', init);
    /*
        //Hauptfunktion
        function main(): void {
            //player();
            createCardList(numPairsInt);
            //enterName(numPlayerInt);
            createsm   }*/
    
    
    //Menüfunktion
    function init(_event: Event): void {
        let startButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("start");
        startButton.addEventListener("click", main);
        
       
        document.getElementById("addplayer").addEventListener("click", addPlayer);  
        document.getElementById("removeplayer").addEventListener("click", removePlayer);
    }
    

    //Eingabe ausführen
    function main(): void {
        console.log("1");
        let header: NodeListOf<HTMLElement> = document.getElementsByTagName("header");
        header[0].classList.add("disappearedHeader");

        let amountCards: number = parseInt(inputs[2].value);

        if (amountCards > 0 && amountCards <= deck[0].content.length) {
            createCardList(numPairsInt);
            createCards(numPairsInt);
        }
        else {
            alert("Falsche Eingabe");
            location.reload(true);
        }
    }

    
    // Spieler hinzufügen
    function addPlayer(): void {
        if (numPlayers < 4) {
            let player: HTMLElement = document.createElement("input");
            player.setAttribute("type", "text");
            player.setAttribute("placeholder", "Spielernamen");
            player.setAttribute("name", "player");
            player.setAttribute("maxlength", "20");
            player.setAttribute("id", "name");
            document.getElementById("name").appendChild(player);
            numPlayers++;
        }
    }

    
    // Spieler entfernen
    function removePlayer(): void {
        document.getElementById("player").remove();
        numPlayers--;
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
    /*function pair(): number {
        var numPairsEnter: string = prompt("Gewünschte Anzahl der Kartenpaare   min. 1 | max. 26");
        numPairsInt = parseInt(numPairsEnter);

        if (numPairsInt >= 1 && numPairsInt <= 26) {
            return numPairsInt;
        }
        else {
            alert("Deine Zahl liegt nicht zwischen 1 und 26");
            pair();
        }
    }
    let amount: number = pair();
*/

    /*
    //Spielernamen erstellen
    function enterName(_numPlayer: number): void {
        let players: number = parseInt(inputs[0].value);
        
        let node: any = document.getElementById("spielernamen");
        let childNodeHTML: string;

        for (let i: number = 0; i < _numPlayer; i++) {
            let playerName: string = inputs[i+1].value;

            childNodeHTML = "<form class='namen'>";
            childNodeHTML += "<label for='vname'=Name:>";
            childNodeHTML += "<input type='text' id='vname' name='vname'>";
            childNodeHTML += "<button class='button' type='button'>Enter</button>";
            childNodeHTML += "</label>";
            childNodeHTML += "</form>";
            node.innerHTML += childNodeHTML;
        }
    }*/


    //Inhalt erstellen
    function createCardList(x: number): void {
        let amountCards: number = parseInt(inputs[2].value);
        
        let select: HTMLSelectElement = <HTMLSelectElement>document.getElementById("cardContent");
        let chosenCardContent: string = select.value;
        
        for (let i: number = 1; i <= amountCards; i++) {
            var content: string = deck[chosenCardContent].content[i-1];
            
            cardPush.push(content);
            cardPush.push(content);

            var remove = cardContent.splice(0, 1);
        }
    }


    //Karten erstellen
    function createCards(_numPairs: number): void {
        
        let amountCards: number = parseInt(inputs[2].value);
        
        let node: any = document.getElementById("spielfeld");
        let childNodeHTML: string;

        for (let i: number = 0; i < amountCards * 2; i++) {
            let min: number = 0;
            let max: number = (cardPush.length * 2);

            var random: number = Math.floor(Math.random() * cardPush.length);

            childNodeHTML = "<div  class='hidden" + "' id='Karte" + i + "'>";
            childNodeHTML += "<h3>";
            childNodeHTML += cardPush[random];
            childNodeHTML += "</h3>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;

            var remove = cardPush.splice(random, 1);
            var hiddenCards = document.getElementsByClassName("hidden");

            for (let i: number = 0; i < hiddenCards.length; i++) {
                hiddenCards[i].addEventListener("click", cardStatus);

            }
        }
    }

    
    //Karten klick
    function cardStatus(_event: MouseEvent): void {
        let target: HTMLElement = <HTMLElement>_event.currentTarget;
        if (numCardsOpen >= 0 && numCardsOpen < 2) {
            if (target.className == "hidden") {
                target.classList.remove("hidden");
                target.classList.add("open");
                numCardsOpen++;
            }
        }

        if (numCardsOpen == 2) {
            setTimeout(compareCard, 2000)
        }

        if (numCardsOpen > 2) {
            target.classList.remove("open");
            target.classList.add("hidden");
        }
    }


    //Karten vergleichen
    function compareCard(): void {
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

        } else {
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
    function finish(): void {
        if (numCardsFound == numPairsInt) {
            prompt("Glückwunsch: Alle Pärchen gefunden!");
        }
    }



}
