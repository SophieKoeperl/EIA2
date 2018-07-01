
namespace Aufgabe11 {
    
    window.addEventListener("load", init);
    
    let width: number;
    let height: number;
    let objects: MovingObjects[] = [];
    let n: number = 7;
    let k: number = 3;
    export let crc2: CanvasRenderingContext2D;
    let imagedata: ImageData;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
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

        imagedata = crc2.getImageData(0, 0, 640, 360);

        // Draw Chest
        chest(130, 600);
        
        
  // Animation
        for (let i: number = 0; i < n; i++) {
            let fish: Fish = new Fish();
            objects.push(fish);
        }
        
        for (let i: number = 0; i < k; i++) {
            let bigfish: Bigfish = new Bigfish();
            objects.push(bigfish);
        }

        for (let i: number = 0; i < n - 2; i++) {
            let bubble: Bubbles = new Bubbles();
            bubble.r = Math.random() * 10;
            objects.push(bubble);
        }

     
        canvas.addEventListener("click", insertFood);
        animate();
    }
    
// Fische füttern  

    function insertFood(_event: MouseEvent): void {
        let clickX: number = _event.clientX;
        let clickY: number = _event.clientY;

        for (let i: number = 0; i < 3; i++) {
            let food: Food = new Food();
            if (i == 1) {
                food.x = clickX;
                food.y = clickY;
                objects.push(food);
            } else {
                food.x = clickX + Math.random() * 40 - 2;
                food.y = clickY + Math.random() * 30 - 2;
                objects.push(food);
            }
        }
    } 

    

    function animate(): void {
        window.setTimeout(animate, 10);

        crc2.putImageData(imagedata, 0, 0);
        
         moveObjects();
         drawObjects();


    }

    function moveObjects(): void {
        for (let i: number = 0; i < objects.length; i++) {
            objects[i].move();
        }
    }

    function drawObjects(): void {
        for (let i: number = 0; i < objects.length; i++)
            objects[i].draw();
    }
    
   
    


    
    //ground
    function ground(): void {
        crc2.beginPath();
        crc2.moveTo(0, 860);
        crc2.lineTo(0, 525);
        for (let i: number = 0; i < width; i++) {
            crc2.lineTo(i, 15 * Math.sin(i * .015) + 200);
        }
        crc2.lineTo(1080, 360);
        crc2.lineTo(0, height);
        crc2.fillStyle = "rgb(255, 250, 205)";
        crc2.fill();
        crc2.closePath();
    }


    //ozean
    function ozean(_y: number) {
        crc2.fillStyle = "rgb(126, 192, 238)";
        crc2.fillRect(0, 0, 1900, 1080);
    }
    
    //seagrass
    function seagrass(_x: number, _y: number, _h: number): void {
        crc2.moveTo(_x, _y);
        crc2.bezierCurveTo(_x - 20, _y - 30, _x, _y + 10, _x - 15, _y - _h);
        crc2.stroke();
    }
    
    //rocks    
    function rocks(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(115, 115, 115)";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 10, _y - 30);
        crc2.lineTo(_x + 20, _y - 30);
        crc2.lineTo(_x + 20, _y - 30);
        crc2.lineTo(_x + 30, _y - 40);
        crc2.lineTo(_x + 50, _y - 30);
        crc2.lineTo(_x + 60, _y - 50);
        crc2.lineTo(_x + 70, _y - 50);
        crc2.lineTo(_x + 80, _y - 45);
        crc2.lineTo(_x + 100, _y - 30);
        crc2.lineTo(_x + 100, _y - 20);
        crc2.lineTo(_x + 100, _y - 20);
        crc2.lineTo(_x + 130, _y + 10);
        crc2.lineTo(_x + 100, _y + 20);
        crc2.lineTo(_x + 50, _y + 25);
        crc2.lineTo(_x - 10, _y + 20);
        crc2.lineTo(_x, _y);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }

    //chest
    function chest(_x: number, _y: number): void {

        crc2.beginPath();
        crc2.fillStyle = "rgb(139,121,94)";
        crc2.moveTo(_x, _y - 50);
        crc2.lineTo(_x + 95, _y - 75);
        crc2.quadraticCurveTo(_x + 35, _y - 95, _x, _y - 50);
        crc2.closePath();

        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 100, _y);
        crc2.lineTo(_x + 100, _y - 50);
        crc2.lineTo(_x, _y - 50);
        crc2.closePath();
        crc2.fillStyle = "rgb(139,121,94)";
        crc2.stroke();
        crc2.fill();
    }
    
    //starfish  
    function starfish(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(105,89,205)";
        crc2.moveTo(_x + 7, _y + 20);
        crc2.lineTo(_x - 8, _y);
        crc2.lineTo(_x + 7, _y - 15);
        crc2.lineTo(_x - 20, _y - 8);
        crc2.lineTo(_x - 40, _y - 30);
        crc2.lineTo(_x - 40, _y - 2);
        crc2.lineTo(_x - 70, _y + 2);
        crc2.lineTo(_x - 40, _y + 8);
        crc2.lineTo(_x - 40, _y + 25);
        crc2.lineTo(_x - 20, _y + 2);
        crc2.lineTo(_x, _y + 15);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
}