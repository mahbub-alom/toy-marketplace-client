import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/mytoys?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [user]);

  const handleDelete = (id) => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/toys/${id}`,{
          method:"DELETE",
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if(data.deletedCount > 0) {
            Swal.fire(
              'Deleted!',
              'Your Toys data has been deleted.',
              'success'
            )
            const remaining=items.filter (toy=>toy._id !==id);
            setItems(remaining);
          }
        })
      }
    })



  }

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
              <td><Link onClick={()=>handleDelete(item._id)} className="btn btn-primary">Delete</Link></td>
              <td><Link to={`/updatedToys/${item._id}`} className="btn btn-primary">Update</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
