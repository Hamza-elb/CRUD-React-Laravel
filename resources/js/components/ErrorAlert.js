import React, { Component, Fragment } from "react";

export default class ErrorAlert extends Component {
    render() {
        return (
            <div className="alert alert-danger" role="alert">
                Error check it out!
            </div>
        );
    }
}
