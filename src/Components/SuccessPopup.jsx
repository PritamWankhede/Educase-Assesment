import React from "react";
const SuccessPopup = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white w-80 rounded-lg p-6 text-center">
        <h2 className="text-lg font-semibold text-green-600 mb-2">
          Success 🎉
        </h2>

        <p className="text-gray-700 mb-4">{message}</p>

        <button
          onClick={onClose}
          className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default SuccessPopup;
