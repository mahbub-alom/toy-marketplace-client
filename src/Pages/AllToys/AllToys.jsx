import React, { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import { Link } from "react-router-dom";

const AllToys = () => {
  useTitle("All Toys");
  const [toys, setToys] = useState([]);
  const [limit, setLimit] = useState(20);

  const showMoreItems = () => {
    setLimit(limit + 1);
  };

  useEffect(() => {
    fetch("http://localhost:5000/addtoys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
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
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {toys.slice(0, limit).map((toy, i) => (
            <tr key={toy._id}>
              <td scope="row">{i + 1}</td>
              <td>{toy.sellerName}</td>
              <td>{toy.toyName}</td>
              <td>{toy.categoryName}</td>
              <td>{toy.price}</td>
              <td>{toy.quantity}</td>
              <Link className="btn btn-secondary mb-2" to={`/seeDetails/${toy._id}`}>view details</Link>
            </tr>
          ))}
        </tbody>

      </table>
      <div className="grid mt-4 mb-4 grid-cols-1 gap-2 col-span-6 mx-auto">
              <button
                onClick={showMoreItems}
                className="px-4 py-2 mx-auto rounded-md w-1/3 text-3xl text-white bg-blue-300"
              >
                see more
              </button>
            </div>
    </div>
  );
};

export default AllToys;
