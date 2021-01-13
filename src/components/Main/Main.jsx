import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { page } from "../../router";
import Features from "../Features/Features";
import Home from "../Home/Home";
import SignUp from "../SignUp/SignUp";
import NotFound from "../NotFound/NotFound";
import "./Main.scss";

const isAuth = true

const Main = ({location}) => {
  return (
    <main className="Main">
      <Switch location={location} >
        <Route path={page.home} exact>
          <Home />
        </Route>

        <Route path={page.features} exact render={()=>{
          if (isAuth) {
            return <Features/>
          } else {
            return <Redirect to={page.signUp} />
          }
        }} />
          
        <Route path={page.signUp} exact>
          <SignUp />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
