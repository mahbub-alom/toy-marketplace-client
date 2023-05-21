import React, { useState } from "react";
import useTitle from "../../hooks/useTitle";
import Swal from "sweetalert2";

const AddToys = () => {
  useTitle("Add Toys");

  const bookCategories = ["Barbie Doll", "American Doll", "Baby Doll"];

  const [selectedToyCategory, setSelectedToyCategory] = useState(
    bookCategories[0]
  );

  const handleChangeSelectedValue = (event) => {
    setSelectedToyCategory(event.target.value);
  };

  const handleAddToy = (event) => {

    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const toyName = form.toyname.value;
    const sellerName = form.sellername.value;
    const sellerEmail = form.selleremail.value;
    const categoryName = form.categoryName.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const toyDetails = {
      photo,
      toyName,
      sellerName,
      sellerEmail,
      categoryName,
      price,
      rating,
      quantity,
      description,
    };

    fetch("https://barbie-doll-house-server-mahbub-alom.vercel.app/addtoys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toyDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Toys has been added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        form.reset();
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col w-full">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-3">Add Toy</h1>
        </div>
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <form onSubmit={handleAddToy}>
            <div className="card-body">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Toy Photo</span>
                  </label>
                  <input
                    type="url"
                    placeholder="PhotoURL"
                    className=" input input-bordered"
                    name="photo"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Toy Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Toy Name"
                    className="input input-bordered"
                    name="toyname"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Seller Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Seller Name"
                    className="input input-bordered"
                    name="sellername"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Seller Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Seller Email"
                    className="input input-bordered"
                    name="selleremail"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Sub Category</span>
                  </label>
                  <select
                    id="inputState"
                    name="categoryName"
                    className="form-select p-3 rounded-lg "
                    value={selectedToyCategory}
                    onChange={handleChangeSelectedValue}
                  >
                    {bookCategories.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Price"
                    className="input input-bordered"
                    name="price"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Rating"
                    className="input input-bordered"
                    name="rating"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Available Quantity</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Quantity"
                    className="input input-bordered"
                    name="quantity"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Details Description</span>
                  </label>
                  <input
                    type="text"
                    name="description"
                    placeholder="Write product description"
                    id=""
                    className="p-2 rounded"
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add Toy</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddToys;
