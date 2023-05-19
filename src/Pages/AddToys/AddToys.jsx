/* eslint-disable no-unused-vars */
import React from "react";

const AddToys = () => {
  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const toyName = form.toyname.value;
    const sellerName = form.sellername.value;
    const sellerEmail = form.selleremail.value;
    const subcategory = form.subcategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    console.log(
      photo,
      toyName,
      sellerName,
      sellerEmail,
      subcategory,
      price,
      quantity,
      description,
      rating
    );
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
                    type="text"
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
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Sub Category</span>
                </label>
                <input
                  type="text"
                  placeholder="Sub Category"
                  className="input input-bordered"
                  name="subcategory"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
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
                  type="text"
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
