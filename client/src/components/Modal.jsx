import React from 'react';

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative bg-white p-8 rounded shadow-lg">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-red-500 mb-2">
            Close
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
