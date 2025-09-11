import { NavLink } from "react-router-dom";
import CaretRight from "../assets/icon-caret-right.svg?react";

export default function OverviewViewDetails({ heading, span, seeDetails }) {
  return (
    <div className="flex justify-between mb-5">
      <h2
        className="font-myFontBold
            text-grey-900 text-[20px]"
      >
        {heading}
      </h2>
      <NavLink
        className="text-[14px] flex items-center group transition-all delay-1000"
        to={`/${seeDetails}`}
      >
        <span className="font-myFontRegular text-grey-500 text-[14px] mr-5 group-hover:text-grey-900 transition-colors duration-500 lg:group-hover:text-grey-500">
          {span}
        </span>
        <CaretRight className="text-grey-500 group-hover:text-grey-900 transition-colors duration-500 lg:group-hover:text-grey-500" />
      </NavLink>
    </div>
  );
}
