/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const Category = () => {
  const [allCategory, setAllCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/addtoys")
      .then((res) => res.json())
      .then((data) => setAllCategory(data));
  }, []);

  return (
    <Tabs>
      <h2 className="text-4xl text-center text-pink-300 mb-4">
        Toy All Category
      </h2>
      <TabList className="flex justify-center">
        <Tab>
          <button className="btn btn-active btn-primary me-3">
            Barbie dolls
          </button>
        </Tab>
        <Tab>
          <button className="btn btn-active btn-primary me-3">
            baby dolls
          </button>
        </Tab>
        <Tab>
          <button className="btn btn-active btn-primary">American dolls</button>
        </Tab>
      </TabList>

      <TabPanel>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto mt-5 mb-5 gap-4">
      {
        allCategory.filter(category => category.categoryName === "Barbie Doll").map(item=> 
          <div key={item._id} className="card w-96 bg-base-100 shadow-xl border">
          <figure className="h-96">
            <img src={item.photo} alt="baby dolls" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">{item.categoryName}</h2>
            <p>Toy Price : {item.price}</p>
            <p>{item.rating}</p>
            <div className="card-actions justify-end">
              <Link to={`/seeDetails/${item._id}`} className="btn btn-primary">View details</Link>
            </div>
          </div>
        </div>
        )
      }
      </div>
    
      </TabPanel>
      <TabPanel>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto mt-5 mb-5 gap-4">
      {
        allCategory.filter(category => category.categoryName === "Baby Doll").map(item=> 
          <div key={item._id} className="card w-96 bg-base-100 shadow-xl border">
          <figure>
            <img src={item.photo} alt="baby dolls" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">{item.categoryName}</h2>
            <p>{item.price}</p>
            <p>{item.rating}</p>
            <div className="card-actions justify-end">
              <Link to={`/seeDetails/${item._id}`} className="btn btn-primary" >View details</Link>
            </div>
          </div>
        </div>
        )
      }
      </div>
      </TabPanel>
      <TabPanel>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto mt-5 mb-5 gap-4">
      {
        allCategory.filter(category => category.categoryName === "American Doll").map(item=> 
          <div key={item._id} className="card w-96 bg-base-100 shadow-xl border">
          <figure>
            <img src={item.photo} alt="baby dolls" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.categoryName}</h2>
            <p>{item.price}</p>
            <p>{item.rating}</p>
            <div className="card-actions justify-end">
              <Link to={`/seeDetails/${item._id}`} className="btn btn-primary">View details</Link>
            </div>
          </div>
        </div>
        )
      }
      </div>
      </TabPanel>
    </Tabs>
  );
};

export default Category;
