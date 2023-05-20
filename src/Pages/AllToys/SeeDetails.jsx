/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SeeDetails = () => {
    const toy =useLoaderData()

  return (
    <div className="flex justify-center">
      <div className="card border mt-4 mb-4 card-compact bg-base-100 shadow-xl">
        <figure >
        <img style={{height:"256px"}}
            className="img-responsive w-full"
              src={toy.photo}
              alt="Girl doll!"
            />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{toy.toyName}</h2>
          <h2>Seller Name : {toy.sellerName}</h2>
          <h2>Seller Email : {toy.sellerEmail}</h2>
          <p>${toy.price}</p>
        </div>
      </div>
    </div>
  );
};

export default SeeDetails;
