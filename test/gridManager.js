import { GridManager } from '../app/javascript/gridManager';
import { Block } from '../app/javascript/block';
import { assert, expect } from 'chai';

describe('GridManager', () => {
    const maxX = 4;
    const maxY = 3;
    /*
        # $ $ $
        # $ # #
        $ # # $
    */
    const grid = [
        [ new Block(0, 0, '$'), new Block(0, 1, '#'), new Block(0, 2, '#')],
        [ new Block(1, 0, '#'), new Block(1, 1, '$'), new Block(1, 2, '$')],
        [ new Block(2, 0, '#'), new Block(2, 1, '#'), new Block(2, 2, '$')],
        [ new Block(3, 0, '$'), new Block(3, 1, '#'), new Block(3, 2, '$')],
    ]
    let gridManager = new GridManager(maxX, maxY, grid);

    it('should be initialised correctly', () => {
        assert.equal(gridManager.maxX, maxX);
        assert.equal(gridManager.maxY, maxY);
        assert.equal(gridManager.grid, grid);
    });

    it('removes the correct blocks', () => {
        gridManager.remove(grid[2][1]);
        /*
            # - - -
            # $ - $
            $ $ $ $
        */
        const expectedGrid = [
            [ new Block(0, 0, '$'), new Block(0, 1, '#'), new Block(0, 2, '#')],
            [ new Block(1, 0, '$'), new Block(1, 1, '$'), new Block(1, 2, 'transparent')],
            [ new Block(2, 0, '$'), new Block(2, 1, 'transparent'), new Block(2, 2, 'transparent')],
            [ new Block(3, 0, '$'), new Block(3, 1, '$'), new Block(3, 2, 'transparent')],
        ]
        expect(gridManager.grid).to.deep.equal(expectedGrid);
    });
});
