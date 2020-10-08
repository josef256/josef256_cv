import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home} from "../components/Home";

export const MainContent=()=>{
    return (
        <main>
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </main>
    )
}
