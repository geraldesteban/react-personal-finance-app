import CloseModal from "../../assets/icon-close-modal.svg?react";
import { useWithdrawMoney } from "./useWithdrawMoney";
import Spinner from "../../ui/Spinner";
import ErrorMessage from "../../ui/Spinner";
import { useState } from "react";
import { usePot } from "./usePot";
import { formatCurrency } from "../../utils/formatCurrency";
import { Label } from "recharts";
import { Input } from "postcss";
import Paragraph from "../../ui/Paragraph";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

export default function PotsWithdraw({ active, onClose, potId, potName }) {
  const { withdrawPotMoney, isWithdrawPotMoney } = useWithdrawMoney(onClose);
  const { potData } = usePot(potId);
  const targetMoney = potData?.targetMoney;
  const potMoney = potData?.potMoney;

  const [amountWithdrawPotMoney, setAmountWithdrawPotMoney] = useState(0);

  function handleWithdrawPotMoney(e) {
    e.preventDefault();

    withdrawPotMoney({ pot_id: potId, amount: amountWithdrawPotMoney });
    setAmountWithdrawPotMoney(0);
  }

  if (!active) return null;

  if (isWithdrawPotMoney)
    return (
      <div className="fixed inset-0 z-10 flex items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <Modal>
      <div className="flex justify-between items-center mb-5">
        <h2 className="font-myFontBold text-grey-900 text-[32px]">
          Withdraw from `
          {potName.replace(/\b\w/g, (char) => char.toUpperCase())}`?
        </h2>
        <Button onClick={onClose}>
          <CloseModal />
        </Button>
      </div>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
        hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet.
      </Paragraph>
      <div className="flex justify-between items-center my-3">
        <p className="font-myFontRegular text-grey-500 text-[14px]">
          Pot Money
        </p>
        <p className="font-myFontBold text-grey-900 text-[32px] font-bold">
          {formatCurrency(
            amountWithdrawPotMoney < 0
              ? 0
              : amountWithdrawPotMoney >= potMoney
              ? 0
              : potMoney - amountWithdrawPotMoney
          )}
        </p>
      </div>
      <div className="w-full h-1 rounded-xl bg-black"></div>
      <div className="flex justify-between items-center my-1">
        <p className="font-myFontRegular text-red text-[12px]">5.95%</p>
        <p className="font-myFontRegular text-grey-500 text-[12px]">
          Target of{" "}
          {formatCurrency(
            amountWithdrawPotMoney < 0
              ? targetMoney
              : amountWithdrawPotMoney <= targetMoney
              ? targetMoney + amountWithdrawPotMoney
              : targetMoney
          )}
        </p>
      </div>
      <form onSubmit={handleWithdrawPotMoney}>
        <Label children={"Amount to Withdraw"} />
        <Input
          type={"number"}
          value={amountWithdrawPotMoney}
          onChange={(e) => setAmountWithdrawPotMoney(Number(e.target.value))}
          placeholder={"$ e.g. 2000"}
        />
        <Button
          type={"submit"}
          className={
            "font-myFontBold text-[14px] text-white w-full py-5 bg-grey-900 rounded-xl"
          }
        >
          Confirm Withdrawal
        </Button>
      </form>
    </Modal>
  );
}
