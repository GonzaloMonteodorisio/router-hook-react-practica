import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
import Contacto from './components/Contacto';

import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import User from './components/User';

function App() {
  return (
    <Router>
        <div className="container mt-5">
            <div className="btn-group">
                <NavLink to="/" className="btn btn-dark" activeClassName="active" exact>
                    Inicio
                </NavLink>
                <NavLink to="/contacto" className="btn btn-dark" activeClassName="active">
                    Contacto
                </NavLink>
                {/* Con NavLink, a diferencia de Link, puedo agregarle una activeClassName para darle estilo al link de la ruta activa */}
                <NavLink to="/nosotros" className="btn btn-dark" activeClassName="active">
                    Nosotros
                </NavLink>
            </div>
            <hr />
            <Switch>
                {/* Con exact le decimos que lea solo el path="/" y no todos los que los contienen. De lo contrario hat que poner este Route debajo de todo */}
                <Route path="/nosotros/:id"> 
                    <User />
                </Route>
                <Route path="/" exact> 
                    <Inicio />
                </Route>
                <Route path="/contacto">
                    <Contacto />
                </Route>
                <Route path="/nosotros">
                    <Nosotros />
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
