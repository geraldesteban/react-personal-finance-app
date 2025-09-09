import { useState } from "react";
import { NavLink } from "react-router-dom";
import PasswordHideIcon from "../../assets/icon-hide-password.svg?react";
import PasswordShowIcon from "../../assets/icon-show-password.svg?react";
import Spinner from "../../ui/Spinner";
import ErrorMessage from "../../ui/Spinner";
import { useSignup } from "./useSignup";

export default function AuthenticationSignup() {
  const [showPassword, setShowPassword] = useState(false);
  const { signup, isSignup, errorSignup } = useSignup();

  function handleHidePassword() {
    setShowPassword(!showPassword);
  }

  function handleCreateAccount(e) {
    e.preventDefault();

    const username = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    signup({ username, email, password });
  }

  if (errorSignup) return <ErrorMessage errorMessage={errorSignup} />;

  return (
    <form
      className={`relative bg-white p-10 rounded-xl w-[800px] xxl:p-5 xxxl:w-[600px] xl:w-[400px] lg:w-[550px] lg:mx-auto sm:w-[90%]`}
      onSubmit={handleCreateAccount}
    >
      <h2 className="font-myFontBold text-[32px] text-grey-900 mb-10 xxl:mb-5">
        Signup
      </h2>

      <label className="font-myFontBold text-[12px] text-grey-500">Name</label>
      <input
        name="name"
        type="name"
        className="px-5 py-3 border border-beige-500 outline-none rounded-xl w-full mt-2 mb-4 xxl:px-3 xxl:py-2"
      />

      <label className="font-myFontBold text-[12px] text-grey-500">Email</label>
      <input
        name="email"
        type="email"
        className="px-5 py-3 border border-beige-500 outline-none rounded-xl w-full mt-2 mb-4 xxl:px-3 xxl:py-2"
      />
      <label className="font-myFontBold text-[12px] text-grey-500">
        Create Password
      </label>
      <input
        name="password"
        type={`${showPassword ? "text" : "password"}`}
        className="px-5 py-3 border border-beige-500 outline-none rounded-xl w-full mt-2 pr-10 xxl:px-3 xxl:py-2"
      />
      <span
        className="absolute right-0 mt-6 mr-[50px] cursor-pointer xxl:mt-5 xxl:mr-[35px]"
        onClick={handleHidePassword}
      >
        {showPassword ? (
          <PasswordHideIcon className="h-5 w-5" />
        ) : (
          <PasswordShowIcon className="h-5 w-5" />
        )}
      </span>
      <button
        type="submit"
        disabled={isSignup}
        className="font-myFontBold text-[14px] text-white bg-grey-900 py-5 rounded-xl w-full my-10 xxl:py-4 xxl:my-5"
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
