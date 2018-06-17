namespace Aufgabe9 {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;
    let width: number;
    let height: number;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        width = canvas.width;
        height = canvas.height;
        crc2.strokeStyle = "none";
        
        // Draw Ozean
        ozean(50);

        function ozean(_y: number): void {
            crc2.fillStyle = "rgb(126, 192, 238)";
            crc2.fillRect(0, 0, 1900, 1080);
            crc2.beginPath();
            crc2.moveTo(0, height);
            crc2.lineTo(0, _y);
            crc2.lineTo(width, height);
            crc2.lineTo(0, height);
            crc2.fill();
            crc2.closePath();
        }

        // Draw Ground
        ground(height - 100);

        function ground(_y: number): void {
            crc2.fillStyle = "rgb(255, 250, 205)";
            crc2.beginPath();
            crc2.moveTo(0, height);
            crc2.lineTo(0, _y);
            for (let i = 0; i < width; i++) {
                crc2.lineTo(i, 15 * Math.sin(i * .015) + _y);
            }
            crc2.lineTo(width, height);
            crc2.lineTo(0, height);
            crc2.fill();
            crc2.closePath();
        }

        //Draw seagrass
        for (let i = 0; i < 7; i++) {
            seagrass(Math.floor(Math.random() * width), height - 75, Math.floor(Math.random() * 100 + 100));
        }

        function seagrass(_x: number, _y: number, _h: number): void {
            crc2.moveTo(_x, _y);
            crc2.bezierCurveTo(_x - 20, _y - 30, _x, _y + 10, _x - 15, _y - _h);
            crc2.stroke();
            
        }

        // Draw Starfish
        starfish(360, 570);
        starfish(115, 600);

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

        // Draw Rocks
        rocks(-30, 550);
        rocks(250, 600);
        function rocks(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.fillStyle = "rgb(100, 115, 115)";
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 10, _y - 10);
            crc2.lineTo(_x + 20, _y - 10);
            crc2.lineTo(_x + 20, _y - 10);
            crc2.lineTo(_x + 10, _y - 20);
            crc2.lineTo(_x + 20, _y - 10);
            crc2.lineTo(_x + 30, _y - 30);
            crc2.lineTo(_x + 40, _y - 30);
            crc2.lineTo(_x + 50, _y - 15);
            crc2.lineTo(_x + 70, _y - 10);
            crc2.lineTo(_x + 70, _y - 20);
            crc2.lineTo(_x + 70, _y - 20);
            crc2.lineTo(_x + 100, _y + 10);
            crc2.lineTo(_x + 70, _y + 20);
            crc2.lineTo(_x + 20, _y + 25);
            crc2.lineTo(_x - 10, _y + 20);
            crc2.lineTo(_x, _y);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }

        // Draw Chest
        chest(130, 600);
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
            crc2.closePath();
        }

        //Blubberblasen groß
        for (let i = 0; i < 2; i++) {
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * 260;
            drawBubbleBig(x, y, 2);
        }

        function drawBubbleBig(_x: number, _y: number, _radius: number): void {
            crc2.beginPath();
            crc2.fillStyle = "rgb(0,100,240,0.1)";
            crc2.arc(_x, _y, 15, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }

        // Blubberblasen festgelegt
        drawBubbles(200, 80, 30, 450, 10);
        function drawBubbles(_x: number, _y: number, _w: number, _h: number, _a: number): void {
            for (let i = 0; i < _a; i++) {
                let width = Math.random() * _w;
                let height = Math.random() * _h;
                let scale = Math.random() * 10;
                crc2.beginPath();
                crc2.arc(_x + width, _y + height, scale, 0, 3 * Math.PI);
                crc2.stroke();
                crc2.fillStyle = "rgb(0,100,240,0.3)";
                crc2.stroke();
                crc2.fill();
            }
        }

        // Draw Fishes   
        for (let i = 0; i < 3; i++) {
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * 500;
            let r = Math.random() * 250;
            let g = Math.random() * 250;
            let b = Math.random() * 250;
            fish(x, y, r, g, b);
        }

        for (let i = 0; i < 6; i++) {
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * 500;
            let r = Math.random() * 250;
            let g = Math.random() * 250;
            let b = Math.random() * 250;
            fishes(x, y, r, g, b);
        }

        // Fische groß
        function fish(_x: number, _y: number, _r: number, _g: number, _b: number): void {
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.bezierCurveTo(_x + 120, _y + 110, _x + 130, _y + -60, _x, _y + 30);
            crc2.lineTo(_x, _y);
            crc2.fillStyle = "rgba(238,59,59)";
            crc2.fill();
            crc2.closePath();
            crc2.stroke();
        }


        // Fische klein
        function fishes(_x: number, _y: number, _r: number, _g: number, _b: number): void {
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.bezierCurveTo(_x + -80, _y + -60, _x + -80, _y + 30, _x, _y + -20);
            crc2.lineTo(_x, _y);
            crc2.fillStyle = "rgba(150,255,200)";
            crc2.fill();
            crc2.closePath();
            crc2.stroke();
        }
    }
}
