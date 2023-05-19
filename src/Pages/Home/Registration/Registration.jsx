/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import { updateProfile } from "firebase/auth";

const Registration = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { createUser,logOut } = useContext(AuthContext);

  const handleSignUp = (event) => {
    setSuccess('')
    setError('')
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    setError('')
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateProfile(loggedUser, {
          displayName: name, photoURL: photo
      })
        setSuccess('user has been created successfully');
      logOut();
        form.reset();
        setError('')
      })
      .catch((error) => {
        console.log(error.message);
        setError("Email already exists")
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Input Your Name"
                  className="input input-bordered"
                  required
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Input Your Email"
                  className="input input-bordered"
                  required
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Input Your Password"
                  className="input input-bordered"
                  required
                  name="password"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="text"
                  placeholder="Input Your PhotoURL"
                  className="input input-bordered"
                  required
                  name="photo"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <label className="label">
                <span href="#" className="label-text-alt">
                  Already have an account ?
                  <Link
                    className="ms-1 text-blue-500 link link-hover"
                    to="/login"
                  >
                    Login
                  </Link>
                </span>
              </label>
              <p className="text-red-500">{error}</p>
              <p className="text-success">{success}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
