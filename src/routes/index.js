import React from 'react';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import Dashboard from "../containers/dashboard";
import Users from "../containers/users";
import Groups from "../containers/groups";
import NameSpace from "../containers/namespace";
import Capability from "../containers/capability";


const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
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