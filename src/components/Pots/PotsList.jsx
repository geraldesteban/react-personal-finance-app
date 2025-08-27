import { useState } from "react";
import Ellipsis from "../../assets/icon-ellipsis.svg?react";
import PotsEditPot from "./PotsEditPot";
import PotsDeletePot from "./PotsDeletePot";
import PotsWithdraw from "./PotsWithdraw";
import PotsAddMoney from "./PotsAddMoney";

export default function PotsList() {
  const [dropdownActive, setDropdownActive] = useState(false);
  const [editModalActive, setEditModalActive] = useState(false);
  const [deleteModalActive, setDeleteModalActive] = useState(false);
  const [withdrawModalActive, setWithdrawActive] = useState(false);
  const [addMoneyModalActive, setAddMoneyActive] = useState(false);

  return (
    <div className="flex gap-10 mt-10 lg:flex-col">
      <div className="flex-1 bg-white justify-between items-center mb-5 p-5 rounded-xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-black rounded-full mr-5"></div>
            <h2 className="font-myFontBold text-grey-900 text-[20px]">
              Savings
            </h2>
          </div>
          <div className="relative z-10">
            <button onClick={() => setDropdownActive(!dropdownActive)}>
              <Ellipsis className="text-grey-500 h-5 w-5" />
            </button>
            <div
              className={`absolute right-0 bg-white shadow-2xl rounded-xl p-5 w-[145px] ${
                dropdownActive ? "" : "hidden"
              }`}
            >
              <button
                onClick={() => {
                  setEditModalActive(true);
                  setDropdownActive(false);
                }}
              >
                Edit Pot
              </button>
              <hr className="my-2" />
              <button
                className="text-red"
                onClick={() => {
                  setDeleteModalActive(true);
                  setDropdownActive(false);
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
          <p className="font-myFontBold text-grey-900 text-[32px]">$159.00</p>
        </div>
        <div className="relative">
          <div className="absolute w-full h-1 rounded-xl bg-black"></div>
        </div>
        <div className="flex justify-between items-center mb-5">
          <p className="font-myFontBold text-grey-500 text-[12px] mt-3">
            7.95%
          </p>
          <p className="font-myFontRegular text-grey-500 text-[12px] mt-3">
            Target of $2,000
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
      {/* Test Two */}
      <div className="flex-1 bg-white justify-between items-center mb-5 p-5 rounded-xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-black rounded-full mr-5"></div>
            <h2 className="font-myFontBold text-grey-900 text-[20px]">
              Savings
            </h2>
          </div>
          <div className="relative z-10">
            <button onClick={() => setDropdownActive(!dropdownActive)}>
              <Ellipsis className="text-grey-500 h-5 w-5" />
            </button>
            <div
              className={`absolute right-0 bg-white shadow-2xl rounded-xl p-5 w-[145px] ${
                dropdownActive ? "" : "hidden"
              }`}
            >
              <button
                onClick={() => {
                  setEditModalActive(true);
                  setDropdownActive(false);
                }}
              >
                Edit Pot
              </button>
              <hr className="my-2" />
              <button
                className="text-red"
                onClick={() => {
                  setDeleteModalActive(true);
                  setDropdownActive(false);
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
          <p className="font-myFontBold text-grey-900 text-[32px]">$159.00</p>
        </div>
        <div className="relative">
          <div className="absolute w-full h-1 rounded-xl bg-black"></div>
        </div>
        <div className="flex justify-between items-center mb-5">
          <p className="font-myFontBold text-grey-500 text-[12px] mt-3">
            7.95%
          </p>
          <p className="font-myFontRegular text-grey-500 text-[12px] mt-3">
            Target of $2,000
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
    </div>
  );
}
