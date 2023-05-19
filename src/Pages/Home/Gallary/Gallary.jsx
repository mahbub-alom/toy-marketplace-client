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
        Here is our sample collection!!
      </h2>
      <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3">
        <div className="card w-96 glass">
          <figure>
            <img style={{height:"256px"}}
            className="img-responsive w-full"
              src={doll1}
              alt="Girl doll!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="card w-96 glass">
          <figure>
            <img style={{height:"256px"}}
            className="img-responsive  w-full"
              src={doll2}
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="card w-96 glass">
          <figure style={{height:"256px"}}>
            <img
            className="img-responsive w-full"
              src={doll3}
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="card w-96 glass">
          <figure style={{height:"256px"}}>
            <img 
            className="img-responsive"
              src={doll6}
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="card w-96 glass">
          <figure style={{height:"256px"}}>
            <img
            className="img-responsive w-full"
              src={doll4}
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="card w-96 glass">
          <figure style={{height:"256px"}}> 
            <img
             className="img-responsive w-full"
              src={doll5}
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
