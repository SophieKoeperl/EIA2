namespace Game {
    export function drawAllBackgrounds(): void {
        drawBackground();
        imageData = crc2.getImageData(0, 0, 600, 800);
    }

    function drawBackground(): void {


        // Land1
        crc2.fillStyle = "#DAA520";
        crc2.fillRect(0, 0, 70, 800);
        

        //Wasser
        crc2.fillStyle = "#000080";
        crc2.fillRect(50, 0, 500, 800);
        crc2.fill();

        //Land2
        crc2.fillStyle = "#DAA520";
        crc2.fillRect(530, 0, 70, 800);

    }
}
