import logo from "../../public/assets/logo.svg";
import { showLoginProps } from "./Login";

export default function SignUp({ showLogin, setShowLogin }: showLoginProps) {
  return (
    <div>
      {showLogin && (
        <div className="flex justify-center items-center flex-col min-h-screen">
          <img src={logo} alt="" />
          <div className="bg-[#161D2F] rounded-[10px] w-[327px] h-[420px] mt-[58px] px-[24px] pt-[24px] pb-[32px]">
            <h1 className="text-[#FFFFFF] text-[32px] font-light">Sign Up</h1>
            <input
              className="bg-[#161D2F] hover:border-b-[#FFFFFF] cursor-pointer border-b-[#5A698F] border-b mt-[40px] outline-none w-[279px] h-[37px] pl-[16px] text-[#ffffff] text-[15px] font-light leading-normal"
              type="text"
              placeholder="Email address"
            />
            <input
              className="bg-[#161D2F] hover:border-b-[#FFFFFF] cursor-pointer border-b-[#5A698F] border-b mt-[24px] outline-none w-[279px] h-[37px] pl-[16px] text-[#ffffff] text-[15px] font-light leading-normal"
              type="text"
              placeholder="Password"
            />
            <input
              className="bg-[#161D2F] hover:border-b-[#FFFFFF] cursor-pointer border-b-[#5A698F] border-b mt-[24px] outline-none w-[279px] h-[37px] pl-[16px] text-[#ffffff] text-[15px] font-light leading-normal"
              type="text"
              placeholder="Repeat Password"
            />
            <button className="mt-[40px] w-[279px] h-[48px] bg-[#FC4747] rounded-[6px] text-[#FFFFFF] text-[13px] font-light leading-normal hover:bg-[#FFFFFF] hover:text-[#161D2F]">
              Create an account
            </button>
            <p className="text-[#FFFFFF] text-[15px] font-light leading-normal text-center mt-[24px]">
              Alread have an account?
              <span
                className="text-[#FC4747] ml-[8px] cursor-pointer"
                onClick={() => setShowLogin(!showLogin)}
              >
                Login
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
