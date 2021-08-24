import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Add from "./Add";
import SearchStudent from "./SearchStudent";
import ListStudent from "./ListStudent";
function AppStudent() {
    return (
        <BrowserRouter>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <Navbar />
                        </div>
                        <Route exact path="/home" component={ListStudent} />
                        <Route exact path="/add" component={Add} />
                        <Route exact path="/search" component={SearchStudent} />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default AppStudent;

if (document.getElementById("apStudent")) {
    ReactDOM.render(<AppStudent />, document.getElementById("apStudent"));
}
