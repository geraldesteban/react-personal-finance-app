import CloseModal from "../../assets/icon-close-modal.svg?react";

export default function PotsDeletePot({ active, onClose }) {
  if (!active) return null;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative bg-white rounded-xl p-10 z-20 md:p-5 md:mx-10">
        <div className="flex justify-between items-center mb-5">
          <h2 className="font-myFontBold text-grey-900 text-[32px] sm:text-[20px]">
            Delete 'Savings'
          </h2>
          <button onClick={onClose}>
            <CloseModal />
          </button>
        </div>

        <p className="font-myFontRegular text-grey-500 text-[14px] mb-5">
          Are you sure you want to delete this pot? This action cannot be
          reversed, and all the data inside it will be remove forever.
        </p>

        <button className="font-myFontBold w-full py-5 text-[14px] bg-red rounded-xl text-white hover:opacity-80">
          Yes, Confirm Deletion
        </button>
        <button className="font-myFontRegular w-full py-5 text-[14px] text-grey-500">
          No, Go Back
        </button>
      </div>
    </div>
  );
}
