var Rafting;
(function (Rafting) {
    window.addEventListener("load", init);
    let objects = [];
    let nStones = 7;
    let bypass = 0;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Rafting.crc2 = canvas.getContext("2d");
        /*alert("Hey, hilf der abbaumelnden Katze sich mit Tauben den Bauch voll zu schlagen. Aber Achtung vor den roten Augen!");*/
        // Funktionsaufrufe
        Rafting.drawAllBackgrounds();
        //  Steine
        for (let i = 0; i < nStones; i++) {
            let stones = new Rafting.Stone(Math.random() * (600 - 100) + 100, Math.random() * (-100 + 0) + 0);
            objects.push(stones);
        }
        // böse Vögel
        /*for (let i: number = 0; i < nToxicBird; i++) {
            let toxicBirds: ToxicBird = new ToxicBird(Math.random() * (600 - 100) + 100, Math.random() * (1000 + 800) + 800);
            objects.push(toxicBirds);
        }*/
        //imageData = crc2.getImageData(0, 0, 800, 600);
        Rafting.canoe = new Rafting.Boat(0, -100);
        objects.push(Rafting.canoe);
        //Computersteuerung
        document.querySelector("body").addEventListener("keydown", function (e) {
            //const event: KeyboardEvent = window.event ? window.event : e;
            switch (e.keyCode) {
                //linke Pfeiltaste
                case 37:
                    Rafting.canoe.move_Boat(document.querySelector('canvas').clientWidth - document.querySelector('canvas').clientWidth - 5);
                    break;
                //rechte Pfeiltaste
                case 39:
                    Rafting.canoe.move_Boat(document.querySelector('canvas').clientWidth - 320);
                    break;
            }
        });
        document.querySelector("body").addEventListener("keyup", function (e) {
            //const event: KeyboardEvent = window.event ? window.event : e;
            switch (e.keyCode) {
                //linke Pfeiltaste
                case 37:
                    Rafting.canoe.stop_Boat();
                    break;
                //rechte Pfeiltaste
                case 39:
                    Rafting.canoe.stop_Boat();
                    break;
            }
        });
        //Funktion für Touch
        document.querySelector("body").addEventListener("touchstart", function (e) {
            const canvasTouchPosX = e.touches.item(0).clientX - document.querySelector('canvas').clientLeft;
            Rafting.canoe.move_Boat(canvasTouchPosX);
        });
        document.querySelector("body").addEventListener("touchmove", function (e) {
            const canvasTouchPosX = e.touches.item(0).clientX - document.querySelector('canvas').clientLeft;
            Rafting.canoe.move_Boat(canvasTouchPosX);
        });
        document.querySelector("body").addEventListener("touchend", function (e) {
            Rafting.canoe.stop_Boat();
        });
        //crc2.putImageData(imageData, 0, 0);
    }
    animate();
    // Alle 10 Millisekunden Funktion erneut aufrufen um bewegung zu erzeugen
    function animate() {
        window.setTimeout(animate, 25);
        //imageData = crc2.putImageData(imageData, 0, 0);
        moveobjects();
        drawobjects();
        crash();
    }
    //Vergleich Kanu und Hindernis
    function crash() {
        for (let i = 0; i < objects.length; i++) {
            let barriere = objects[i];
            let inside = Rafting.canoe.crash(barriere.x, barriere.y);
            if (inside) {
                objects.splice(i, 1);
                let stones = new Rafting.Stone(Math.random() * (600 - 100) + 100, Math.random() * (1000 + 800) + 800);
                objects.unshift(stones);
                bypass++;
            }
        }
    }
    //Objekte bewegen und Zeichnen
    function moveobjects() {
        for (let i = 0; i < objects.length; i++) {
            objects[i].move();
        }
    }
    function drawobjects() {
        for (let i = 0; i < objects.length; i++)
            objects[i].draw();
    }
})(Rafting || (Rafting = {}));
//# sourceMappingURL=game.js.map