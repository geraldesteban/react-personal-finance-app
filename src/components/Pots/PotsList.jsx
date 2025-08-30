import { useState } from "react";
import Ellipsis from "../../assets/icon-ellipsis.svg?react";
import PotsEditPot from "./PotsEditPot";
import PotsDeletePot from "./PotsDeletePot";
import PotsWithdraw from "./PotsWithdraw";
import PotsAddMoney from "./PotsAddMoney";
import { formatCurrency } from "../../utils/formatCurrency";
import { usePots } from "./usePots";

export default function PotsList() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [editModalActive, setEditModalActive] = useState(false);
  const [deleteModalActive, setDeleteModalActive] = useState(false);
  const [addMoneyModalActive, setAddMoneyActive] = useState(false);
  const [withdrawModalActive, setWithdrawActive] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [activePotName, setActivePotName] = useState("");
  const { dataPots } = usePots();

  function handleDelete(id, potName) {
    setActiveId(id);
    setActivePotName(potName);
    setDeleteModalActive(true);
  }

  return (
    <div className="flex flex-wrap gap-8 mt-10 lg:flex-col">
      {dataPots?.length < 0
        ? null
        : dataPots?.map((pot, id) => (
            <div
              className="min-w-[calc(50%-1rem)] bg-white justify-between items-center p-5 rounded-xl"
              key={id}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-black rounded-full mr-5"></div>
                  <h2 className="font-myFontBold text-grey-900 text-[20px]">
                    {pot.potName}
                  </h2>
                </div>
                <div className="relative z-10">
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === pot.potName ? null : pot.potName
                      )
                    }
                  >
                    <Ellipsis className="text-grey-500 h-5 w-5" />
                  </button>
                  <div
                    className={`absolute right-0 bg-white shadow-2xl rounded-xl p-5 w-[145px] ${
                      activeDropdown === pot.potName ? "" : "hidden"
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
                        setActiveDropdown(null);
                        handleDelete(pot.id, pot.potName);
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
                  {formatCurrency(pot.targetMoney)}
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
                  Target of
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
          ))}
      <PotsEditPot
        active={editModalActive}
        onClose={() => setEditModalActive(false)}
      />
      <PotsDeletePot
        active={deleteModalActive}
        onClose={() => setDeleteModalActive(false)}
        potId={activeId}
        potName={activePotName}
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
