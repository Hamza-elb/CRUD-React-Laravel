import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Add from "./Add";
import ListUser from "./ListUser";
import Edit from "./Edit";
import SearchUser from "./SearchUser";

function AppUser() {
    return (
        <BrowserRouter>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <Navbar />
                        </div>
                        <Route exact path="/home" component={ListUser} />
                        <Route exact path="/add" component={Add} />
                        <Route exact path="/edit/:id" component={Edit} />
                        <Route exact path="/search" component={SearchUser} />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default AppUser;

if (document.getElementById("apUser")) {
    ReactDOM.render(<AppUser />, document.getElementById("apUser"));
}
