namespace Vorbereitung {
    
    export class DavidStarNew extends DavidStar {

        constructor(_color: string) {
            super(_color);
        }
        
        move(): void {
            this.x += 2 ;
            this.y -= 1 ;
        }
    }
}