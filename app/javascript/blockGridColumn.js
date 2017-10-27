import React, { Component } from 'react';
import { BlockWrapper } from './blockWrapper';

export class BlockGridColumn extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let blocks = []
        for(let i=this.props.col.length-1; i >= 0; i--) {
            let block = this.props.col[i];
            let blockWrapper = <BlockWrapper key={`${block.x}${block.y}`} meta={block} onBlockClicked={(block) => this.props.onBlockClicked(block)}/>
            blocks.push(blockWrapper);
        }
        return (
            <div className="col">
                {blocks}
            </div>
        )
    }
}