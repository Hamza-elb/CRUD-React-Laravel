import React, { Component, Fragment } from "react";
import axios from "axios";
//import './style.css'
import SuccessAlert from "./SuccessAlert";
import ErrorAlert from "./ErrorAlert";

export default class AddUser extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            roles: "",
            alert_msg: "",
        };
        this.handelNameInputChange = this.handelNameInputChange.bind(this);
        this.handelEmailInputChange = this.handelEmailInputChange.bind(this);
        this.handelRolesInputChange = this.handelRolesInputChange.bind(this);
        this.handelPasswordInputChange =
            this.handelPasswordInputChange.bind(this);
        this.handelForumSubmit = this.handelForumSubmit.bind(this);
        this.handleClean = this.handleClean.bind(this);
    }

    handelNameInputChange(e) {
        this.setState({
            name: e.target.value,
        });
    }

    handelEmailInputChange(e) {
        this.setState({
            email: e.target.value,
        });
    }
    handelPasswordInputChange(e) {
        this.setState({
            password: e.target.value,
        });
    }

    handelRolesInputChange(e) {
        this.setState({
            roles: e.target.value,
        });
    }

    handelForumSubmit(e) {
        e.preventDefault();
        const user = {
            name: this.state.name,
            email: this.state.email,
            roles: this.state.roles,
            password: this.state.password,
        };

        axios
            .post("http://127.0.0.1:8000/addUser", user)
            .then((response) => {
                this.setState({ alert_msg: "success" });
            })
            .catch((error) => {
                this.setState({ alert_msg: "error" });
            });

        this.setState({
            name: "",
            email: "",
            roles: "",
            password: "",
        });
    }

    handleClean() {
        this.setState({
            name: "",
            email: "",
            roles: "",
            password: "",
        });
    }

    render() {
        return (
            <Fragment>
                <hr />
                <div className="mb-3">
                    <button
                        type="submit"
                        onClick={this.handleClean}
                        className="btn border-shadow delete"
                    >
                        <span className="text-gradient">
                            <i className="fas fa-broom"></i>
                        </span>
                    </button>
                </div>

                {this.state.alert_msg == "success" ? <SuccessAlert /> : null}
                {this.state.alert_msg == "error" ? <ErrorAlert /> : null}

                <form onSubmit={this.handelForumSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Enter Your Name..."
                            onChange={this.handelNameInputChange}
                            value={this.state.name}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            aria-describedby="emailHelp"
                            name="email"
                            placeholder="Enter Your Email..."
                            onChange={this.handelEmailInputChange}
                            value={this.state.email}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            aria-describedby="emailHelp"
                            name="password"
                            placeholder="Enter Your Email..."
                            onChange={this.handelPasswordInputChange}
                            value={this.state.password}
                        />
                    </div>
                    <div className="form-group">
                        <div className="mb-3">
                            <label htmlFor="roles" className="text-dark">
                                Roles
                            </label>
                        </div>

                        <div className="radio-buttons">
                            <input
                                type="radio"
                                name="roles"
                                onChange={this.handelRolesInputChange}
                                value="user"
                                checked={this.state.roles == "user"}
                            />
                            <label htmlFor="radio-2" className="radio-label">
                                User
                            </label>
                        </div>
                    </div>

                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </Fragment>
        );
    }
}
