import { NavLink, useLocation } from "react-router-dom";

export default function SidebarNavigations({
  to,
  label,
  icon: Icon,
  isActive,
  width,
}) {
  const location = useLocation();
  const currentPage = location.pathname.split("/").filter(Boolean).pop();

  const active = currentPage === label.toLowerCase().replaceAll(" ", "");

  return (
    <li
      className={`text-grey-300 flex items-center rounded-tr-xl rounded-br-xl relative mr-5 ${
        active ? "bg-beige-100" : ""
      } ${isActive ? "mr-5" : "mr-0"}`}
    >
      <div
        className={`absolute left-0 top-0 h-full w-1 ${
          active ? "bg-green" : ""
        }`}
      ></div>
      <NavLink className="text-[16px] font-bold flex pl-10 py-5" to={to}>
        <Icon className={`w-6 h-6 mr-9 ${active ? "text-green" : ""}`} />
        <span
          className={`${isActive ? `block ${width}` : `hidden ${width}`} ${
            active ? "text-grey-900" : ""
          } text-[16px]`}
        >
          {label}
        </span>
      </NavLink>
    </li>
  );
}
