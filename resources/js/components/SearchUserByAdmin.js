import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
export default class SearchUserByAdmin extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.handelNameInputChange = this.handelNameInputChange.bind(this);
        this.handelEmailInputChange = this.handelEmailInputChange.bind(this);
        this.state = {
            name: "",
            email: "",
            students: [],
        };
    }
    componentDidMount() {
        axios
            .get("http://127.0.0.1:8000/editUser/" + this.props.match.params.id)
            .then((response) => {
                this.setState({
                    name: response.data.name,
                    email: response.data.email,
                    gender: response.data.gender,
                });
            });
    }
    handleDelete(id) {
        axios
            .delete("http://127.0.0.1:8000/admin/destroy/" + id)
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
                .get("http://127.0.0.1:8000/searchn/" + this.state.name)
                .then((response) => {
                    console.log(response.data);
                    this.setState({
                        students: response.data,
                    });
                });
        } else if (this.state.email && !this.state.name) {
            axios
                .get("http://127.0.0.1:8000/searche/" + this.state.email)
                .then((response) => {
                    console.log(response.data);
                    this.setState({
                        students: response.data,
                    });
                });
        } else if (this.state.name && this.state.email) {
            axios
                .get(
                    "http://127.0.0.1:8000/search2/" +
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
            <>
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
                                <th scope="col">Roles</th>
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
                                        <td>{item.roles}</td>
                                        <td>
                                            <Link to={`/editUser/${item.id}`}>
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
                </div>
            </>
        );
    }
}
