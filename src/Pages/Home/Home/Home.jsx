/* eslint-disable no-unused-vars */
import React from "react";
import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import Gallary from "../Gallary/Gallary";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Gallary></Gallary>
    </div>
  );
};

export default Home;
