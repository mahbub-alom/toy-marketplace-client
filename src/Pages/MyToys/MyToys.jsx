import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  useTitle("My Toys");
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [selectedOption,setSelectedOption] = useState('asen');

  useEffect(() => {
    fetch(
      `https://barbie-doll-house-server.vercel.app/mytoys?email=${user.email}&sort=${selectedOption}`
    )
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [user,selectedOption]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://barbie-doll-house-server.vercel.app/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your Toys data has been deleted.",
                "success"
              );
              const remaining = items.filter((toy) => toy._id !== id);
              setItems(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex items-center space-x-2 mb-5 mt-5">
        <label htmlFor="sort" className="text-gray-500">
          Sort By:
        </label>
        <select name="sort" id="sort" className="rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-20" onChange={(e)=> setSelectedOption(e.target.value)}>
          <option value={'asen'}>Price (Low to High)</option>
          <option value={'dese'}>Price (High to Low)</option>
        </select>
      </div>
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
              <td>
                <Link
                  onClick={() => handleDelete(item._id)}
                  className="btn btn-secondary"
                >
                  Delete
                </Link>
              </td>
              <td>
                <Link
                  to={`/updatedToys/${item._id}`}
                  className="btn btn-secondary"
                >
                  Update
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
