/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
const Modal = ({ isOpen, onClose, children }) => {

  const { t } = useTranslation();
  const translationKeys = t("modal", { returnObjects: true });

  if (!isOpen) return null;

  return (
    // Modal backdrop
    <div
      className="fixed inset-0 bg-black bg-opacity-90 overflow-y-auto h-full w-full"
      id="my-modal"
    >
      {/* Modal content */}
      <div className="relative top-20 mx-auto p-5 border lg:w-96 w-3/4 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          {/* Modal header */}
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl text-center font-bold">{translationKeys[0]}</p>
            <button
              className="modal-close cursor-pointer z-50"
              onClick={onClose}
              aria-label="Close modal"
            >
              <svg
                className="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M12.45 5.55a.9.9 0 00-1.27 0L9 7.73l-2.18-2.18a.9.9 0 10-1.27 1.27L7.73 9l-2.18 2.18a.9.9 0 101.27 1.27L9 10.27l2.18 2.18a.9.9 0 101.27-1.27L10.27 9l2.18-2.18a.9.9 0 000-1.27z" />
              </svg>
            </button>
          </div>
          {/* Modal body */}
          <div className="px-7 py-3">{children}</div>
          {/* Modal footer */}
          <div className="px-7 py-3 flex justify-center">
            <button
              onClick={onClose}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {translationKeys[1]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
