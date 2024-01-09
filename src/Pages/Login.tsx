import React from "react";
import logo from "../assets/logo.svg";

export default function Login() {
  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <img src={logo} alt="" />
        <div className="bg-[#161D2F]">
          <h1 className="text-[#FFFFFF] text-[32px] font-light">Login</h1>
          <input
            className="bg-[#161D2F]"
            type="text"
            placeholder="Email address"
          />
          <input
            className="bg-[#161D2F] border-b-[#5A698F] border-b"
            type="text"
            placeholder="Password"
          />
          <button>Login to your account</button>
          <p>
            Don’t have an account?<span>Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  );
}
