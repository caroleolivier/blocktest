import { Block } from './block';

export class BlockGrid {
    constructor (maxX, maxY, grid) {
        this.maxX = maxX;
        this.maxY = maxY;
        this.grid = grid;
    }

    removeFrom(block) {
        console.log(block);
        this._remove(block);
        this._rearrangeGrid();
    }

    _remove(block) {
        block.removed = true;
        
        const connectedBlocks = this._getConnectedBlocks(block);
        connectedBlocks.forEach(cb => {
            if(this._isMatching(cb, block.colour) && !this._isRemoved(cb)) {
                this._remove(cb);
            }
        });
    }

    _rearrangeGrid() {
        for (let x = 0; x < this.maxX; x++) {
            this._rearrangeColumnAt(x);
        }
    }

    _rearrangeColumnAt(x) {
        const column = this.grid[x];
        let shift = 0;
        for (let y = 0; y < this.maxY; y++) {
            let block = column[y];
            if(this._isRemoved(block)) {
                shift++;
            }
            else if(shift > 0) {
                column[y-shift] = new Block(x, y-shift, column[y].colour);
                column[y] = new Block(x, y, 'black');
            }
        }
        if(shift > 0) {
            for (let y = this.maxY-1; y >= this.maxY-shift; y--) {
                column[y] = new Block(x, y, 'black');
            }
        }
    }

    _clearContent() {
        let el = document.querySelector('#gridEl');
        el.innerHTML = '';
    }

    _getConnectedBlocks(block) {
        let connectedB = [];
        if(block.y > 0) {
            connectedB.push(this.grid[block.x][block.y-1]);
        }
        if(block.y < this.maxY-1) {
            connectedB.push(this.grid[block.x][block.y+1]);
        }
        if(block.x > 0) {
            connectedB.push(this.grid[block.x-1][block.y]);
        }
        if(block.x < this.maxX-1) {
            connectedB.push(this.grid[block.x+1][block.y]);
        }
        return connectedB;
    }

    _isMatching(block, colour) {
        return block.colour === colour;
    }

    _isRemoved(block) {
        return block.removed;
    }
}
