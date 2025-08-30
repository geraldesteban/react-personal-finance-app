import React, { useState } from "react";
import PasswordHideIcon from "../../assets/icon-password-hide.svg?react";
import { useSignup } from "./useSignup";
import Spinner from "../Spinner";

export default function Login() {
  const { signup, isPending } = useSignup();
  const [signLogOrSign, setLogOrSign] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  function handleLogOrSign(e) {
    e.preventDefault();
    setLogOrSign(!signLogOrSign);
  }

  function handleHidePassword() {
    setShowPassword(!showPassword);
  }

  function handleCreateAccount(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signup({ email, password });
  }

  return (
    <>
      {/* Signup */}
      <form
        className={`relative bg-white p-10 rounded-xl ${
          signLogOrSign ? "block" : "hidden"
        }`}
        onSubmit={handleCreateAccount}
      >
        <h2 className="font-myFontBold text-[32px] text-grey-900 mb-10">
          Signup
        </h2>

        <label className="font-myFontBold text-[12px] text-grey-500">
          Email
        </label>
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
          disabled={isPending}
          className="font-myFontBold text-[14px] text-white bg-grey-900 py-5 rounded-xl w-full my-10"
        >
          {isPending ? <Spinner /> : "Create Account"}
        </button>
        <div className="text-center">
          <span className="font-myFontRegular text-[14px] text-grey-500 mr-2">
            Already have an account?
          </span>
          <button
            className="font-myFontBold text-[14px] text-grey-900 border-b border-grey-900"
            onClick={handleLogOrSign}
          >
            Login
          </button>
        </div>
      </form>
      {/* Login */}
      <form
        className={`relative bg-white p-10 rounded-xl ${
          signLogOrSign ? "hidden" : "block"
        }`}
      >
        <h2 className="font-myFontBold text-[32px] text-grey-900 mb-10">
          Login
        </h2>

        <label className="font-myFontBold text-[12px] text-grey-500">
          Email
        </label>
        <input
          type="email"
          className="px-5 py-3 border border-beige-500 outline-none rounded-xl w-full mt-2 mb-4"
        />
        <label className="font-myFontBold text-[12px] text-grey-500">
          Password
        </label>
        <input
          type={`${showPassword ? "text" : "password"}`}
          className="px-5 py-3 border border-beige-500 outline-none rounded-xl w-full mt-2 pr-10"
        />
        <span
          className="absolute right-0 mt-6 mr-[50px] cursor-pointer"
          onClick={handleHidePassword}
        >
          <PasswordHideIcon className="h-5 w-5" />
        </span>
        <button className="font-myFontBold text-[14px] text-white bg-grey-900 py-5 rounded-xl w-full my-10">
          Login
        </button>
        <div className="text-center">
          <span className="font-myFontRegular text-[14px] text-grey-500 mr-2">
            Need to create an account?
          </span>
          <button
            className="font-myFontBold text-[14px] text-grey-900 border-b border-grey-900"
            onClick={handleLogOrSign}
          >
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
}
