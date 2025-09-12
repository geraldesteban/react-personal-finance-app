import { Outlet } from "react-router-dom";
import AuthIllustration from "../../assets/illustration-authentication.svg?react";
import LogoLargeIcon from "../../assets/logo-large.svg?react";

export default function AuthenticationLayout() {
  return (
    <div className="flex justify-between items-center bg-[#F2F3F7] min-h-screen lg:flex-col lg:pb-40">
      <div className="hidden lg:block lg:bg-grey-900 lg:w-full lg:py-5 lg:rounded-b-xl lg:mb-32">
        <LogoLargeIcon className="lg:mx-auto" />
      </div>
      <div className="relative ml-5 lg:hidden">
        <LogoLargeIcon className="absolute top-10 left-10" />
        <AuthIllustration className="rounded-xl" />
        <div className="text-white absolute bottom-10 left-10">
          <h2 className="font-myFontBold text-[32px] w-[390px] mb-5">
            Keep track of your money and save for your future
          </h2>
          <p className="font-myFontRegular text-[14px] w-[420px]">
            Personal finance app puts you in control of your spending. Track
            transactions, set budgets, and add to savings pots easily.
          </p>
        </div>
      </div>
      <div className="mx-auto lg:">
        <Outlet />
      </div>
    </div>
  );
}
