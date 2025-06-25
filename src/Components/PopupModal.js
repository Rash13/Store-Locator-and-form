const PopupModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-2xl shadow-lg w-96 p-6 relative">
        <div className=" p-4 border rounded-2xl bg-green-100 text-green-800">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl"
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
