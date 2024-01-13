import logo from "../../public/assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [resetPassword, setResetPassword] = useState<string>("");

  const handleRegister = () => {
    if (password !== resetPassword) {
      return;
    }

    // Store the email and password in local storage
    localStorage.setItem("registeredEmail", email);
    localStorage.setItem("registeredPassword", password);
    localStorage.setItem("registeredResetPassword", resetPassword);
  };

  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-center items-center flex-col min-h-screen">
        <img src={logo} alt="" />
        <div className="bg-[#161D2F] rounded-[10px] w-[327px] h-[420px] mt-[58px] px-[24px] pt-[24px] pb-[32px]">
          <h1 className="text-[#FFFFFF] text-[32px] font-light">Sign Up</h1>
          <input
            className="bg-[#161D2F] hover:border-b-[#FFFFFF] cursor-pointer border-b-[#5A698F] border-b mt-[40px] outline-none w-[279px] h-[37px] pl-[16px] text-[#ffffff] text-[15px] font-light leading-normal"
            type="text"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="bg-[#161D2F] hover:border-b-[#FFFFFF] cursor-pointer border-b-[#5A698F] border-b mt-[24px] outline-none w-[279px] h-[37px] pl-[16px] text-[#ffffff] text-[15px] font-light leading-normal"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="bg-[#161D2F] hover:border-b-[#FFFFFF] cursor-pointer border-b-[#5A698F] border-b mt-[24px] outline-none w-[279px] h-[37px] pl-[16px] text-[#ffffff] text-[15px] font-light leading-normal"
            type="password"
            placeholder="Repeat Password"
            onChange={(e) => setResetPassword(e.target.value)}
          />
          <button
            className="mt-[40px] w-[279px] h-[48px] bg-[#FC4747] rounded-[6px] text-[#FFFFFF] text-[13px] font-light leading-normal hover:bg-[#FFFFFF] hover:text-[#161D2F]"
            onClick={handleRegister}
          >
            Create an account
          </button>
          <p className="text-[#FFFFFF] text-[15px] font-light leading-normal text-center mt-[24px]">
            Alread have an account?
            <button
              className="text-[#FC4747] ml-[8px] cursor-pointer"
              onClick={() => navigate("/")}
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
