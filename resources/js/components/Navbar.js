import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <Link to="/home" className="nav-link">
                            List
                        </Link>

                        <Link to="/add" className="nav-link">
                            ADD
                        </Link>

                        <Link to="/search" className="nav-link">
                            Search
                        </Link>
                    </div>
                </nav>
            </>
        );
    }
}
