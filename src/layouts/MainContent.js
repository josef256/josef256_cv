import React from 'react';
import {Route, Switch} from "react-router-dom";
import {Home} from "../components/Home";
import {Portfolio} from "../components/Portfolio";
import {About} from "../components/About";
import {Contact} from "../components/Contact";
import {NoMatch} from "../components/NoMatch";

export const MainContent=()=>{
    return (
        <main className="w-full pt-20">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/portfolio">
                    <Portfolio />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="*">
                    <NoMatch />
                </Route>
            </Switch>
        </main>
    )
}
