import React from 'react';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import Dashboard from "../containers/Dashboard";
import Users from "../containers/Users";
import Groups from "../containers/Groups";
import NameSpace from "../containers/Namespace";
import Capability from "../containers/Capability";
import Login from "../containers/Login";


const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route exact path="/dashboard">
                    <Dashboard />
                </Route>
                <Route exact path="/users">
                    <Users />
                </Route>
                <Route exact path="/groups">
                    <Groups />
                </Route>
                <Route exact path="/namespace">
                    <NameSpace />
                </Route>
                <Route exact path="/capability">
                    <Capability />
                </Route>
            </Switch>
        </Router>
    );
};


export default Routes;