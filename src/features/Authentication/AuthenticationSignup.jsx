import { useState } from "react";
import { NavLink } from "react-router-dom";
import PasswordHideIcon from "../../assets/icon-hide-password.svg?react";
import PasswordShowIcon from "../../assets/icon-show-password.svg?react";
import Spinner from "../../ui/Spinner";
import ErrorMessage from "../../ui/Spinner";
import Label from "../../ui/Label";
import Button from "../../ui/Button";
import { useSignup } from "./useSignup";

export default function AuthenticationSignup() {
  const [showPassword, setShowPassword] = useState(false);
  const { signup, isSignup } = useSignup();

  return (
    <div className="sm:mx-10">
      <form
        className={`relative bg-white p-10 rounded-xl w-[800px] xxl:p-5 xxxl:w-[600px] xl:w-[400px] lg:w-full`}
        onSubmit={(e) => {
          e.preventDefault();

          const username = e.target.name.value;
          const email = e.target.email.value;
          const password = e.target.password.value;

          signup({ username, email, password });
        }}
      >
        <h2 className="font-myFontBold text-[32px] text-grey-900 mb-10 xxl:mb-5">
          Signup
        </h2>
        <Label>Name</Label>
        <input
          name="name"
          type="name"
          className="px-5 py-3 border border-beige-500 outline-none rounded-xl w-full mt-2 mb-4 xxl:px-3 xxl:py-2"
        />
        <Label>Email</Label>
        <input
          name="email"
          type="email"
          className="px-5 py-3 border border-beige-500 outline-none rounded-xl w-full mt-2 mb-4 xxl:px-3 xxl:py-2"
        />
        <Label>Create Password</Label>
        <input
          name="password"
          type={`${showPassword ? "text" : "password"}`}
          className="px-5 py-3 border border-beige-500 outline-none rounded-xl w-full mt-2 pr-10 xxl:px-3 xxl:py-2"
        />
        <span
          className="absolute right-0 mt-6 mr-[50px] cursor-pointer xxl:mt-5 xxl:mr-[35px]"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <PasswordHideIcon className="h-5 w-5" />
          ) : (
            <PasswordShowIcon className="h-5 w-5" />
          )}
        </span>
        <Button
          type={"submit"}
          className={
            "font-myFontBold text-[14px] text-white bg-grey-900 py-5 rounded-xl w-full my-10 xxl:py-4 xxl:my-5"
          }
        >
          {isSignup ? <Spinner /> : "Create Account"}
        </Button>
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
    </div>
  );
}
