import { NavLink, useLocation } from "react-router-dom";

export default function SidebarNavigations({
  to,
  label,
  icon: Icon,
  isActive,
}) {
  const location = useLocation();
  const currentPage = location.pathname.split("/").filter(Boolean).pop();

  const active = currentPage === label.toLowerCase().replaceAll(" ", "");

  return (
    <li
      className={`group text-grey-300 flex items-center rounded-tr-xl rounded-br-xl relative mr-5 ${
        active ? "bg-beige-100" : ""
      } ${
        isActive ? "mr-5" : "mr-0"
      } lg:rounded-br-none lg:rounded-tl-xl lg:mr-0 lg:px-5`}
    >
      <div
        className={`absolute left-0 h-full w-1 ${
          active ? "bg-green" : ""
        } lg:h-1 lg:w-full lg:bottom-0`}
      ></div>
      <NavLink
        className="font-myFontBold text-[16px] flex pl-10 py-5 lg:flex-col lg:pl-0 lg:items-center lg:py-2"
        to={to}
      >
        <Icon
          className={`w-6 h-6 mr-9 ${active ? "text-green" : ""} ${
            active ? "" : "group-hover:text-grey-100"
          } lg:mb-2 lg:mr-0 lg:w-5 lg:h-5`}
        />
        <span
          className={`whitespace-nowrap ${isActive ? `block` : `hidden`} ${
            active ? "text-grey-900" : ""
          } text-[16px] ${active ? "" : "group-hover:text-grey-100"} ${
            isActive ? `block` : `hidden`
          } lg:text-[12px] lg:block sm:hidden`}
        >
          {label}
        </span>
      </NavLink>
    </li>
  );
}
