import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// const url = "http://localhost:5000/";
export default class EditProducts extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      storename: "",
      productname: "",
      quantity: 0,
      date: new Date(),
      stores: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://jumpq-admin.herokuapp.com/product/${this.props.match.params.id}`
      )
      .then(response => {
        this.setState({
          storename: response.data.storename,
          productname: response.data.productname,
          quantity: response.data.quantity,
          date: new Date(response.data.date)
        });
      })
      .catch(function(error) {
        console.log(error);
      });

    axios
      .get(`https://jumpq-admin.herokuapp.com/store/`)
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            stores: response.data.map(store => store.storename)
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  onChangeUsername(e) {
    this.setState({
      storename: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      productname: e.target.value
    });
  }

  onChangeDuration(e) {
    this.setState({
      quantity: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const product = {
      storename: this.state.storename,
      productname: this.state.productname,
      quantity: this.state.quantity,
      date: this.state.date
    };

    console.log(product);
    console.log(this.props.match.params.id);
    axios
      .post(
        `https://jumpq-admin.herokuapp.com/products/update/${this.props.match.params.id}`,
        product
      )
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

    // window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Edit Product</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Storename: </label>
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
            <label>Productname: </label>
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
              value="Edit Exercise Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
