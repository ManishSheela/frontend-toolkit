import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import CodeDisplay from "@/src/components/molecules/CodeDisplay";
import LearningBox from "@/src/components/organisms/LearningBox";
import { extractSnippet } from "@/src/utils/extractCodeSnippet";
import pageSource from "./index.jsx?raw";

// #region implementation
const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);
  const clickedElementRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    clickedElementRef.current = document.activeElement;
    modalRef.current?.focus();
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      clickedElementRef.current?.focus();
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="w-[min(400px,calc(100%-2rem))] rounded-lg bg-slate-900 p-6 text-slate-100 shadow-xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="accessible-modal-title"
        tabIndex={-1}
      >
        <h2 id="accessible-modal-title" className="mb-4 text-xl font-semibold">
          Accessible Modal
        </h2>
        {children}
        <button
          type="button"
          className="mt-6 rounded bg-slate-200 px-4 py-2 text-slate-900"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>,
    document.body,
  );
};

const AccessibleModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <LearningBox className="p-6 text-slate-200">
        <h2 className="mb-4 text-2xl font-semibold">Accessible Modal</h2>
        <p className="text-slate-300">
          Open the dialog to inspect its keyboard and focus behavior.
        </p>
        <button
          type="button"
          className="mt-4 rounded bg-fuchsia-500 px-4 py-2 font-medium text-white"
          onClick={() => setIsOpen(true)}
        >
          Open modal
        </button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <p className="text-slate-300">
            This modal can be closed with Escape or the close button.
          </p>
        </Modal>
      </LearningBox>
      <CodeDisplay codeString={extractSnippet(pageSource)} />
    </>
  );
};

export default AccessibleModal;
// #endregion implementation
