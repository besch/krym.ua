import * as React from 'react';
import './../assets/scss/App.scss';
import Nav from './Nav';

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
