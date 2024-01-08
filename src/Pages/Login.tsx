import React from "react";
import logo from "../assets/logo.svg";

export default function Login() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <img src={logo} alt="" />
        <div>
          <h1>Login</h1>
          <input type="text" placeholder="Email address" />
          <input type="text" placeholder="Password" />
          <button>Login to your account</button>
          <p>
            Don’t have an account?<span>Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  );
}
