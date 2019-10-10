import React, { Component } from "react";
import axios from "axios";
import Products from './Products';
//http://localhost:5000/
// const url = "http://localhost:5000/";
class ProductsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }
  deleteProduct = id => {
    axios
      .delete(`https://jumpq-admin.herokuapp.com/product/${id}`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    this.setState({
      products: this.state.products.filter(product => product._id !== id)
    });
  };
  productList=()=>{
    return this.state.products.map(product=>{
        return (
          <Products
            product={product}
            deleteproduct={this.deleteproduct}
            key={product._id}
          />
        );
    })
  }
  componentDidMount() {
    axios
      .get(`https://jumpq-admin.herokuapp.com/product`)
      .then(res => this.setState({ products: res.data }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <h3>Products List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Storename</th>
              <th>Productname</th>
              <th>Quantity</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.productList()}</tbody>
        </table>
      </div>
    );
  }
}

export default ProductsList;
