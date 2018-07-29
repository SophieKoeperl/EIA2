var Rafting;
(function (Rafting) {
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
    Rafting.MovingObjects = MovingObjects;
})(Rafting || (Rafting = {}));
//# sourceMappingURL=movingObjects.js.map