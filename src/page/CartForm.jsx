import React, { useContext, useState } from 'react';
import { CartContext } from '../store/CartContext';
import { FiTrash2 } from 'react-icons/fi';

function CartForm() {
  const { cartItems, removeItem, updateQty, subtotal } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedBank, setSelectedBank] = useState(null);

  const qrCodes = {
    'ABA Bank': 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ABA_Bank_FakeQR',
    'ACLEDA Bank': 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ACLEDA_Bank_FakeQR',
  };

  const handleDecrement = (id, qty) => {
    if (qty > 1) updateQty(id, qty - 1);
  };

  const handleIncrement = (id, qty) => {
    updateQty(id, qty + 1);
  };

  const openPaymentModal = () => {
    setShowModal(true);
    setSelectedBank(null);
  };

  const closePaymentModal = () => {
    setShowModal(false);
    setSelectedBank(null);
  };

  const chooseBank = (bankName) => {
    setSelectedBank(bankName);
  };

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-8 text-center bg-blue-50 rounded-lg mt-10 shadow-md">
        <h2 className="text-4xl font-extrabold mb-8 text-blue-900">Your Products</h2>
        <p className="text-gray-700 text-xl">Your Product is empty.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-8 bg-blue-50 rounded-lg shadow-lg mt-10 relative">
      <h2 className="text-4xl font-extrabold mb-8 border-b border-blue-300 pb-6 text-blue-900 text-center">
        Your Products
      </h2>
      <ul>
        {cartItems.map(item => (
          <li
            key={item.id}
            className="flex flex-col items-center sm:flex-row sm:items-center justify-between mb-8 bg-white p-5 rounded-lg shadow-md border border-gray-200"
          >
            {/* Product Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 md:w-28 md:h-28 object-contain rounded-md mb-4 sm:mb-0 sm:mr-6 border border-gray-300"
            />

            {/* Product Info and Controls */}
            <div className="flex-1 text-center sm:text-left">
              <p className="font-bold text-2xl text-blue-900">{item.name}</p>
              <p className="text-gray-700 mt-2 text-lg">${item.price.toFixed(2)} each</p>

              {/* Quantity controls */}
              <div className="flex justify-center sm:justify-start items-center mt-4 space-x-3">
                <button
                  onClick={() => handleDecrement(item.id, item.quantity)}
                  className="px-4 py-2 bg-blue-200 text-blue-800 font-semibold rounded-lg hover:bg-blue-300 transition"
                  aria-label={`Decrease quantity of ${item.name}`}
                >
                  −
                </button>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQty(item.id, Math.max(1, Number(e.target.value)))
                  }
                  className="border border-gray-300 rounded-md text-center w-20 py-2 text-lg"
                />
                <button
                  onClick={() => handleIncrement(item.id, item.quantity)}
                  className="px-4 py-2 bg-blue-200 text-blue-800 font-semibold rounded-lg hover:bg-blue-300 transition"
                  aria-label={`Increase quantity of ${item.name}`}
                >
                  +
                </button>
              </div>
            </div>

            {/* Remove button and total price */}
            <div className="flex flex-col items-center sm:items-end mt-6 sm:mt-0 sm:ml-8">
              <button
                onClick={() => removeItem(item.id)}
                className="flex items-center text-red-600 hover:text-red-800 font-bold mb-4 transition-colors"
                aria-label={`Remove ${item.name} from cart`}
              >
                <FiTrash2 className="mr-2 text-xl" />
                Remove
              </button>
              <p className="font-extrabold text-2xl text-blue-900">
                ${(item.price * item.quantity).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex flex-col items-center sm:flex-row sm:justify-end mt-10 pt-6 border-t border-blue-300 sm:items-center sm:space-x-6">
        <p className="text-3xl font-extrabold text-blue-900 mb-4 sm:mb-0 text-center">
          Subtotal: ${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
        <button
          type="button"
          className="px-8 py-3 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition"
          onClick={openPaymentModal}
        >
          Pay Now
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closePaymentModal}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-sm w-full p-6"
            onClick={e => e.stopPropagation()}
          >
            {!selectedBank ? (
              <>
                <h3 className="text-2xl font-bold mb-6 text-center text-blue-900">Choose Payment Bank</h3>
                <div className="flex flex-col space-y-4">
                  <button
                    onClick={() => chooseBank('ABA Bank')}
                    className="py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition"
                  >
                    ABA Bank
                  </button>
                  <button
                    onClick={() => chooseBank('ACLEDA Bank')}
                    className="py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
                  >
                    ACLEDA Bank
                  </button>
                  <button
                    onClick={closePaymentModal}
                    className="mt-6 py-2 text-center text-gray-600 hover:text-gray-900 transition"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-4 text-center text-blue-900">{selectedBank} QR Code</h3>
                <div className="flex justify-center mb-6">
                  <img
                    src={qrCodes[selectedBank]}
                    alt={`${selectedBank} QR Code`}
                    className="w-48 h-48 object-contain"
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    onClick={() => setSelectedBank(null)}
                    className="px-6 py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition"
                  >
                    Back
                  </button>
                  <button
                    onClick={closePaymentModal}
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                  >
                    Close
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CartForm;
