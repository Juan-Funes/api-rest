import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            APP
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          > 
            <span className="n  avbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              
              <li className="nav-item">
                <Link className="navbar-brand" to="/createNote">
                  Crear Nota
                </Link>
              </li>
             
            </ul>
            <Link className="nav-link" to="/createUser">
              Crear nuevo usuario
            </Link>
           
          </div>
        </div>
      </nav>
    );
  }
}
