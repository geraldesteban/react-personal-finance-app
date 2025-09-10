import { useState } from "react";
import Ellipsis from "../../assets/icon-ellipsis.svg?react";
import { CheckIcon } from "@heroicons/react/24/outline";
import PotsEditPot from "./PotsEditPot";
import PotsDeletePot from "./PotsDeletePot";
import PotsAddMoney from "./PotsAddMoney";
import PotsWithdraw from "./PotsWithdraw";
import Spinner from "../../ui/Spinner";
import { formatCurrency } from "../../utils/formatCurrency";
import { usePots } from "./usePots";
import { usePot } from "./usePot";
import { useDonePot } from "./useDonePot";

export default function PotsList() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [editModalActive, setEditModalActive] = useState(false);
  const [deleteModalActive, setDeleteModalActive] = useState(false);
  const [addMoneyModalActive, setAddMoneyActive] = useState(false);
  const [withdrawModalActive, setWithdrawActive] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [activePotName, setActivePotName] = useState("");
  const { potsData, isPots } = usePots();
  const { donePot, isDonePot } = useDonePot();
  const { potData } = usePot(activeId);

  if (isPots)
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <div className="flex flex-wrap gap-8 mt-10 lg:flex-col">
      {potsData?.length < 0
        ? null
        : potsData?.map((pot) => {
            const remaining = pot.targetMoney - pot.potMoney;
            const isDone = remaining <= 0;

            return (
              <div
                className="min-w-[calc(50%-1rem)] bg-white justify-between items-center p-5 rounded-xl"
                key={pot.id}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div
                      className={`w-4 h-4 ${pot.potTheme} rounded-full mr-5`}
                      style={{ backgroundColor: pot.potTheme }}
                    ></div>
                    <h2 className="font-myFontBold text-grey-900 text-[20px]">
                      {pot.potName.replace(/\b\w/g, (char) =>
                        char.toUpperCase()
                      )}
                    </h2>
                  </div>
                  <div className="relative z-10">
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === pot.id ? null : pot.id
                        )
                      }
                      disabled={isDone}
                    >
                      <Ellipsis className="text-grey-500 h-5 w-5" />
                    </button>

                    <div
                      className={`absolute right-0 bg-white shadow-2xl rounded-xl p-5 w-[145px] ${
                        activeDropdown === pot.id ? "" : "hidden"
                      }`}
                    >
                      <button
                        onClick={() => {
                          setActiveId(pot.id);
                          setEditModalActive(true);
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
                          setActiveId(pot.id);
                          setActivePotName(pot.potName);
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
                    {formatCurrency(pot.potMoney)}
                  </p>
                </div>
                <div className="w-full h-3 rounded-md bg-beige-100 flex items-center">
                  <div
                    className={`h-2 rounded-md ${pot.potTheme}`}
                    style={{
                      width: `${(pot.potMoney / pot.targetMoney) * 100}%`,
                      backgroundColor: pot.potTheme,
                    }}
                  ></div>
                </div>
                <div className="flex justify-between items-center mb-5">
                  <p className="font-myFontBold text-grey-500 text-[12px] mt-3">
                    {((pot.potMoney / pot.targetMoney) * 100).toFixed(1)}%
                  </p>
                  <p className="font-myFontRegular text-grey-500 text-[12px] mt-3">
                    Target of {formatCurrency(pot.targetMoney)}
                  </p>
                </div>
                <div className="flex justify-between items-center gap-5">
                  {isDone ? (
                    <div className="flex items-center mx-auto">
                      {isDonePot ? (
                        <Spinner />
                      ) : (
                        <>
                          <div
                            className={`w-4 h-4 ${pot.potTheme} rounded-full mr-5`}
                            style={{ backgroundColor: pot.potTheme }}
                          ></div>
                          <p className="font-myFontBold text-[32px]">
                            {pot.potName.replace(/\b\w/g, (char) =>
                              char.toUpperCase()
                            )}{" "}
                            is done
                          </p>
                          <button
                            onClick={() => donePot(pot.id)}
                            disabled={isDonePot}
                          >
                            <CheckIcon className="ml-5 w-8 h-8 rounded-full text-grey-900 border-[2px] border-grey-900 hover:text-green hover:border-green" />
                          </button>
                        </>
                      )}
                    </div>
                  ) : (
                    <>
                      <button
                        className="font-myFontBold text-[14px] w-full py-5 rounded-xl bg-beige-100 border border-beige-100  hover:bg-white hover:border hover:border-grey-900"
                        onClick={() => {
                          setActiveId(pot.id);
                          setActivePotName(pot.potName);
                          setAddMoneyActive(true);
                        }}
                        disabled={isDone}
                      >
                        + Add Money
                      </button>
                      <button
                        className="font-myFontBold text-[14px] w-full py-5 rounded-xl bg-beige-100 border  border-beige-100  hover:bg-white hover:border hover:border-grey-900"
                        onClick={() => {
                          setActiveId(pot.id);
                          setActivePotName(pot.potName);
                          setWithdrawActive(true);
                        }}
                      >
                        With Draw
                      </button>
                    </>
                  )}
                </div>
              </div>
            );
          })}
      <PotsEditPot
        active={editModalActive}
        onClose={() => setEditModalActive(false)}
        potId={activeId}
      />
      <PotsDeletePot
        active={deleteModalActive}
        onClose={() => setDeleteModalActive(false)}
        potId={activeId}
        potName={activePotName}
      />
      <PotsAddMoney
        active={addMoneyModalActive}
        onClose={() => setAddMoneyActive(false)}
        potId={activeId}
        potName={activePotName}
        maxAmount={potData ? potData?.targetMoney - potData?.potMoney : 0}
      />
      <PotsWithdraw
        active={withdrawModalActive}
        onClose={() => setWithdrawActive(false)}
        potId={activeId}
        potName={activePotName}
        maxAmount={potData ? potData?.potMoney : 0}
      />
    </div>
  );
}
