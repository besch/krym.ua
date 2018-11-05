import * as React from 'react';
import './../assets/scss/App.scss';
import Nav from './Nav';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faLightbulb } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faLightbulb);

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {
    render() {
        return (
            <div className="app">
                <Nav />
            </div>
        );
    }
}
