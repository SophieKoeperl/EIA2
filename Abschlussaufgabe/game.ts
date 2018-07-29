namespace Rafting {
    window.addEventListener("load", init);
    let objects: MovingObjects[] = [];
    let nStones: number = 7;
    //let nToxicBird: number = 3;
    export let imageData = ImageData;
    export let crc2: CanvasRenderingContext2D;
    export let canoe: Boat;
    let bypass: number = 0;


    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];

        crc2 = canvas.getContext("2d");

        /*alert("Hey, hilf der abbaumelnden Katze sich mit Tauben den Bauch voll zu schlagen. Aber Achtung vor den roten Augen!");*/


        // Funktionsaufrufe
        drawAllBackgrounds();

        //  Steine
        for (let i: number = 0; i < nStones; i++) {
            let stones: Stone = new Stone(Math.random() * (600 - 100) + 100, Math.random() * (-100 + 0) + 0);
            objects.push(stones);
        }

        // böse Vögel
        /*for (let i: number = 0; i < nToxicBird; i++) {
            let toxicBirds: ToxicBird = new ToxicBird(Math.random() * (600 - 100) + 100, Math.random() * (1000 + 800) + 800);
            objects.push(toxicBirds);
        }*/

        imageData = crc2.getImageData(0, 0, 800, 600);
        canoe = new Boat(0, -100);
        objects.push(canoe);

        //Computersteuerung
        document.querySelector("body").addEventListener("keydown", function(e: KeyboardEvent) {
            //const event: KeyboardEvent = window.event ? window.event : e;
            switch (e.keyCode) {
                //linke Pfeiltaste
                case 37:
                    canoe.move_Boat(document.querySelector('canvas').clientWidth - document.querySelector('canvas').clientWidth - 5);
                    break;
                //rechte Pfeiltaste
                case 39:
                    canoe.move_Boat(document.querySelector('canvas').clientWidth - 320);
                    break;
            }
        });

        document.querySelector("body").addEventListener("keyup", function(e: KeyboardEvent) {
            //const event: KeyboardEvent = window.event ? window.event : e;
            switch (e.keyCode) {
                //linke Pfeiltaste
                case 37:
                    canoe.stop_Boat();
                    break;
                //rechte Pfeiltaste
                case 39:
                    canoe.stop_Boat();
                    break;
            }
        });


        //Funktion für Touch
        document.querySelector("body").addEventListener("touchstart", function(e: TouchEvent) {

            const canvasTouchPosX = e.touches.item(0).clientX - document.querySelector('canvas').clientLeft;

            canoe.move_Boat(canvasTouchPosX);
        });

        document.querySelector("body").addEventListener("touchmove", function(e: TouchEvent) {

            const canvasTouchPosX = e.touches.item(0).clientX - document.querySelector('canvas').clientLeft;

            canoe.move_Boat(canvasTouchPosX);
        });

        document.querySelector("body").addEventListener("touchend", function(e: TouchEvent) {
            canoe.stop_Boat();
        });


        crc2.putImageData(imageData, 0, 0);

    }

    animate();

    // Alle 10 Millisekunden Funktion erneut aufrufen um bewegung zu erzeugen
    function animate(): void {
        window.setTimeout(animate, 25);

        imageData = crc2.putImageData(imageData, 0, 0);
        moveobjects();
        drawobjects();
        crash();
    }

    //Vergleich Kanu und Hindernis
    function crash(): void {
        for (let i: number = 0; i < objects.length; i++) {
            let barriere = objects[i];
            let inside = canoe.crash(barriere.x, barriere.y);

            if (inside) {
                objects.splice(i, 1);
                let stones: Stone = new Stone(Math.random() * (600 - 100) + 100, Math.random() * (1000 + 800) + 800);
                objects.unshift(stones);
                bypass++;
                /*if (i >= (nBird) && i <= (nBird + nToxicBird)) {
                    alert("Ohje, die war wohl giftig... du hast " + catchedBirds + " Tauben gesammelt! Willst du's nochmal veruschen?");
                    location.reload(true)
                }*/
            }
        }
    }


    //Objekte bewegen und Zeichnen
    function moveobjects(): void {
        for (let i: number = 0; i < objects.length; i++) {
            objects[i].move();
        }
    }

    function drawobjects(): void {
        for (let i: number = 0; i < objects.length; i++)
            objects[i].draw();
    }
}