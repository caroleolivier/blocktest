import { BlockGrid } from '../app/javascript/blockGrid';
import { Block } from '../app/javascript/block';
import { assert, expect } from 'chai';

describe('BlockGrid', () => {
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
    let blockGrid = new BlockGrid(maxX, maxY, grid);

    it('should be initialised correctly', () => {
        assert.equal(blockGrid.maxX, maxX);
        assert.equal(blockGrid.maxY, maxY);
        assert.equal(blockGrid.grid, grid);
    });

    it('removes the correct blocks', () => {
        blockGrid.removeFrom(grid[2][1]);
        /*
            # - - -
            # $ - $
            $ $ $ $
        */
        const expectedGrid = [
            [ new Block(0, 0, '$'), new Block(0, 1, '#'), new Block(0, 2, '#')],
            [ new Block(1, 0, '$'), new Block(1, 1, '$'), new Block(1, 2, 'black')],
            [ new Block(2, 0, '$'), new Block(2, 1, 'black'), new Block(2, 2, 'black')],
            [ new Block(3, 0, '$'), new Block(3, 1, '$'), new Block(3, 2, 'black')],
        ]
        expect(blockGrid.grid).to.deep.equal(expectedGrid);
    });
});
