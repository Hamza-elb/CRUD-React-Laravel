import React, { Component } from "react";

import "./style.css";

export default class SearchStudent extends Component {
    constructor(props) {
        super(props);
        this.handelNameInputChange = this.handelNameInputChange.bind(this);
        this.handelEmailInputChange = this.handelEmailInputChange.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: "",
            email: "",

            students: [],
        };
    }
    componentDidMount() {
        axios
            .get("http://127.0.0.1:8000/edit/" + this.props.match.params.id)
            .then((response) => {
                this.setState({
                    name: response.data.name,
                    email: response.data.email,
                    gender: response.data.gender,
                });
            });
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

    onSubmit(e) {
        e.preventDefault();

        if (this.state.name && !this.state.email) {
            axios
                .get("http://127.0.0.1:8000/searchname/" + this.state.name)
                .then((response) => {
                    console.log(response.data);
                    this.setState({
                        students: response.data,
                    });
                });
        } else if (this.state.email && !this.state.name) {
            axios
                .get("http://127.0.0.1:8000/searchemail/" + this.state.email)
                .then((response) => {
                    console.log(response.data);
                    this.setState({
                        students: response.data,
                    });
                });
        } else if (this.state.name && this.state.email) {
            axios
                .get(
                    "http://127.0.0.1:8000/search/" +
                        this.state.name +
                        "/" +
                        this.state.email
                )
                .then((response) => {
                    console.log(response.data);
                    this.setState({
                        students: response.data,
                    });
                });
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={this.state.name}
                            onChange={this.handelNameInputChange}
                            aria-describedby="emailHelp"
                            placeholder="Enter Name to search..."
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">
                            Email Adress
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name="email"
                            id="email"
                            value={this.state.email}
                            onChange={this.handelEmailInputChange}
                            aria-describedby="emailHelp"
                            placeholder="Enter Email to search.."
                        />
                    </div>

                    <button type="submit" className="btn border-shadow">
                        <span className="text-gradient">
                            <i className="fas fa-search"></i>
                        </span>
                    </button>
                </form>
                <br />
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">@Email</th>
                            <th scope="col">Gender</th>
                        </tr>
                    </thead>

                    {this.state.name != "" && this.state.email != "" ? (
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
                    ) : null}
                </table>
            </div>
        );
    }
}
