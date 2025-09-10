import CloseModal from "../../assets/icon-close-modal.svg?react";
import { useWithdrawMoney } from "./useWithdrawMoney";
import Spinner from "../../ui/Spinner";
import { useState } from "react";
import { usePot } from "./usePot";
import { formatCurrency } from "../../utils/formatCurrency";
import Label from "../../ui/Label";
import Input from "../../ui/Input";
import Paragraph from "../../ui/Paragraph";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

export default function PotsWithdraw({
  active,
  onClose,
  potId,
  potName,
  maxAmount,
}) {
  const { withdrawPotMoney, isWithdrawPotMoney } = useWithdrawMoney(onClose);
  const { potData } = usePot(potId);
  const targetMoney = potData?.targetMoney;
  const potMoney = potData?.potMoney;
  const [amountWithdrawPotMoney, setAmountWithdrawPotMoney] = useState("");
  const newWithdrawMoney = (
    ((potMoney - amountWithdrawPotMoney) / targetMoney) *
    100
  ).toFixed(1);

  if (!active) return null;

  if (isWithdrawPotMoney)
    return (
      <div className="fixed inset-0 z-10 flex items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <Modal onClose={onClose}>
      <div className="flex justify-between items-center mb-5">
        <h2 className="font-myFontBold text-grey-900 text-[32px]">
          Withdraw from `
          {potName.replace(/\b\w/g, (char) => char.toUpperCase())}`?
        </h2>
        <Button
          onClick={() => {
            onClose();
            setAmountWithdrawPotMoney("");
          }}
        >
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
      <div className="w-full h-3 rounded-xl bg-beige-100 flex items-center">
        <div
          className="h-3 rounded-tl-xl rounded-bl-xl mr-1 bg-grey-900"
          style={{
            width: `${(potMoney / targetMoney) * 100}%`,
          }}
        ></div>
        <div
          className="h-3 rounded-tr-xl rounded-br-xl mr-1 bg-red"
          style={{
            width: `${(amountWithdrawPotMoney / targetMoney) * 100}%`,
          }}
        ></div>
      </div>
      <div className="flex justify-between items-center my-1">
        <p className="font-myFontRegular text-red text-[12px]">
          {newWithdrawMoney}%
        </p>
        <p className="font-myFontRegular text-grey-500 text-[12px]">
          Target of {formatCurrency(targetMoney)}
        </p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          withdrawPotMoney({ pot_id: potId, amount: amountWithdrawPotMoney });
          setAmountWithdrawPotMoney("");
        }}
      >
        <Label>Amount to Withdraw</Label>
        <Input
          type={"number"}
          value={amountWithdrawPotMoney}
          onChange={(e) => {
            const value = Number(e.target.value);
            if (value <= maxAmount) {
              setAmountWithdrawPotMoney(value);
            } else {
              setAmountWithdrawPotMoney(maxAmount);
            }
          }}
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
