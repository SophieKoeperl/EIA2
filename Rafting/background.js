var Game;
(function (Game) {
    function drawAllBackgrounds() {
        drawBackground();
        Game.imageData = Game.crc2.getImageData(0, 0, 600, 800);
    }
    Game.drawAllBackgrounds = drawAllBackgrounds;
    function drawBackground() {
        // Land1
        Game.crc2.fillStyle = "#DAA520";
        Game.crc2.fillRect(0, 0, 70, 800);
        //Wasser
        Game.crc2.fillStyle = "#000080";
        Game.crc2.fillRect(50, 0, 500, 800);
        Game.crc2.fill();
        //Land2
        Game.crc2.fillStyle = "#DAA520";
        Game.crc2.fillRect(530, 0, 70, 800);
    }
})(Game || (Game = {}));
//# sourceMappingURL=background.js.map