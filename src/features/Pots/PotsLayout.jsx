import { useState } from "react";
import Heading from "../../ui/Heading";
import PotsAddNewPot from "../../features/Pots/PotsAddNewPot";
import PotsList from "./PotsList";

export default function PotsLayout() {
  const [active, setActive] = useState(false);

  return (
    <div className="m-10 lg:m-5">
      <div className="flex justify-between items-center">
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
    </div>
  );
}
