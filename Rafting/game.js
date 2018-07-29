var Game;
(function (Game) {
    window.addEventListener("load", init);
    let objects = [];
    let nRock = 5;
    let nStump = 2;
    let crash = 0;
    Game.stonesFaster = 0;
    alert("Weiche den Steinen im Fluss aus! Aber lasse Dich nicht von den Algen verwirren. Benutze dafür die Pfeiltasten oder wische über den Bildschirm.");
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Game.crc2 = canvas.getContext("2d");
        // Funktionsaufrufe
        Game.drawAllBackgrounds();
        // neue Steine Klassen mit randome Parameter 
        for (let i = 0; i < nRock; i++) {
            let rock = new Game.Rock(Math.random() * ((Game.crc2.canvas.width - 110) - (Game.crc2.canvas.width - Game.crc2.canvas.width + 100)) + (Game.crc2.canvas.width - Game.crc2.canvas.width + 100), Math.random() * (-800 - 200) - 200);
            rock.r = 2;
            objects.push(rock);
        }
        for (let i = 0; i < nStump; i++) {
            let stump = new Game.Stump(Math.random() * ((Game.crc2.canvas.width - 620) - (Game.crc2.canvas.width - Game.crc2.canvas.width - 350)) + (Game.crc2.canvas.width - Game.crc2.canvas.width - 350), Math.random() * (-800 - 200) - 200);
            stump.r = 2;
            objects.push(stump);
        }
        Game.imageData = Game.crc2.getImageData(0, 0, canvas.width, canvas.height);
        Game.boat = new Game.Canoe(-350, 450, 20);
        objects.push(Game.boat);
        //Anonyme Funktion für Pfeiltasten
        document.querySelector("body").addEventListener("keydown", function (e) {
            switch (e.keyCode) {
                //linke Pfeiltaste
                case 37:
                    Game.boat.move_Canoe(document.querySelector('canvas').clientWidth - document.querySelector('canvas').clientWidth - 380);
                    break;
                //rechte Pfeiltaste
                case 39:
                    Game.boat.move_Canoe(document.querySelector('canvas').clientWidth - 550);
                    break;
            }
        });
        document.querySelector("body").addEventListener("keyup", function (e) {
            switch (e.keyCode) {
                //linke Pfeiltaste
                case 37:
                    Game.boat.stop_Canoe();
                    break;
                //rechte Pfeiltaste
                case 39:
                    Game.boat.stop_Canoe();
                    break;
            }
        });
        //Anonyme Funktion für Touch auf dem Handy
        document.querySelector("body").addEventListener("touchstart", function (e) {
            const canvasTouchPosX = e.touches.item(0).clientX - document.querySelector('canvas').clientLeft;
            Game.boat.move_Canoe(canvasTouchPosX);
        });
        document.querySelector("body").addEventListener("touchmove", function (e) {
            const canvasTouchPosX = e.touches.item(0).clientX - document.querySelector('canvas').clientLeft;
            Game.boat.move_Canoe(canvasTouchPosX);
        });
        document.querySelector("body").addEventListener("touchend", function (e) {
            Game.boat.stop_Canoe();
        });
        Game.crc2.putImageData(Game.imageData, 0, 0);
    }
    animate();
    // Alle 10 Millisekunden Funktion erneut aufrufen um bewegung zu erzeugen
    function animate() {
        window.setTimeout(animate, 25);
        Game.crc2.putImageData(Game.imageData, 0, 0);
        drawobjects();
        moveobjects();
        checkCrash();
    }
    function checkCrash() {
        for (let i = 0; i < objects.length; i++) {
            let rock = objects[i];
            let stump = objects[i];
            let inside = Game.boat.checkIfInside(rock.x, rock.y);
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
    function moveobjects() {
        for (let i = 0; i < objects.length; i++) {
            objects[i].move();
        }
    }
    function drawobjects() {
        for (let i = 0; i < objects.length; i++)
            objects[i].draw();
    }
})(Game || (Game = {}));
//# sourceMappingURL=game.js.map