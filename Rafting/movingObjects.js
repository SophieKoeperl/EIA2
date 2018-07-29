var Game;
(function (Game) {
    class MovingObjects {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            ;
        }
        draw() {
            ;
        }
    }
    Game.MovingObjects = MovingObjects;
})(Game || (Game = {}));
//# sourceMappingURL=movingObjects.js.map