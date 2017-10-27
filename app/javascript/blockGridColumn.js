import React, { Component } from 'react';
import { BlockContainer } from './blockContainer';

export class BlockGridColumn extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let blocks = this.props.col.map(block =>
            <BlockContainer key={block.y} meta={block} onBlockClicked={(block) => this.props.onBlockClicked(block)}/>
        );
        return (
            <div className="col">
                {blocks}
            </div>
        )
    }
}