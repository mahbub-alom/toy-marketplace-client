/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { signIn,googleLogin } = useContext(AuthContext);
  useTitle('Login');

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email,password)
    .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess('user logged successfully');
        setError('');
        form.reset();
      })
    .catch(error=>{
        console.log(email.message);
        setError(error.message)
      })

  };

  const signInGoogle=()=>{
    googleLogin()
    .then(result=>{
      const loggedUser = result.user;
      console.log(loggedUser);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Google login Successfully',
        showConfirmButton: false,
        timer: 1500
      })
    })
    .catch(error=>{
      console.log(error.message);
    })
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
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
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
              <label className="label">
                <span href="#" className="label-text-alt">
                  Don&apos;t have an account ?
                  <Link
                    className="ms-1 text-blue-500 link link-hover"
                    to="/registration"
                  >
                    Registration
                  </Link>
                </span>
              </label>
            </form>
            <div className="divider">OR</div>

            <div>
              <button onClick={signInGoogle} className="btn btn-primary">
                <FaGoogle className="me-2" />
                Login with google
              </button>
            </div>
            <p className="text-red-500">{error}</p>
            <p className="text-success">{success}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
