import React, { Component } from 'react';

export class BlockWrapper extends Component {
    render() {
        return (
            <div className="block"
                 style={{ backgroundColor: this.props.block.colour}}
                 onClick={() => this.props.onBlockClicked(this.props.block)}
                 title={`${this.props.block.x}, ${this.props.block.y}`}
            >
            </div>
        )
    }
}