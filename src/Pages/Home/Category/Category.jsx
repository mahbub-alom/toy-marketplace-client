/* eslint-disable no-unused-vars */
import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const Category = () => {
  return (
    <Tabs>
      <h2 className="text-4xl text-center text-pink-300 mb-4">Toy All Category</h2>
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
          <div className="card w-96 bg-base-100 shadow-xl border">
            <figure>
              <img
                src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl border">
            <figure>
              <img
                src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl border">
            <figure>
              <img
                src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <h2>baby doll</h2>
      </TabPanel>
      <TabPanel>
        <h2>american doll</h2>
      </TabPanel>
    </Tabs>
  );
};

export default Category;
