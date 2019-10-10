import React, { Component } from "react";
import axios from "axios";
// const url = "http://localhost:5000/";
class CreateStore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      storename: ""
    };
  }
  onChangeUsername = e => {
    this.setState({
      storename: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    const store = {
      storename: this.state.storename
    };
    console.log(store);
    axios
      .post(`https://jumpq-admin.herokuapp.com/store/add`, store)
      .then(res => console.log(res));
    this.setState({
      storename: ""
    });
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
              value={this.state.storename}
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
