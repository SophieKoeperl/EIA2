namespace Game {
    window.addEventListener("load", init);
    let objects: MovingObjects[] = [];
    let nRock: number = 5;
    let nStump: number = 2;
    let crash: number = 0
    export let imageData: ImageData;
    export let crc2: CanvasRenderingContext2D;
    export let boat: Canoe;
    export let stonesFaster = 0;
    alert("Weiche den Steinen im Fluss aus! Aber lasse Dich nicht von den Algen verwirren. Benutze dafür die Pfeiltasten oder wische über den Bildschirm.")


    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        // Funktionsaufrufe
        drawAllBackgrounds();

        // neue Steine Klassen mit randome Parameter 
        for (let i: number = 0; i < nRock; i++) {
            let rock: Rock = new Rock(Math.random() * ((crc2.canvas.width - 110) - (crc2.canvas.width - crc2.canvas.width + 100)) + (crc2.canvas.width - crc2.canvas.width + 100), Math.random() * (-800 - 200) - 200);
            rock.r = 2
            objects.push(rock);
        }

        for (let i: number = 0; i < nStump; i++) {
            let stump: Stump = new Stump(Math.random() * ((crc2.canvas.width - 620) - (crc2.canvas.width - crc2.canvas.width - 350)) + (crc2.canvas.width - crc2.canvas.width - 350), Math.random() * (-800 - 200) - 200);
            stump.r = 2
            objects.push(stump);
        }

        imageData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        boat = new Canoe(-350, 450, 20);
        objects.push(boat);

        //Anonyme Funktion für Pfeiltasten
        document.querySelector("body").addEventListener("keydown", function(e: KeyboardEvent) {
            switch (e.keyCode) {
                //linke Pfeiltaste
                case 37:
                    boat.move_Canoe(document.querySelector('canvas').clientWidth - document.querySelector('canvas').clientWidth - 380);
                    break;
                //rechte Pfeiltaste
                case 39:
                    boat.move_Canoe(document.querySelector('canvas').clientWidth - 550);
                    break;
            }
        });

        document.querySelector("body").addEventListener("keyup", function(e: KeyboardEvent) {
            switch (e.keyCode) {
                //linke Pfeiltaste
                case 37:
                    boat.stop_Canoe();
                    break;
                //rechte Pfeiltaste
                case 39:
                    boat.stop_Canoe();
                    break;
            }
        });

        //Anonyme Funktion für Touch auf dem Handy
        document.querySelector("body").addEventListener("touchstart", function(e: TouchEvent) {

            const canvasTouchPosX = e.touches.item(0).clientX - document.querySelector('canvas').clientLeft;

            boat.move_Canoe(canvasTouchPosX);
        });

        document.querySelector("body").addEventListener("touchmove", function(e: TouchEvent) {

            const canvasTouchPosX = e.touches.item(0).clientX - document.querySelector('canvas').clientLeft;

            boat.move_Canoe(canvasTouchPosX);
        });

        document.querySelector("body").addEventListener("touchend", function(e: TouchEvent) {
            boat.stop_Canoe();
        });


        crc2.putImageData(imageData, 0, 0);

    }

    animate();

    // Alle 10 Millisekunden Funktion erneut aufrufen um bewegung zu erzeugen
    function animate(): void {
        window.setTimeout(animate, 25);

        crc2.putImageData(imageData, 0, 0);

        drawobjects();
        moveobjects();
        checkCrash();
    }

    function checkCrash(): void {
        for (let i: number = 0; i < objects.length; i++) {
            let rock = objects[i];
            let stump = objects[i];
            let inside = boat.checkIfInside(rock.x, rock.y);

            if (inside) {
                objects.splice(i, 1);
                crash++;
            }

            if (crash >= 1) {

                alert("DU HAST VERLOREN");
                crash = 0;
                location.reload(true);

            }
        }
    }

    //Objecte bewegen und zeichnen
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