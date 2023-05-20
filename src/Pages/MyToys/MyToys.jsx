/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link } from "react-router-dom";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/mytoys?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [user]);

  return (
    <div className="overflow-x-auto">
      <table className="table table-dark table-striped table-compact w-full">
        <thead>
          <tr>
            <th scope="col">SL</th>
            <th scope="col">Seller Name</th>
            <th scope="col">Toy Name</th>
            <th scope="col">Sub Category</th>
            <th scope="col">Price</th>
            <th scope="col">Available Quantity</th>
            <th scope="col">Remove</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={item._id}>
            <td scope="row">{i + 1}</td>
              <td>{item.sellerName}</td>
              <td>{item.toyName}</td>
              <td>{item.categoryName}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td><Link className="btn btn-primary">Delete</Link></td>
              <td><Link className="btn btn-primary">Update</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
