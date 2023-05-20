/* eslint-disable no-unused-vars */
import React from "react";
import doll1 from '../../../../public/doll/doll1.jpg'
import doll2 from '../../../../public/doll/doll2.jpg'
import doll3 from '../../../../public/doll/doll3.jpg'
import doll4 from '../../../../public/doll/doll4.jpg'
import doll5 from '../../../../public/doll/doll5.jpg'
import doll6 from '../../../../public/doll/doll6.jpg'

const Gallary = () => {
  return (
    <div className="mt-5 mb-5">
      <h2 className="text-4xl text-center text-pink-300">
        Here is our sample collection Gallery!!
      </h2>
      <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3">
        <div className="card w-96 glass">
          <figure className="h-96">
            <img 
            className="img-responsive w-full"
              src={doll1}
              alt="Girl doll!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">American girl doll</h2>
            <p>American Girl dolls are popular play dolls known for their high-quality craftsmanship</p>
          </div>
        </div>
        <div className="card w-96 glass">
          <figure className="h-96">
            <img 
            className="img-responsive  w-full"
              src={doll2}
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Couple doll</h2>
            <p>Couple dolls are designed to represent a romantic partnership or relationship.</p>
          </div>
        </div>
        <div className="card w-96 glass">
          <figure className="h-96">
            <img 
            className="img-responsive w-full"
              src={doll3}
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Interactive baby doll</h2>
            <p>Interactive baby dolls are designed to simulate the experience of caring for a real baby.</p>
          </div>
        </div>
        <div className="card w-96 glass">
          <figure className="h-96">
            <img 
            className="img-responsive"
              src={doll6}
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Play doll</h2>
            <p> Play dolls are designed for interactive and imaginative play. </p>
          </div>
        </div>
        <div className="card w-96 glass">
          <figure className="h-96">
            <img
            className="img-responsive w-full"
              src={doll4}
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Fashion doll</h2>
            <p>Beautiful picture with a doll in a pink dress standing in the middle of the road in the botanical garden</p>

          </div>
        </div>
        <div className="card w-96 glass">
          <figure className="h-96"> 
            <img
             className="img-responsive w-full"
              src={doll5}
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Rag doll</h2>
            <p>Raggedy Ann dolls are classic rag dolls known for their simple and charming design. </p>
  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
