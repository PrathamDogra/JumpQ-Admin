import React from "react";
import { Link } from "react-router-dom";
const Products = props => {
  return (
    <tr>
      <td>{props.product.storename}</td>
      <td>{props.product.productname}</td>
      <td>{props.product.quantity}</td>
      <td>{props.product.date.substring(0, 10)}</td>
      <td>
        <Link to={"/edit/" + props.product._id}>Edit</Link> |{" "}
        <a
          href="#"
          onClick={() => {
            props.deleteproduct(props.product._id);
          }}
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Products;
