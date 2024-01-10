import React from "react";
import logo from "../assets/logo.svg";

export default function Login({ showLogin, setShowLogin }) {
  return (
    <div>
      {showLogin && (
        <div className="flex justify-center items-center flex-col min-h-screen">
          <img src={logo} alt="" />
          <div className="bg-[#161D2F] rounded-[10px] w-[327px] h-[365px] mt-[58px] px-[24px] pt-[24px] pb-[32px]">
            <h1 className="text-[#FFFFFF] text-[32px] font-light">Login</h1>
            <input
              className="bg-[#161D2F] border-b-[#5A698F] border-b mt-[40px] outline-none w-[279px] h-[37px]"
              type="text"
              placeholder="Email address"
            />
            <input
              className="bg-[#161D2F] border-b-[#5A698F] border-b mt-[24px] outline-none w-[279px] h-[37px]"
              type="text"
              placeholder="Password"
            />
            <button className="mt-[40px] w-[279px] h-[48px] bg-[#FC4747] rounded-[6px] text-[#FFFFFF] text-[13px] font-light leading-normal">
              Login to your account
            </button>
            <p className="text-[#FFFFFF] text-[15px] font-light leading-normal text-center mt-[24px]">
              Don’t have an account?
              <span
                className="text-[#FC4747] ml-[8px] cursor-pointer"
                onClick={() => setShowLogin(!showLogin)}
              >
                Sign Up
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
