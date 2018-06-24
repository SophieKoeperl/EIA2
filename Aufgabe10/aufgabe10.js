var Aufgabe10;
(function (Aufgabe10) {
    window.addEventListener("load", init);
    let width;
    let height;
    let bigfishes = [];
    let fishes = [];
    let bubbles = [];
    let n = 7;
    let k = 3;
    let imagedata;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe10.crc2 = canvas.getContext("2d");
        canvas.style.border = "1px solid black";
        // Ablauf
        // Draw Ozean
        ozean(50);
        // Draw Ground
        ground();
        // Draw Rocks
        rocks(-30, 550);
        rocks(250, 600);
        // Draw Chest
        chest(130, 600);
        // Draw Starfish
        starfish(360, 520);
        starfish(115, 600);
        //Draw seagrass
        for (let i = 0; i < 7; i++) {
            seagrass(Math.floor(Math.random() * width), height - 75, Math.floor(Math.random() * 100 + 100));
        }
        imagedata = Aufgabe10.crc2.getImageData(0, 0, 640, 360);
        // Draw Chest
        chest(130, 600);
        // Animation
        for (let i = 0; i < n; i++) {
            let fish = new Aufgabe10.Fish();
            fish.x = Math.random() * Aufgabe10.crc2.canvas.width;
            fish.y = Math.random() * 350;
            fishes.push(fish);
        }
        for (let i = 0; i < n - 2; i++) {
            let bubble = new Aufgabe10.Bubbles();
            bubble.x = Math.random() * (300 - 150) + 150;
            bubble.y = Math.random() * 180;
            bubble.r = Math.random() * 10;
            bubbles.push(bubble);
        }
        for (let i = 0; i < k; i++) {
            let bigfish = new Aufgabe10.Bigfish();
            bigfish.x = Math.random() * Aufgabe10.crc2.canvas.width;
            bigfish.y = Math.random() * 350;
            bigfishes.push(bigfish);
        }
        animate();
    }
    function animate() {
        window.setTimeout(animate, 10);
        Aufgabe10.crc2.putImageData(imagedata, 0, 0);
        moveFishes();
        moveBubbles();
        drawFishes();
        drawBubbles();
        moveBigFishes();
        drawBigFishes();
    }
    // Move & Draw
    function moveFishes() {
        for (let i = 0; i < fishes.length; i++) {
            fishes[i].move();
        }
    }
    function drawFishes() {
        for (let i = 0; i < fishes.length; i++)
            fishes[i].draw();
    }
    function moveBubbles() {
        for (let i = 0; i < bubbles.length; i++) {
            bubbles[i].move();
        }
    }
    function drawBubbles() {
        for (let i = 0; i < bubbles.length; i++)
            bubbles[i].draw();
    }
    function moveBigFishes() {
        for (let i = 0; i < bigfishes.length; i++)
            bigfishes[i].move();
    }
    function drawBigFishes() {
        for (let i = 0; i < bigfishes.length; i++)
            bigfishes[i].draw();
    }
    //ground
    function ground() {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(0, 860);
        Aufgabe10.crc2.lineTo(0, 525);
        for (let i = 0; i < width; i++) {
            Aufgabe10.crc2.lineTo(i, 15 * Math.sin(i * .015) + 200);
        }
        Aufgabe10.crc2.lineTo(1080, 360);
        Aufgabe10.crc2.lineTo(0, height);
        Aufgabe10.crc2.fillStyle = "rgb(255, 250, 205)";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.closePath();
    }
    //ozean
    function ozean(_y) {
        Aufgabe10.crc2.fillStyle = "rgb(126, 192, 238)";
        Aufgabe10.crc2.fillRect(0, 0, 1900, 1080);
    }
    //seagrass
    function seagrass(_x, _y, _h) {
        Aufgabe10.crc2.moveTo(_x, _y);
        Aufgabe10.crc2.bezierCurveTo(_x - 20, _y - 30, _x, _y + 10, _x - 15, _y - _h);
        Aufgabe10.crc2.stroke();
    }
    //rocks    
    function rocks(_x, _y) {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.fillStyle = "rgb(115, 115, 115)";
        Aufgabe10.crc2.moveTo(_x, _y);
        Aufgabe10.crc2.lineTo(_x + 10, _y - 30);
        Aufgabe10.crc2.lineTo(_x + 20, _y - 30);
        Aufgabe10.crc2.lineTo(_x + 20, _y - 30);
        Aufgabe10.crc2.lineTo(_x + 30, _y - 40);
        Aufgabe10.crc2.lineTo(_x + 50, _y - 30);
        Aufgabe10.crc2.lineTo(_x + 60, _y - 50);
        Aufgabe10.crc2.lineTo(_x + 70, _y - 50);
        Aufgabe10.crc2.lineTo(_x + 80, _y - 45);
        Aufgabe10.crc2.lineTo(_x + 100, _y - 30);
        Aufgabe10.crc2.lineTo(_x + 100, _y - 20);
        Aufgabe10.crc2.lineTo(_x + 100, _y - 20);
        Aufgabe10.crc2.lineTo(_x + 130, _y + 10);
        Aufgabe10.crc2.lineTo(_x + 100, _y + 20);
        Aufgabe10.crc2.lineTo(_x + 50, _y + 25);
        Aufgabe10.crc2.lineTo(_x - 10, _y + 20);
        Aufgabe10.crc2.lineTo(_x, _y);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.fill();
    }
    //chest
    function chest(_x, _y) {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.fillStyle = "rgb(139,121,94)";
        Aufgabe10.crc2.moveTo(_x, _y - 50);
        Aufgabe10.crc2.lineTo(_x + 95, _y - 75);
        Aufgabe10.crc2.quadraticCurveTo(_x + 35, _y - 95, _x, _y - 50);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(_x, _y);
        Aufgabe10.crc2.lineTo(_x + 100, _y);
        Aufgabe10.crc2.lineTo(_x + 100, _y - 50);
        Aufgabe10.crc2.lineTo(_x, _y - 50);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fillStyle = "rgb(139,121,94)";
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.fill();
    }
    //starfish  
    function starfish(_x, _y) {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.fillStyle = "rgb(105,89,205)";
        Aufgabe10.crc2.moveTo(_x + 7, _y + 20);
        Aufgabe10.crc2.lineTo(_x - 8, _y);
        Aufgabe10.crc2.lineTo(_x + 7, _y - 15);
        Aufgabe10.crc2.lineTo(_x - 20, _y - 8);
        Aufgabe10.crc2.lineTo(_x - 40, _y - 30);
        Aufgabe10.crc2.lineTo(_x - 40, _y - 2);
        Aufgabe10.crc2.lineTo(_x - 70, _y + 2);
        Aufgabe10.crc2.lineTo(_x - 40, _y + 8);
        Aufgabe10.crc2.lineTo(_x - 40, _y + 25);
        Aufgabe10.crc2.lineTo(_x - 20, _y + 2);
        Aufgabe10.crc2.lineTo(_x, _y + 15);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.stroke();
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=aufgabe10.js.map