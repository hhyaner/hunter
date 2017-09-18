import React, { Component } from 'react';

export default class LeftMenu extends Component {
    render() {
        return (
            <div className="left-menu">
                <ul>
                    <li>LeftMenu</li>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/flux">Flux</Link></li>
                </ul>
            </div>
        )
    }
}
