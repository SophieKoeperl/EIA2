var Rafting;
(function (Rafting) {
    function drawAllBackgrounds() {
        drawBackground();
        //imageData = crc2.getImageData(0, 0, 600, 800);
    }
    Rafting.drawAllBackgrounds = drawAllBackgrounds;
    function drawBackground() {
        // Land1
        Rafting.crc2.fillStyle = "#DAA520";
        Rafting.crc2.fillRect(0, 0, 50, 800);
        //Wasser
        Rafting.crc2.fillStyle = "#000080";
        Rafting.crc2.fillRect(50, 0, 500, 800);
        Rafting.crc2.fill();
        //Land2
        Rafting.crc2.fillStyle = "#DAA520";
        Rafting.crc2.fillRect(600, 0, 50, 800);
    }
})(Rafting || (Rafting = {}));
//# sourceMappingURL=background.js.map