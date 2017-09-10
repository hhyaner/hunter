import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
import LeftMenu from './components/left-menu';

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <LeftMenu />
                <div>Right</div>
            </div>
        )
    }
}
