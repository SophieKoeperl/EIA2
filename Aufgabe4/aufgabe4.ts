/* Aufgabe: 4 - Memory-Menü Name: Sophie Köperl Matrikel:257762 Datum: 16.05.2018 
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. */


namespace Memory {

    let cardContent: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    let newArray: string[] = [];
    let cardOpen: string[] = []
    let numPairs: number;
    let numPlayer: number;
    let numCardsOpen: number = 0;
    let openArray: any[] = []
    let cardsTaken: any = [];
    let x: number = 0;

    let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");




    document.addEventListener('DOMContentLoaded', init);



    function init(): void {
        let startButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("startButton");
        startButton.addEventListener("click", main);

    }

    //Mainfunktion Memory  
    function main(): void {
        let header: NodeListOf<HTMLElement> = document.getElementsByTagName("header");
        header[0].classList.add("hiddenHeader")

        let players: number = parseInt(inputs[0].value);
        let amountCards: number = parseInt(inputs[5].value);

        if (players <= 4 && players > 0 && amountCards > 0 && amountCards <= 10) {
            //player();
            createCardList();

            createPlayers();

            createCards();
        }

        else {
            alert("Undefined!");
            location.reload(true);
        }
    }


    //Spielernamen erzeugen
    function createPlayers(): void {
        let players: number = parseInt(inputs[0].value);


        let node: any = document.getElementById("playersnames");
        let childNodeHTML: string;

        for (let i: number = 0; i < players; i++) {
            let playerName: string = inputs[i + 1].value

            childNodeHTML = "<div>";
            childNodeHTML += "<p class='namen'>";
            childNodeHTML += playerName;
            childNodeHTML += "</p>";
            childNodeHTML += "<p  id='Punktestand" + i + "'>";
            childNodeHTML += "0";
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
        }
    }


    //Karteninhalt erstellen   
    function createCardList(): void {
        let amountCards: number = parseInt(inputs[5].value);

        let select: HTMLSelectElement = <HTMLSelectElement>document.getElementById("cardContent");
        let chosenCardContent: string = select.value;


        for (let i: number = 1; i <= amountCards; i++) {
            let content: string = decks[chosenCardContent].cardContent[i - 1];

            newArray.push(content);
            newArray.push(content);

            cardContent.splice(0, 1);

            console.log(newArray)
        }
    }



    //Karten erstellen   
    function createCards(): void {

        let amountCards: number = parseInt(inputs[5].value);

        let node: any = document.getElementById("spielfeld");
        let childNodeHTML: string;



        for (let i: number = 0; i < amountCards * 2; i++) {

            var random: number = Math.floor(Math.random() * Math.floor(newArray.length));

            childNodeHTML = "<div  class='card" + "hidden" + "' id='Karte" + i + "'>";
            childNodeHTML += "<h3>";
            childNodeHTML += newArray[random];
            childNodeHTML += "</h3>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;

            newArray.splice(random, 1);

            var status = document.getElementsByClassName("cardhidden");
            for (let i: number = 0; i < status.length; i++) {


                status[i].addEventListener("click", changeStatus);
            }

        }


    }

    // Karten aufdecken
    function changeStatus(_event: MouseEvent): void {
        let target: HTMLElement = <HTMLElement>_event.currentTarget;


        if (target.classList.contains("cardhidden")) {

            target.classList.remove("cardhidden");
            target.classList.add("cardopen");
            numCardsOpen++;

            if (numCardsOpen == 2) {
                setTimeout(compareCards, 1500);
            }

            if (numCardsOpen > 2) {
                target.classList.remove("cardopen");
                target.classList.add("cardhidden");
            }


        }
    }


    // Karten vergleichen
    function compareCards(): void {
        let amountCards: number = parseInt(inputs[5].value);
        let karte1: HTMLDivElement = <HTMLDivElement>document.getElementsByClassName("cardopen")[0];
        let karte2: HTMLDivElement = <HTMLDivElement>document.getElementsByClassName("cardopen")[1];



        openArray.push(karte1, karte2);
        console.log(openArray);
        if (openArray[0].innerHTML == openArray[1].innerHTML) {
            openArray[0].classList.remove("cardopen");
            openArray[1].classList.remove("cardopen");
            openArray[0].classList.add("cardtaken");
            openArray[1].classList.add("cardtaken");

            console.log("Kartenpaar abeglegt");
            x++;

            let playerScore: string = x.toString();
            document.getElementById('Punktestand0').innerHTML = playerScore;

            // Gratulation
            if (x == amountCards) {
                alert("Congratulations!");
                location.reload(true);
            }


            // Sonst wieder verstecken
        } else {
            openArray[0].classList.remove("cardopen");
            openArray[1].classList.remove("cardopen");
            openArray[0].classList.add("cardhidden");
            openArray[1].classList.add("cardhidden");

        }

        numCardsOpen = 0;
        openArray.splice(0, 2);

    }

}
