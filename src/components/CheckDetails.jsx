import { useNavigate } from "react-router-dom";
import CaretRight from "../assets/icon-caret-right.svg?react";

export default function OverviewViewDetails({ heading, span, seeDetails }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between mb-5">
      <h2
        className="
            text-grey-900 text-[20px] font-bold"
      >
        {heading}
      </h2>
      <button
        className="text-[14px] flex items-center group transition-all delay-1000"
        onClick={() => {
          navigate(`/${seeDetails}`);
        }}
      >
        <span className="text-grey-500 font-semibold mr-5 group-hover:text-grey-900 transition-colors duration-500">
          {span}
        </span>
        <CaretRight className="text-grey-500 group-hover:text-grey-900 transition-colors duration-500" />
      </button>
    </div>
  );
}
