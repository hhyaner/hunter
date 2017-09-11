import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
import Sidebar from './components/sidebar';
import Clock from './components/clock';
import Login from './components/login';
import Warm from './components/warm';

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <div />

<div></div>

<div>{false}</div>

<div>{null}</div>

<div>{undefined}</div>

<div>{true}</div>
                <div>This is valid HTML &amp; JSX at the same time.</div>
                <Warm />
                <Login />
                <Sidebar />
                <div>
                    <Clock />
                    <Clock />
                    <Clock />
                </div>
            </div>
        )
    }
}