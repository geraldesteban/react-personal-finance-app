import { useState } from "react";
import Ellipsis from "../../assets/icon-ellipsis.svg?react";
import PotsEditPot from "./PotsEditPot";
import PotsDeletePot from "./PotsDeletePot";
import PotsWithdraw from "./PotsWithdraw";
import PotsAddMoney from "./PotsAddMoney";
import { DATAURL } from "../../utils/constants";
import { formatCurrency } from "../../utils/formatCurrency";
import useFetchData from "../../hooks/useFetchData";

export default function PotsList() {
  const [editModalActive, setEditModalActive] = useState(false);
  const [deleteModalActive, setDeleteModalActive] = useState(false);
  const [withdrawModalActive, setWithdrawActive] = useState(false);
  const [addMoneyModalActive, setAddMoneyActive] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const { data } = useFetchData(DATAURL);

  return (
    <div className="flex flex-wrap gap-8 mt-10 lg:flex-col">
      {data.pots.map(({ name: potName, target, total, theme }) => {
        return (
          <div
            className="min-w-[calc(50%-1rem)] bg-white justify-between items-center p-5 rounded-xl"
            key={potName}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div
                  className="w-4 h-4 bg-black rounded-full mr-5"
                  style={{ backgroundColor: theme }}
                ></div>
                <h2 className="font-myFontBold text-grey-900 text-[20px]">
                  {potName}
                </h2>
              </div>
              <div className="relative z-10">
                <button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === potName ? null : potName
                    )
                  }
                >
                  <Ellipsis className="text-grey-500 h-5 w-5" />
                </button>
                <div
                  className={`absolute right-0 bg-white shadow-2xl rounded-xl p-5 w-[145px] ${
                    activeDropdown === potName ? "" : "hidden"
                  }`}
                >
                  <button
                    onClick={() => {
                      setEditModalActive(true);
                      setActiveDropdown(null);
                    }}
                  >
                    Edit Pot
                  </button>
                  <hr className="my-2" />
                  <button
                    className="text-red"
                    onClick={() => {
                      setDeleteModalActive(true);
                      setActiveDropdown(null);
                    }}
                  >
                    Delete Pot
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between my-5">
              <p className="font-myFontRegular text-grey-500 text[14px]">
                Total Saved
              </p>
              <p className="font-myFontBold text-grey-900 text-[32px]">
                {formatCurrency(total, "USD")}
              </p>
            </div>
            <div className="relative">
              <div className="absolute w-full h-1 rounded-xl bg-black"></div>
            </div>
            <div className="flex justify-between items-center mb-5">
              <p className="font-myFontBold text-grey-500 text-[12px] mt-3">
                7.95%
              </p>
              <p className="font-myFontRegular text-grey-500 text-[12px] mt-3">
                Target of {formatCurrency(target, "USD")}
              </p>
            </div>
            <div className="flex justify-between items-center gap-5">
              <button
                className="font-myFontBold text-[14px] w-full py-5 rounded-xl bg-beige-100 border border-beige-100  hover:bg-white hover:border hover:border-grey-900"
                onClick={() => setAddMoneyActive(true)}
              >
                + Add Money
              </button>
              <button
                className="font-myFontBold text-[14px] w-full py-5 rounded-xl bg-beige-100 border  border-beige-100  hover:bg-white hover:border hover:border-grey-900"
                onClick={() => setWithdrawActive(true)}
              >
                With Draw
              </button>
            </div>
          </div>
        );
      })}
      <PotsEditPot
        active={editModalActive}
        onClose={() => setEditModalActive(false)}
      />
      <PotsDeletePot
        active={deleteModalActive}
        onClose={() => setDeleteModalActive(false)}
      />
      <PotsWithdraw
        active={withdrawModalActive}
        onClose={() => setWithdrawActive(false)}
      />
      <PotsAddMoney
        active={addMoneyModalActive}
        onClose={() => setAddMoneyActive(false)}
      />
    </div>
  );
}
