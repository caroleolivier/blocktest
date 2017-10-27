import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './app';

((w) => w.addEventListener('DOMContentLoaded', () => {
        ReactDOM.render(
            React.createElement(App),
            document.getElementById('gridEl')
        );
    }
))(window)
