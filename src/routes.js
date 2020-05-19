import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Dashboard from './views/greenfarm/Dashboard'
import Controller from './views/greenfarm/Controller'

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/home" />
  },
  {
    path: "/home",
    layout: DefaultLayout,
    component: Dashboard
  },
  {
    path: "/controller/:id",
    layout: DefaultLayout,
    component: Controller
  },
];
