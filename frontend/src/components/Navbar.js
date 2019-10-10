import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="navbar-brand">
          JumpQ Admin Portal
        </div>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Products
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/product" className="nav-link">
                Add Product
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/store" className="nav-link">
                Store
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
