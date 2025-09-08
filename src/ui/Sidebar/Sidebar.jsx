import { useState } from "react";
import { NavLink } from "react-router-dom";
import OverviewIcon from "../../assets/icon-nav-overview.svg?react";
import TransactionsIcon from "../../assets/icon-nav-transactions.svg?react";
import BudgetsIcon from "../../assets/icon-nav-budgets.svg?react";
import PotsIcon from "../../assets/icon-nav-pots.svg?react";
import RecurringBillsIcon from "../../assets/icon-nav-recurring-bills.svg?react";
import SidebarNavigations from "./SidebarNavigations";
import MinimizeLeftIcon from "../../assets/icon-minimize-menu.svg?react";
import LogoLargeIcon from "../../assets/logo-large.svg?react";
import LogoSmallIcon from "../../assets/logo-small.svg?react";

function Sidebar() {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`bg-grey-900 flex flex-col h-full justify-between py-10 rounded-tr-xl rounded-br-xl
    transition-[width] duration-200
    ${
      active ? "w-[300px]" : "w-[110px]"
    } lg:w-full lg:py-0 lg:rounded-br-none lg:rounded-tl-xl lg:pt-2 lg:px-5`}
    >
      {/* Navigation Sidebar */}
      <nav className="text-grey-300">
        {/* Logo */}
        <NavLink to={"/overview"}>
          {active ? (
            <LogoLargeIcon className="mb-16 ml-10 lg:hidden lg:mb-0 lg:ml-0" />
          ) : (
            <LogoSmallIcon className="mb-16 ml-10 lg:hidden lg:mb-0 lg:ml-0" />
          )}
        </NavLink>
        <ul className="flex flex-col text-[16px] lg:flex-row lg:justify-between">
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
          />
        </ul>
      </nav>
      <button
        className={`group font-bold flex items-center py-5 lg:hidden`}
        onClick={() => setActive(!active)}
      >
        <MinimizeLeftIcon
          className={`text-grey-300 w-6 h-6 mx-10 ${
            active ? "rotate-[-180deg]" : ""
          } group-hover:text-grey-100`}
        />
        <span
          className={`whitespace-nowrap text-grey-300 ${
            active ? "block w-32" : "hidden w-32"
          } group-hover:text-grey-100`}
        >
          Minimize Menu
        </span>
      </button>
    </div>
  );
}

export default Sidebar;
