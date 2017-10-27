import React, { Component } from 'react';

export class BlockWrapper extends Component {
    render() {
        return (
            <div className="block"
                 style={{ backgroundColor: this.props.meta.colour}}
                 onClick={() => this.props.onBlockClicked(this.props.meta)}
                 title={`${this.props.meta.x}, ${this.props.meta.y}`}
            >
            </div>
        )
    }
}