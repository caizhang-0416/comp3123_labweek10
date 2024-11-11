import React, { Component } from "react";

export default class DataEntryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            fullname: '',
            address1: '',
            address2: '',
            city: '',
            province: '',
            postalCode: '',
            submitted: false,
        };
    }

    handleSubmit = () => {
        this.setState({ submitted: true });
    };

    handleInput = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div>
                <h2>Data Entry Form</h2>
                <div>
                    <label>Email: </label>
                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInput}
                    />
                </div>
                <div>
                    <label>Full Name: </label>
                    <input
                        type="text"
                        name="fullname"
                        value={this.state.fullname}
                        onChange={this.handleInput}
                    />
                </div>
                <div>
                    <label>Address 1: </label>
                    <input
                        type="text"
                        name="address1"
                        value={this.state.address1}
                        onChange={this.handleInput}
                    />
                </div>
                <div>
                    <label>Address 2: </label>
                    <input
                        type="text"
                        name="address2"
                        value={this.state.address2}
                        onChange={this.handleInput}
                    />
                </div>
                <div>
                    <label>City: </label>
                    <select
                        name="city"
                        value={this.state.city}
                        onChange={this.handleInput}
                    >
                        <option value="">Select City</option>
                        <option value="Toronto">Toronto</option>
                        <option value="Vancouver">Vancouver</option>
                        <option value="Montreal">Montreal</option>
                        {/* Add more cities as needed */}
                    </select>
                </div>
                <div>
                    <label>Province: </label>
                    <input
                        type="text"
                        name="province"
                        value={this.state.province}
                        onChange={this.handleInput}
                    />
                </div>
                <div>
                    <label>Postal Code: </label>
                    <input
                        type="text"
                        name="postalCode"
                        value={this.state.postalCode}
                        onChange={this.handleInput}
                    />
                </div>
                <button onClick={this.handleSubmit}>Submit</button>

                {/* Display the submitted values only if submitted is true */}
                {this.state.submitted && (
                    <div style={{ marginTop: '20px', borderTop: '1px solid green', paddingTop: '10px' }}>
                        <h3>Submitted Information:</h3>
                        <p><strong>Email:</strong> {this.state.email}</p>
                        <p><strong>Full Name:</strong> {this.state.fullname}</p>
                        <p><strong>Address 1:</strong> {this.state.address1}</p>
                        <p><strong>Address 2:</strong> {this.state.address2}</p>
                        <p><strong>City:</strong> {this.state.city}</p>
                        <p><strong>Province:</strong> {this.state.province}</p>
                        <p><strong>Postal Code:</strong> {this.state.postalCode}</p>
                    </div>
                )}
            </div>
        );
    }
}
