/* eslint-disable no-unused-vars */
import React from "react";
import logo from '../../../../public/logo/navlogo.svg';
import { FaFacebookF,FaGoogle,FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <img className="h-16" src={logo} alt="" />
        <h2>
          Barbie doll house Ltd.
          <br />
          <p>Barbie &copy; 2023 - All right reserved</p>
        </h2>
      </div>
      <div>
        <span className="footer-title">Doll</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Address</span>
        <h2>House No 115, Block - B, Gulshan, Dhaka 1212 · Bangladesh</h2>
      </div>
      <div>
        <span className="footer-title">Social Media</span>
        <a className="link link-hover mb-2"><FaFacebookF/> </a>
        <a className="link link-hover"><FaGoogle/> </a>
        <a className="link link-hover mt-2"><FaLinkedinIn/> </a>
      </div>
    </footer>
  );
};

export default Footer;
