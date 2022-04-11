import React from "react";

import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import Request from "../pages/Request";
import Orders from "../pages/Orders";
import Login from "../pages/Login.js";

const Routes = () => {

  const data = localStorage.getItem("token");
 
  return (
    <Switch>
      {data == null? (
        <Route path="/" exact component={Login} />
      ) : (
        <>
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/request" exact component={Request} />
          <Route path="/orders" exact component={Orders} />
          <Route path="/customers" component={Customers} />
        </>
      )}
    </Switch>
  );
};

export default Routes;
