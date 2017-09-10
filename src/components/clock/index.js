import React, { Component } from 'react';
import FormattedDate from './FormattedDate';

export default class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <FormattedDate date={this.state.date}/>
            </div>
        )
    }   
}