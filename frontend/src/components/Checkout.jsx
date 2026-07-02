
function Checkout({
  cartItems,
  setOrderPlaced,
}) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      <h3>Your Order</h3>

      {cartItems.map((item, index) => (
        <p key={index}>
          {item.name} x {item.quantity}
        </p>
      ))}

      <h2>Total: ₹{total}</h2>

      <input
        type="text"
        placeholder="Enter Your Name"
      />

      <input
        type="text"
        placeholder="Enter Address"
      />

      <button
        onClick={() => {
          console.log("clicked");
          setOrderPlaced(true);
        }}
      >
        Place Order
      </button>
    </div>
  );
}

export default Checkout;