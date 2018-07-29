/*
Aufgabe:    
Name:       Johannes Halla
Matrikel:   258434
Datum:      
     
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Main; 
(function (Main) {
    window.addEventListener("load", init);
    window.addEventListener('resize', resize);
    let CanvasHeight = window.innerHeight;
    let CanvasWidth = window.innerWidth;
    let sheep;
    let wolves = [];
    let imagedata;
    let RenderTimeout;
    let count = 0;
    let lastCount = 0;
    let maxWolves = 5;
    let wolfspeed = 3;
     
    //----------------------------Hauptfunktionen---------------------------------//
    function init(_event) {
        //Canvas Initialisierung
        let canvas = document.getElementsByTagName("canvas")[0];
        Main.crc2 = canvas.getContext("2d");
        canvas.style.border = "1px solid black";
        canvas.style.margin = "10px";
        canvas.height = CanvasHeight - canvas.offsetTop - (CanvasHeight*0.2);
        canvas.width = CanvasWidth - (2*canvas.offsetLeft);
        //Hintergrund bzw. Gras zeichnen
        DrawGrass();
        imagedata = Main.crc2.getImageData(0, 0, CanvasWidth, CanvasHeight);
         
        //Schaf und Woelfe werden erstellt (Woelfe im Array mit eindeutiger ID)
        createWolves(maxWolves);
        sheep = new Main.Sheep();
        //EventListener, wenn man Klickt
        canvas.addEventListener("mousedown", clickedCollision);
        canvas.addEventListener("touchstart", screenTouch, false);
        document.getElementById("neustart").addEventListener("click", neuStart);
        Render();
    }
    function resize(_event) {
        canvas.width = window.innerWidth - (2*canvas.offsetLeft);
        canvas.height = window.innerHeight - canvas.offsetTop - (CanvasHeight*0.2);
        DrawGrass();
    }   
    function neuStart(_event){
        document.getElementById('gameStats').innerHTML = "";
        window.clearTimeout(RenderTimeout);
        count = 0;
        lastCount = 0;
        wolves = [];
        wolfspeed = 2;
        createWolves(maxWolves);
        Render();
    }
    //----------------------------------------------------------------------------//
     
     
    //----------------------------Renderfunktionen--------------------------------//
    function createWolves(anzahl){      //Erstellt Wölfe
        for(let i = 0; i < anzahl; i++){
            wolves.push(new Main.Wolf(wolfspeed));
        }
    }
    function Render() {                 //Renderfunktion wird alle 10ms aufgerufen und "malt" den Canvas
        RenderTimeout = window.setTimeout(Render, 10);
        Main.crc2.clearRect(0, 0, Main.crc2.canvas.width, Main.crc2.canvas.height);
        //Main.crc2.putImageData(imagedata, 0, 0);          //deaktiviert, wegen resize Problemen
        DrawGrass();
        moveObjects();
        collisionDetection();
        drawObjects();
    }
    function DrawGrass() {              // Hintergrund
        Main.crc2.fillStyle = "rgb(61,179,64)";
        Main.crc2.fillRect(0, 0, canvas.width, canvas.height);
    }
    function moveObjects() {            //Objekte bewegen
        sheep.move(); 
        for (let i = 0; i < wolves.length; i++) {
            wolves[i].move();
        }
    }
    function drawObjects() {            //Objekte zeichnen
        sheep.draw();
        for (let i = 0; i < wolves.length; i++){
            //Wenn außerhalb des canvas, dann den Wolf löschen und neuen erstellen
            if(wolves[i].x <= -wolves[i].width){
                wolves.splice(i,1);
                createWolves(1);
            }
            wolves[i].draw();
        }
    }
    //----------------------------------------------------------------------------//
     
     
    //----------------------------Kollisionsfunktionen----------------------------//
    function clickCollision(clickX, clickY){    //Kollisionsabfrage zwischen Klick/Tap und Wolf
        for(let i = 0; i < wolves.length; i++){
            if(clickX > wolves[i].x && clickX < (wolves[i].x + wolves[i].width)&&
               clickY > wolves[i].y && clickY < (wolves[i].y + wolves[i].height) ){
                    count++;
                    document.getElementById('gameStats').innerHTML = "<p>Du hast " + count + " Wölfe getötet!</p>";
                    if(count>=(lastCount+10)){
                        lastCount = count;
                        wolfspeed += 0.5;
                        wolves[i].speed += 0.5;
                    }
                wolves.splice(i,1);
                createWolves(1);
            }
        }
    }
    function collisionDetection() {             //Kollisionsabfrage zwischen Schaf und Wolf
        for(let i = 0; i < wolves.length; i++){
            if(sheep.x < (wolves[i].x + wolves[i].width) && (sheep.x + sheep.width) > wolves[i].x &&
               sheep.y < (wolves[i].y + wolves[i].height) && (sheep.y + sheep.height) > wolves[i].y)
               {
                document.getElementById('gameStats').innerHTML = "<p>Du hast " + count + " Wölfe getötet!</p><h1>VERLOREN</h1>";
                window.clearTimeout(RenderTimeout); //Rendern stoppen
            }
        }
    }
    function screenTouch(_event){               //Funktion für Screen-Taps
        let touchX = _event.touches[0].clientX;
        let touchY = _event.touches[0].clientY;
        clickCollision(touchX, touchY);
        event.preventDefault();
    }
    function clickedCollision(_event){          //Funktion für Mausklicks
        let clickX = _event.clientX;
        let clickY = _event.clientY;
        clickCollision(clickX, clickY);
    }
    //----------------------------------------------------------------------------//
})
(Main || (Main = {}));
//# sourceMappingURL=main.js.map