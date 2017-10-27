import React, { Component } from 'react';
import { GridManager } from './gridManager';
import { Block } from './block';
import { BlockGridColumn } from './blockGridColumn';

const MAX_X = 10;
const MAX_Y = 10;

export class BlockGridContainer extends Component {
    constructor (props) {
        super(props);
        const grid = []
        for (let x = 0; x < MAX_X; x++) {
            let col = [];
            for (let y = 0; y < MAX_Y; y++) {
                col.push(new Block(x, y));
            }

            grid.push(col);
        }
        this.gridManager = new GridManager(MAX_X, MAX_Y, grid);
        this.state = {
            grid: this.gridManager.grid
        };
    }

    render() {
        const columns = this.state.grid.map((col, i) =>
            <BlockGridColumn key={`col${i}`} col={col} onBlockClicked={(block) => this.blockClicked(block)}/>
        );
        return (
            <div className="grid-container">
                {columns}
            </div>
        )
    }

    blockClicked (block) {
        console.log(block);
        const newGrid = this.gridManager.removeFrom(block)
        this.setState({ grid: newGrid });
    }
}
