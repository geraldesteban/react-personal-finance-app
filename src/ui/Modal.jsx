import { useRef, useEffect } from "react";

export default function Modal({ children, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose?.();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70"></div>
      <div
        ref={modalRef}
        className="relative bg-white rounded-xl p-10 z-20 md:p-5 md:mx-10 sm:mx-5"
      >
        {children}
      </div>
    </div>
  );
}
