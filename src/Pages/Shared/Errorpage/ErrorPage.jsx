/* eslint-disable no-unused-vars */
import React from "react";
import { useRouteError, Link } from "react-router-dom";
import errorphoto from "../../../../public/logo/error.jpg";
import useTitle from "../../../hooks/useTitle";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  useTitle('Error')
  console.log(error.message);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-red-600">Oops! Something went wrong.</h1>
        <h3 className="mb-4 text-3xl font-bold text-red-600">{error.message}</h3>
      <img src={errorphoto} alt="Error Image" className="max-w-md mb-8" />
      <button className="px-6 py-3 text-2xl bg-red-500 text-white rounded hover:bg-red-600">
        <Link to="/">Go back</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
