import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
// const url = "http://localhost:5000/";
class CreateProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      storename: "",
      productname: "",
      quantity: "",
      date: new Date(),
      stores: []
    };
  }
  onChangeUsername = e => {
    this.setState({
      storename: e.target.value
    });
  };
  onChangeDescription = e => {
    this.setState({
      productname: e.target.value
    });
  };
  onChangeDuration = e => {
    this.setState({
      quantity: e.target.value
    });
  };
  onChangeDate = date => {
    this.setState({
      date: date
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { storename, productname, quantity, date } = this.state;
    const product = {
      storename,
      productname,
      quantity,
      date
    };
    console.log(product);
    axios
      .post(`https://jumpq-admin.herokuapp.com/product/add`, product)
      .then(res => console.log(res.data));
    window.location = "/";
  };
  componentDidMount() {
    axios.get(`https://jumpq-admin.herokuapp.com/store`).then(res => {
      if (res.data.length > 0) {
        this.setState({
          stores: res.data.map(user => user.storename),
          storename: res.data[0].username
        });
      }
    });
  }
  render() {
    return (
      <div>
        <h3>Add New Product</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Store Name: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.storename}
              onChange={this.onChangeUsername}
            >
              {this.state.stores.map(function(store) {
                return (
                  <option key={store} value={store}>
                    {store}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Product Name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.productname}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Quantity: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.quantity}
              onChange={this.onChangeDuration}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Add Product"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateProduct;
