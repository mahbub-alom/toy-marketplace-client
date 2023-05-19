/* eslint-disable no-unused-vars */
import React from "react";
import banner1 from "../../../../public/Banner/banner1.jpg";
import banner2 from "../../../../public/Banner/banner2.jpg";
import banner3 from "../../../../public/Banner/banner3.jpg";
import banner4 from "../../../../public/Banner/banner4.jpg";
import banner5 from "../../../../public/Banner/banner5.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="w-full" />
        <div className="absolute h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-4 pl-4 w-1/3">
            <h2 className="text-5xl font-bold">There are various types of dolls available</h2>
            <p> Look for specialty stores that focus specifically on dolls and doll-related items. These shops may offer a wider selection of dolls and accessories, as well as more unique or collectible options.</p>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide5" className="btn btn-circle me-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner2} className="w-full" />
        <div className="absolute h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-4 pl-4 w-1/3">
            <h2 className="text-5xl font-bold">There are various types of dolls available</h2>
            <p> Look for specialty stores that focus specifically on dolls and doll-related items. These shops may offer a wider selection of dolls and accessories, as well as more unique or collectible options.</p>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle me-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner3} className="w-full" />
        <div className="absolute h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-4 pl-4 w-1/3">
            <h2 className="text-5xl font-bold">There are various types of dolls available</h2>
            <p> Look for specialty stores that focus specifically on dolls and doll-related items. These shops may offer a wider selection of dolls and accessories, as well as more unique or collectible options.</p>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle me-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={banner4} className="w-full" />
        <div className="absolute h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-4 pl-4 w-1/3">
            <h2 className="text-5xl font-bold">There are various types of dolls available</h2>
            <p> Look for specialty stores that focus specifically on dolls and doll-related items. These shops may offer a wider selection of dolls and accessories, as well as more unique or collectible options.</p>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle me-5">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={banner5} className="w-full" />
        <div className="absolute h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-4 pl-4 w-1/3">
            <h2 className="text-5xl font-bold">There are various types of dolls available</h2>
            <p> Look for specialty stores that focus specifically on dolls and doll-related items. These shops may offer a wider selection of dolls and accessories, as well as more unique or collectible options.</p>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle me-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;