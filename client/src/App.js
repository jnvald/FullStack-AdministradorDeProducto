import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./normalize.css";
import "./App.css";
import Producto from "./componente/Producto";
import EditarProducto from "./componente/EditarProducto";
import Home from "./views/Home";
import Nav from "./componente/Nav";

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/:productoID/editar">
          <EditarProducto />
        </Route>
        <Route path="/:productoID">
          <Producto />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
