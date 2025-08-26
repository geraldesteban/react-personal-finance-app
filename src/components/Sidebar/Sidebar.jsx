import { NavLink } from "react-router-dom";
import OverviewIcon from "../../assets/icon-nav-overview.svg?react";
import TransactionsIcon from "../../assets/icon-nav-transactions.svg?react";
import BudgetsIcon from "../../assets/icon-nav-budgets.svg?react";
import PotsIcon from "../../assets/icon-nav-pots.svg?react";
import RecurringBillsIcon from "../../assets/icon-nav-recurring-bills.svg?react";
import MinimizeLeftIcon from "../../assets/icon-minimize-menu.svg?react";
import LogoLargeIcon from "../../assets/logo-large.svg?react";
import LogoSmallIcon from "../../assets/logo-small.svg?react";
import { useState } from "react";
import SidebarNavigations from "./SidebarNavigations";

function Sidebar() {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`bg-grey-900 flex flex-col justify-between py-10 rounded-tr-xl rounded-br-xl
    transition-[width] duration-200
    ${active ? "w-[500px]" : "w-[110px]"} lg:hidden`}
    >
      {/* Navigation Sidebar */}
      <nav className="text-grey-300">
        {/* Logo */}
        <NavLink>
          {active ? (
            <LogoLargeIcon className="mb-16 ml-10" />
          ) : (
            <LogoSmallIcon className="mb-16 ml-10" />
          )}
        </NavLink>
        <ul className="flex flex-col text-[16px]">
          <SidebarNavigations
            to={"/overview"}
            label="Overview"
            icon={OverviewIcon}
            isActive={active}
          />
          <SidebarNavigations
            to={"/transactions"}
            label="Transactions"
            icon={TransactionsIcon}
            isActive={active}
          />
          <SidebarNavigations
            to={"/budgets"}
            label="Budgets"
            icon={BudgetsIcon}
            isActive={active}
          />
          <SidebarNavigations
            to={"/pots"}
            label="Pots"
            icon={PotsIcon}
            isActive={active}
          />
          <SidebarNavigations
            to={"/recurringbills"}
            label="Recurring Bills"
            icon={RecurringBillsIcon}
            isActive={active}
            width="w-28"
          />
        </ul>
      </nav>
      <button
        className={`font-bold flex items-center py-5`}
        onClick={() => setActive(!active)}
      >
        <MinimizeLeftIcon
          className={`w-6 h-6 mx-10 ${active ? "rotate-[-180deg]" : ""}`}
        />
        <span
          className={`text-grey-300 ${active ? "block w-32" : "hidden w-32"}`}
        >
          Minimize Menu
        </span>
      </button>
    </div>
  );
}

export default Sidebar;
