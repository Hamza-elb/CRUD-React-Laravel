import React, { Component, Fragment } from "react";
import axios from "axios";
import DeletAlert from "./DeletAlert";
import ErrorAlert from "./ErrorAlert";
import { Link } from "react-router-dom";
import "./style.css";

export default class List extends Component {
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

    handleDelete(id) {
        axios
            .delete("http://127.0.0.1:8000/destroy/" + id)
            .then((response) => {
                var students = this.state.students;
                for (var i = 0; i < students.length; i++) {
                    if (students[i].id == id) {
                        students.splice(i, 1);
                        this.setState({
                            students: students,
                        });
                    }
                }
                this.setState({ alert_msg: "success" });
            })
            .catch((error) => {
                this.setState({ alert_msg: "error" });
            });
    }

    render() {
        return (
            <Fragment>
                <hr />

                {this.state.alert_msg == "success" ? <DeletAlert /> : null}
                {this.state.alert_msg == "error" ? <ErrorAlert /> : null}
                <div className="container">
                    <div className="box-nav d-flex justify-between">
                        <Link to="/users" className="btn border-shadow delete">
                            <span className="text-gradient">
                                Users <i className="fas fa-users"></i>
                            </span>
                        </Link>
                    </div>
                </div>
                <hr />
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">@Email</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Action</th>
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
                                    <td>
                                        <Link to={`/edit/${item.id}`}>
                                            <span className="text-gradient">
                                                <i className="fas fa-pencil-alt "></i>
                                            </span>
                                        </Link>
                                        <a
                                            hrefr="#"
                                            onClick={this.handleDelete.bind(
                                                this,
                                                item.id
                                            )}
                                            id="delet"
                                        >
                                            <span className="text-gradient">
                                                <i className="fas fa-times"></i>
                                            </span>
                                        </a>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}
