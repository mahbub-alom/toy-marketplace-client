/* eslint-disable no-unused-vars */
import React from "react";
import useTitle from "../../hooks/useTitle";
import { useLoaderData } from "react-router-dom";
import ShowAllToys from "./ShowAllToys";

const AllToys = () => {
  useTitle("All Toys");
  const toys = useLoaderData();
  return (
    <div>
      <h2 className="text-center text-3xl text-pink-500">added toys {toys.length}</h2>
      {toys.map((toy) => (
        <ShowAllToys key={toy._id} toy={toy}></ShowAllToys>
      ))}
    </div>
  );
};

export default AllToys;
