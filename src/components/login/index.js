import React, { Component } from 'react';

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
      </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
      </button>
    );
}

export default class LoginControl extends Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFavoriteChange = this.handleFavoriteChange.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {
            isLoggedIn: false,
            lastName: '',
            firstName: '',
            favorite: 'coconut',
            isGoing: false
        };
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: target.value
        });
    }

    handleFavoriteChange(event) {
        this.setState({
            favorite: event.target.value
        })
    }

    handleLoginClick() {
        this.setState({
            isLoggedIn: true
        });
    }

    handleLogoutClick() {
        this.setState({
            isLoggedIn: false
        })
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        }
        else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
                <form>
                    <div>
                        <label>
                        lastName:
                            <input
                                type="text"
                                name="lastName"
                                value={this.state.name}
                                onChange={this.handleInputChange}
                            />
                        </label>
                        <input type="submit" value="Submit" />
                    </div>
                    <div>
                        <label>
                        firstName:
                            <input
                                type="text"
                                name="firstName"
                                value={this.state.name}
                                onChange={this.handleInputChange}
                            />
                        </label>
                        <input type="submit" value="Submit" />
                    </div>
                    <div>
                        <label>
                        firstName:
                            <input
                                type="checkbox"
                                name="isGoing"
                                checked={this.state.isGoing}
                                onChange={this.handleInputChange}
                            />
                        </label>
                        <input type="submit" value="Submit" />
                    </div>

                    <div>
                        <label>
                            Pick your favorite La Croix flavor:
                            <select value={this.state.favorite} onChange={this.handleFavoriteChange}>
                                <option value="grapefruit">Grapefruit</option>
                                <option value="lime">Lime</option>
                                <option value="coconut">Coconut</option>
                                <option value="mango">Mango</option>
                            </select>
                        </label>
                    </div>
                </form>
            </div>
        );
    }
}