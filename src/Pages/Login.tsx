import { useNavigate } from "react-router-dom";
import logo from "../../public/assets/logo.svg";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data: { email: string; password: string }) => {
    const registeredEmail = localStorage.getItem("registeredEmail");
    const registeredPassword = localStorage.getItem("registeredPassword");

    if (
      data.email === registeredEmail &&
      data.password === registeredPassword
    ) {
      navigate("/layout");
    } else {
      setError("Invalid Email or Password!");
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center flex-col min-h-screen">
        <img src={logo} alt="" />
        <div className="bg-[#161D2F] rounded-[10px] w-[327px] h-[365px] mt-[58px] px-[24px] pt-[24px] pb-[32px]">
          <h1 className="text-[#FFFFFF] text-[32px] font-light">Login</h1>
          <form onSubmit={handleSubmit(handleLogin)}>
            <input
              className="bg-[#161D2F] hover:border-b-[#FFFFFF] cursor-pointer border-b-[#5A698F] border-b mt-[40px] outline-none w-[279px] h-[37px] pl-[16px] text-[#ffffff] text-[15px] font-light leading-normal"
              type="text"
              {...register("email", { required: "Can’t be empty" })}
              placeholder="Email address"
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
            <input
              className="bg-[#161D2F] hover:border-b-[#FFFFFF] cursor-pointer border-b-[#5A698F] border-b mt-[24px] outline-none w-[279px] h-[37px] pl-[16px] text-[#ffffff] text-[15px] font-light leading-normal"
              type="password"
              {...register("password", { required: "Can’t be empty" })}
              placeholder="Password"
            />
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
            {error && <p className="error">{error}</p>}
            <button className="mt-[40px] w-[279px] h-[48px] bg-[#FC4747] rounded-[6px] text-[#FFFFFF] text-[13px] font-light leading-normal hover:bg-[#FFFFFF] hover:text-[#161D2F]">
              Login to your account
            </button>
          </form>
          <p className="text-[#FFFFFF] text-[15px] font-light leading-normal text-center mt-[24px]">
            Don’t have an account?
            <button
              className="text-[#FC4747] ml-[8px] cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
