export const COLOURS = ['red', 'green', 'blue', 'yellow'];

export class Block {
    constructor (x, y, colour = COLOURS[Math.floor(Math.random() * COLOURS.length)]) {
        this.x = x;
        this.y = y;
        this.colour = colour;
    }
}
