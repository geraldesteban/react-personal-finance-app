import PasswordHideIcon from "../../assets/icon-password-hide.svg?react";
import { useState } from "react";
import { useSignup } from "./useSignup";
import { NavLink } from "react-router-dom";
import Spinner from "../Spinner";
import Error from "../Error";

export default function AuthenticationSignup() {
  const [showPassword, setShowPassword] = useState(false);
  const { signup, isSignup, errorSignup } = useSignup();

  function handleHidePassword() {
    setShowPassword(!showPassword);
  }

  function handleCreateAccount(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signup({ email, password });
  }

  if (errorSignup) return <Error errorMessage={errorSignup} />;

  return (
    <form
      className={`relative bg-white p-10 rounded-xl`}
      onSubmit={handleCreateAccount}
    >
      <h2 className="font-myFontBold text-[32px] text-grey-900 mb-10">
        Signup
      </h2>

      <label className="font-myFontBold text-[12px] text-grey-500">Email</label>
      <input
        name="email"
        type="email"
        className="px-5 py-3 border border-beige-500 outline-none rounded-xl w-full mt-2 mb-4"
      />
      <label className="font-myFontBold text-[12px] text-grey-500">
        Create Password
      </label>
      <input
        name="password"
        type={`${showPassword ? "text" : "password"}`}
        className="px-5 py-3 border border-beige-500 outline-none rounded-xl w-full mt-2 pr-10"
      />
      <span
        className="absolute right-0 mt-6 mr-[50px] cursor-pointer"
        onClick={handleHidePassword}
      >
        <PasswordHideIcon className="h-5 w-5" />
      </span>
      <button
        type="submit"
        disabled={isSignup}
        className="font-myFontBold text-[14px] text-white bg-grey-900 py-5 rounded-xl w-full my-10"
      >
        {isSignup ? <Spinner /> : "Create Account"}
      </button>
      <div className="text-center">
        <span className="font-myFontRegular text-[14px] text-grey-500 mr-2">
          Already have an account?
        </span>
        <NavLink
          className="font-myFontBold text-[14px] text-grey-900 border-b border-grey-900"
          to={"/login"}
        >
          Login
        </NavLink>
      </div>
    </form>
  );
}
