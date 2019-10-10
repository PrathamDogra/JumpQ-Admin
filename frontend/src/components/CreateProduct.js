import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
const url = "http://localhost:5000/";
class CreateProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: []
    };
  }
  onChangeUsername = e => {
    this.setState({
      username: e.target.value
    });
  };
  onChangeDescription = e => {
    this.setState({
      description: e.target.value
    });
  };
  onChangeDuration = e => {
    this.setState({
      duration: e.target.value
    });
  };
  onChangeDate = date => {
    this.setState({
      date: date
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { username, duration, date, description } = this.state;
    const exercise = {
      username,
      duration,
      date,
      description
    };
    console.log(exercise);
    axios
      .post(`${url}product/add`, exercise)
      .then(res => console.log(res.data));
    // window.location = "/";
  };
  componentDidMount() {
    axios.get(`${url}store`).then(res => {
      if (res.data.length > 0) {
        this.setState({
          users: res.data.map(user => user.username),
          username: res.data[0].username
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
            <label>Storename: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map(function(user) {
                return (
                  <option key={user} value={user}>
                    {user}
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
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Quantity: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.duration}
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
              value="Create Exercise Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateProduct;
