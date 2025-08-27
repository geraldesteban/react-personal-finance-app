import { useState } from "react";
import Heading from "../Heading";
import PotsAddNewPot from "../../components/Pots/PotsAddNewPot";
import PotsList from "./PotsList";

export default function PotsLayout() {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center relative">
        <Heading>Pots</Heading>
        <button
          className="font-myFontBold text-[14px] text-white p-4 bg-grey-900 rounded-xl hover:bg-grey-500"
          onClick={() => setActive(true)}
        >
          + Add New Pot
        </button>
      </div>
      <PotsList />
      <PotsAddNewPot active={active} onClose={() => setActive(false)} />
    </>
  );
}
