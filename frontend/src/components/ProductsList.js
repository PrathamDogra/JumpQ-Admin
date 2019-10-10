import React, { Component } from "react";
import axios from "axios";
import Products from './Products';
//http://localhost:5000/
const url = "http://localhost:5000/";
class ProductsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exercises: []
    };
  }
  deleteExercise = id => {
    axios
      .delete(`${url}product/${id}`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    this.setState({
      exercises: this.state.exercises.filter(exercise => exercise._id !== id)
    });
  };
  exerciseList=()=>{
    return this.state.exercises.map(exercise=>{
        return (
          <Products
            exercise={exercise}
            deleteExercise={this.deleteExercise}
            key={exercise._id}
          />
        );
    })
  }
  componentDidMount() {
    axios
      .get(`${url}product`)
      .then(res => this.setState({ exercises: res.data }))
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
          <tbody>{this.exerciseList()}</tbody>
        </table>
      </div>
    );
  }
}

export default ProductsList;
