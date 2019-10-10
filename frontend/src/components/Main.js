import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";

import CreateStore from "./CreateStore";
import EditProducts from "./EditProducts";
import CreateProduct from "./CreateProduct";
import ProductsList from "./ProductsList";

function Main() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ProductsList} />
        <Route path="/edit/:id" component={EditProducts} />
        <Route path="/product" component={CreateProduct} />
        <Route path="/store" component={CreateStore} />
      </div>
    </Router>
  );
}

export default Main;
