import CloseModal from "../../assets/icon-close-modal.svg?react";
import { useDeletePot } from "./useDeletePot";
import Spinner from "../../ui/Spinner";
import Paragraph from "../../ui/Paragraph";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

export default function PotsDeletePot({ active, onClose, potName, potId }) {
  const { deletePot, isDeletingPot } = useDeletePot(onClose);

  if (!active) return null;

  if (isDeletingPot)
    return (
      <div className="fixed inset-0 z-10 flex items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <Modal onClose={onClose}>
      <div className="flex justify-between items-center mb-5">
        <h2 className="font-myFontBold text-grey-900 text-[32px] sm:text-[20px]">
          "Delete {potName.replace(/\b\w/g, (char) => char.toUpperCase())}"?
        </h2>
        <Button onClick={onClose}>
          <CloseModal />
        </Button>
      </div>
      <Paragraph>
        Are you sure you want to delete this pot? This action cannot be
        reversed, and all the data inside it will be remove forever.
      </Paragraph>
      <Button
        onClick={() => deletePot(potId)}
        className={
          "font-myFontBold text-[14px] text-white w-full py-5  bg-red rounded-xl  font-bold hover:opacity-80"
        }
      >
        Yes, Confirm Deletion
      </Button>
      <Button
        onClick={onClose}
        className={"font-myFontRegular text-[14px] w-full py-5 text-grey-500"}
      >
        No, Go Back
      </Button>
    </Modal>
  );
}
