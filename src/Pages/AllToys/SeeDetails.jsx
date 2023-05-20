/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const SeeDetails = () => {
  const toy = useLoaderData();

  return (
    <div className="flex justify-center">
      <div className="card border mt-4 mb-4 card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            style={{ height: "256px" }}
            className="img-responsive w-full"
            src={toy?.photo}
            alt="Girl doll!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">{toy?.toyName}</h2>
          <h2>Seller Name : {toy?.sellerName}</h2>
          <h2>Seller Email : {toy?.sellerEmail}</h2>
          <p>Price : ${toy?.price}</p>
          <div>
            <Rating className="text-orange-400"
              placeholderRating={toy?.rating}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            ></Rating>
            <span className="ms-2">{toy?.rating}</span>
          </div>
          <h2>Available Quantity : {toy.quantity}</h2>
          <p>Product Description : {toy.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SeeDetails;
