import React from "react";
import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import Gallary from "../Gallary/Gallary";
import Category from "../Category/Category";
import About from "../About/About";


const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Gallary></Gallary>
      <Category></Category>
      <About></About>
    </div>
  );
};

export default Home;
