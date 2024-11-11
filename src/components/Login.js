import React, { Component } from "react";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            submitted: false,
        };
    }

    handleClick = () => {
        this.setState({
            submitted: true,
        });
    };

    handleInput = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div className="form">
                <h2>Login</h2>
                <div className="form-group">
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="firstname"
                        value={this.state.firstname}
                        placeholder="Enter First Name"
                        onChange={this.handleInput}
                    />
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="lastname"
                        value={this.state.lastname}
                        placeholder="Enter Last Name"
                        onChange={this.handleInput}
                    />
                </div>
                <button onClick={this.handleClick}>Login</button>

                {this.state.submitted && (
                    <div className="submitted-info">
                        <h3>Submitted Information:</h3>
                        <p>First Name: {this.state.firstname}</p>
                        <p>Last Name: {this.state.lastname}</p>
                    </div>
                )}
            </div>
        );
    }
}
