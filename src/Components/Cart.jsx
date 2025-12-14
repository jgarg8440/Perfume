import React, { useState } from 'react';
import { useCart } from '../Components/CartContext';

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [showUpiPayment, setShowUpiPayment] = useState(false);

  // Your UPI ID and Business Details
  const UPI_ID = "darshanpancholi848@paytm";
  const BUSINESS_NAME = "Diamond Fragrance";
  const WHATSAPP_NUMBER = "917597641016"; // Without + or spaces

  // Generate UPI deep link with EXACT amount
  const generateUpiLink = () => {
    const amount = getTotalPrice();
    const transactionNote = `Order from ${customerInfo.name}`;
    
    // UPI Deep Link Format - Amount is AUTO-FILLED in payment app
    const upiLink = `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(BUSINESS_NAME)}&am=${amount}&cu=INR&tn=${encodeURIComponent(transactionNote)}`;
    
    return upiLink;
  };

  const handleProceedToPayment = () => {
    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone || !customerInfo.address) {
      alert('⚠️ Please fill all customer details');
      return;
    }
    setShowUpiPayment(true);
  };

  const sendOrderToWhatsApp = () => {
    const message = `
🛍️ *NEW ORDER - Diamond Fragrance*

👤 *Customer Details:*
Name: ${customerInfo.name}
Email: ${customerInfo.email}
Phone: ${customerInfo.phone}
Address: ${customerInfo.address}

🛒 *Order Items:*
${cartItems.map(item => `• ${item.name} x ${item.quantity} = ₹${item.price * item.quantity}`).join('\n')}

💰 *Total Amount:* ₹${getTotalPrice()}

📅 *Order Date:* ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

💳 *UPI ID:* ${UPI_ID}

📸 *Next Step:* I will send payment screenshot after completing the payment.
    `.trim();

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };

  const copyUpiId = () => {
    navigator.clipboard.writeText(UPI_ID);
    alert('✅ UPI ID copied to clipboard!');
  };

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Cart Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="bg-[#DCCA87] text-black p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <button
            onClick={() => {
              setIsCartOpen(false);
              setShowCheckoutForm(false);
              setShowUpiPayment(false);
            }}
            className="text-2xl hover:text-gray-700 transition"
          >
            ×
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <svg className="w-24 h-24 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p className="text-lg">Your cart is empty</p>
            </div>
          ) : showUpiPayment ? (
            // UPI Payment Screen
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#DCCA87] mb-2">Pay with UPI</h3>
                <p className="text-4xl font-bold text-green-600">₹{getTotalPrice()}</p>
              </div>

              {/* Customer Info Summary */}
              <div className="bg-blue-50 rounded-lg p-4 space-y-1">
                <h4 className="font-bold text-sm text-gray-700 mb-2">📦 Delivery Details:</h4>
                <p className="text-sm"><strong>Name:</strong> {customerInfo.name}</p>
                <p className="text-sm"><strong>Phone:</strong> {customerInfo.phone}</p>
                <p className="text-sm"><strong>Email:</strong> {customerInfo.email}</p>
                <p className="text-sm"><strong>Address:</strong> {customerInfo.address}</p>
              </div>

              {/* UPI QR Code Area */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 text-center">
                <div className="bg-white p-4 rounded-lg inline-block mb-4">
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(generateUpiLink())}`}
                    alt="UPI QR Code"
                    className="w-48 h-48 mx-auto"
                  />
                </div>
                <p className="text-sm text-gray-600">Scan QR with any UPI app</p>
              </div>

              {/* OR Divider */}
              <div className="flex items-center gap-4">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="text-gray-500 text-sm">OR</span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>

              {/* UPI ID Copy */}
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-2">Pay directly to UPI ID:</p>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={UPI_ID}
                    readOnly
                    className="flex-1 p-3 border rounded-lg bg-white font-mono text-sm"
                  />
                  <button
                    onClick={copyUpiId}
                    className="p-3 bg-[#DCCA87] rounded-lg hover:bg-[#bfa760] transition"
                  >
                    📋
                  </button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-blue-50 rounded-lg p-4 space-y-2">
                <h4 className="font-bold text-sm text-gray-700">🛒 Order Summary:</h4>
                {cartItems.map(item => (
                  <div key={item.name} className="flex justify-between text-sm">
                    <span>{item.name} x {item.quantity}</span>
                    <span>₹{item.price * item.quantity}</span>
                  </div>
                ))}
                <div className="border-t pt-2 flex justify-between font-bold">
                  <span>Total</span>
                  <span className="text-[#DCCA87]">₹{getTotalPrice()}</span>
                </div>
              </div>

              {/* WhatsApp Share Button */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white text-center">
                <h4 className="font-bold text-lg mb-3">📱 Complete Your Order</h4>
                <button
                  onClick={sendOrderToWhatsApp}
                  className="w-full py-4 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transition flex items-center justify-center gap-3 text-lg shadow-lg"
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Share on WhatsApp
                </button>
                <p className="text-sm mt-4 text-green-100">
                  ⚠️ After completing payment, send screenshot to this WhatsApp number for confirmation
                </p>
              </div>

              {/* Instructions */}
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-sm">
                <p className="font-semibold mb-2">📝 Payment Steps:</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Click "Share on WhatsApp" button above</li>
                  <li>Your order details will be sent automatically</li>
                  <li>Scan QR code or use UPI ID to pay ₹{getTotalPrice()}</li>
                  <li>Take screenshot of payment confirmation</li>
                  <li>Send payment screenshot on the same WhatsApp chat</li>
                  <li>We'll confirm your order within 1 hour!</li>
                </ol>
              </div>

              <button
                onClick={() => {
                  setShowUpiPayment(false);
                  setShowCheckoutForm(false);
                }}
                className="w-full py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition"
              >
                ← Back to Cart
              </button>
            </div>
          ) : showCheckoutForm ? (
            // Customer Details Form
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#DCCA87] mb-4">Delivery Details</h3>
              <input
                type="text"
                placeholder="Full Name *"
                value={customerInfo.name}
                onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                className="w-full p-3 border rounded-lg focus:border-[#DCCA87] focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email *"
                value={customerInfo.email}
                onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                className="w-full p-3 border rounded-lg focus:border-[#DCCA87] focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                value={customerInfo.phone}
                onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                className="w-full p-3 border rounded-lg focus:border-[#DCCA87] focus:outline-none"
              />
              <textarea
                placeholder="Delivery Address *"
                value={customerInfo.address}
                onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                className="w-full p-3 border rounded-lg focus:border-[#DCCA87] focus:outline-none resize-vertical"
                rows={4}
              />
              <button
                onClick={() => setShowCheckoutForm(false)}
                className="w-full py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition"
              >
                ← Back to Cart
              </button>
            </div>
          ) : (
            // Cart Items List
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.name} className="bg-gray-50 rounded-lg p-4 flex gap-4 items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-[#DCCA87] font-bold">₹{item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.name, item.quantity - 1)}
                        className="w-6 h-6 bg-gray-300 rounded hover:bg-gray-400 transition"
                      >
                        −
                      </button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.name, item.quantity + 1)}
                        className="w-6 h-6 bg-gray-300 rounded hover:bg-gray-400 transition"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.name)}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && !showUpiPayment && (
          <div className="border-t p-4 space-y-4">
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total:</span>
              <span className="text-[#DCCA87]">₹{getTotalPrice()}</span>
            </div>
            {!showCheckoutForm && (
              <button
                onClick={clearCart}
                className="w-full py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition"
              >
                Clear Cart
              </button>
            )}
            <button
              onClick={showCheckoutForm ? handleProceedToPayment : () => setShowCheckoutForm(true)}
              className="w-full py-3 bg-gradient-to-r from-[#DCCA87] to-[#bfa760] text-black font-bold rounded-lg hover:shadow-lg transition"
            >
              {showCheckoutForm ? '📱 Continue to Payment' : '🛒 Proceed to Checkout'}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;