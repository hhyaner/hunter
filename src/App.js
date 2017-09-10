import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
import LeftMenu from './components/left-menu';
import Clock from './components/clock';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function Index() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            
        </div>
    )
}


export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Index />
                <LeftMenu />
                <div>
                    <Clock />
                    <Clock />
                    <Clock />
                    <Welcome name="张三" /></div>
            </div>
        )
    }
}


