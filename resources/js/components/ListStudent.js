import React, { Component, Fragment } from "react";
import axios from "axios";
import ErrorAlert from "./ErrorAlert";
import "./style.css";

export default class ListStudent extends Component {
    constructor() {
        super();
        this.state = {
            students: [],
            alert_msg: "",
        };
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/index").then((response) => {
            this.setState({
                students: response.data,
            });
        });
    }

    render() {
        return (
            <Fragment>
                <hr />

                {this.state.alert_msg == "error" ? <ErrorAlert /> : null}
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">@Email</th>
                            <th scope="col">Gender</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.students.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.gender}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}
