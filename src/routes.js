import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./pages/Logon"
import Register from "./pages/Register"
import Home from "./pages/Home"
import NewIncident from "./pages/NewIncident"

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/logon" component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/home" component={Home} />
                <Route path="/incident/new" component={NewIncident} />

                <Route path="*" component={() => (<div><h1>Not found</h1></div>)} />
            </Switch>
        </BrowserRouter>
    );
}