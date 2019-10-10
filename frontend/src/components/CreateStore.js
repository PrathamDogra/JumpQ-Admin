import React, { Component } from "react";
import axios from "axios";
const url = "http://localhost:5000/";
class CreateStore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ""
    };
  }
  onChangeUsername = e => {
    this.setState({
      username: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    const user = {
      username: this.state.username
    };
    console.log(user);
    axios
      .post(`${url}store/add`, user)
      .then(res => console.log(res));
    this.setState({
        username:''
    })
  };

  render() {
    return (
      <div>
        <h3>Add Store</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Storename: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Add Store"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateStore;
