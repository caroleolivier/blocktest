import { BlockGrid } from './blockGrid';
import { Block } from './block';

const MAX_X = 3;
const MAX_Y = 5;

export class BlockGridView {
    constructor () {
        const grid = []
        for (let x = 0; x < MAX_X; x++) {
            let col = [];
            for (let y = 0; y < MAX_Y; y++) {
                col.push(new Block(x, y));
            }

            grid.push(col);
        }
        this.blockGrid = new BlockGrid(MAX_X, MAX_Y, grid);
    }

    render (el = document.querySelector('#gridEl')) {
        for (let x = 0; x < MAX_X; x++) {
            let id = 'col_' + x;
            let colEl = document.createElement('div');
            colEl.className = 'col';
            colEl.id = id;
            el.appendChild(colEl);

            for (let y = MAX_Y - 1; y >= 0; y--) {
                let block = this.blockGrid.grid[x][y],
                    id = `block_${x}x${y}`,
                    blockEl = document.createElement('div');

                blockEl.id = id;
                blockEl.className = 'block';
                blockEl.style.background = block.colour;
                blockEl.addEventListener('click', (evt) => this.blockClicked(evt, block));
                colEl.appendChild(blockEl);
            }
        }

        return this;
    }

    blockClicked (e, block) {
        console.log(e, block);
        this.blockGrid.removeFrom(block);
        this._clearContent();
        this.render();
    }

    _clearContent() {
        let el = document.querySelector('#gridEl');
        el.innerHTML = '';
    }
}
