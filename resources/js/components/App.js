import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import List from "./List";
import Add from "./Add";
import Edit from "./Edit";
import Search from "./Search";
import AdminControletUsers from "./AdminControleUser";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <Navbar />
                        </div>
                        <Route exact path="/home" component={List} />
                        <Route exact path="/add" component={Add} />
                        <Route exact path="/edit/:id" component={Edit} />
                        <Route exact path="/search" component={Search} />
                        <Route
                            exact
                            path="/users"
                            component={AdminControletUsers}
                        />
                        <Route exact path="/addUser" component={AddUser} />
                        <Route
                            exact
                            path="/editUser/:id"
                            component={EditUser}
                        />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

if (document.getElementById("ap")) {
    ReactDOM.render(<App />, document.getElementById("ap"));
}
