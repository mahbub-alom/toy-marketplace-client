/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../public/logo/navlogo.svg";

const Navbar = () => {
  const navItem = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link>All Toys</Link>
      </li>
      <li>
        <Link>Add a Toys</Link>
      </li>
      <li>
        <Link to='/blog'>Blog</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 h-24">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>

        <div className="flex gap-3 items-center">
          <h2 className="text-pink-400 text-2xl">Barbie Doll</h2>
          <Link to="/">
            <img className="h-16" src={logo} alt="" />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>
      <div className="navbar-end">
        <div className="avatar">
          <div className="w-12 me-4 mt-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;