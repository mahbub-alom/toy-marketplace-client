import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Swal from "sweetalert2";
import Aos from 'aos';
import "aos/dist/aos.css";


const Category = () => {
  const [allCategory, setAllCategory] = useState([]);
  

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);


  useEffect(() => {
    fetch("https://barbie-doll-house-server-mahbub-alom.vercel.app/addtoys")
      .then((res) => res.json())
      .then((data) => setAllCategory(data));
  }, []);

  const notify = () => Swal.fire({
    position: 'center',
    icon: 'warning',
    title: 'You have to log in first to view details',
    showConfirmButton: false,
    timer: 1500
  });

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
          {allCategory
            .filter((category) => category.categoryName === "Barbie Doll")
            .map((item) => (
              <div
                key={item._id}
                className="card  w-96 bg-base-100 shadow-xl border" data-aos="zoom-out"
              >
                <figure className="h-96">
                  <img src={item?.photo} alt="Barbie dolls" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-3xl">{item?.categoryName}</h2>
                  <p>Toy Price : {item?.price}</p>
                  <div>
                    <Rating
                      className="text-orange-400"
                      placeholderRating={item?.rating}
                      readonly
                      emptySymbol={<FaRegStar></FaRegStar>}
                      placeholderSymbol={<FaStar></FaStar>}
                      fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                    <span className="m-2">{item?.rating}</span>
                  </div>
                  <div className="card-actions justify-end">
                    <Link onClick={notify}
                      to={`/seeDetails/${item?._id}`}
                      className="btn btn-primary"
                    >
                      View details
                    </Link>
                    
                  </div>
                </div>
              </div>
            ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto mt-5 mb-5 gap-4">
          {allCategory
            .filter((category) => category.categoryName === "Baby Doll")
            .map((item) => (
              <div
                key={item?._id}
                className="card w-96 bg-base-100 shadow-xl border"data-aos="fade-up"
              >
                <figure className="h-96">
                  <img src={item?.photo} alt="baby dolls" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-3xl">{item?.categoryName}</h2>
                  <p>Toy Price : {item?.price}</p>
                  <div>
                    <Rating
                      className="text-orange-400"
                      placeholderRating={item?.rating}
                      readonly
                      emptySymbol={<FaRegStar></FaRegStar>}
                      placeholderSymbol={<FaStar></FaStar>}
                      fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                    <span className="m-2">{item?.rating}</span>
                  </div>
                  <div className="card-actions justify-end">
                    <Link onClick={notify}
                      to={`/seeDetails/${item?._id}`}
                      className="btn btn-primary"
                    >
                      View details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto mt-5 mb-5 gap-4">
          {allCategory
            .filter((category) => category.categoryName === "American Doll")
            .map((item) => (
              <div
                key={item._id}
                className="card w-96 bg-base-100 shadow-xl border" data-aos="zoom-in"
              >
                <figure className="h-96">
                  <img src={item?.photo} alt="American dolls" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item?.categoryName}</h2>
                  <p>Toy Price : {item?.price}</p>
                  <div>
                    <Rating
                      className="text-orange-400"
                      placeholderRating={item?.rating}
                      readonly
                      emptySymbol={<FaRegStar></FaRegStar>}
                      placeholderSymbol={<FaStar></FaStar>}
                      fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                    <span className="m-2">{item?.rating}</span>
                  </div>
                  <div className="card-actions justify-end">
                    <Link onClick={notify}
                      to={`/seeDetails/${item?._id}`}
                      className="btn btn-primary"
                    >
                      View details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default Category;
