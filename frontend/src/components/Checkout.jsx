
function Checkout({ cartItems, setOrderPlaced }) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const placeOrder = () => {
    const name = document.getElementById("order-name").value.trim();
    const address = document.getElementById("order-address").value.trim();

    if (!name || !address) {
      alert("Please enter your name and address.");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const order = {
      id: Date.now(),
      name,
      address,
      items: cartItems,
      total,
      date: new Date().toLocaleString(),
    };

    const previousOrders = JSON.parse(
      localStorage.getItem("orders") || "[]"
    );
console.log("Saving order:", order);
console.log("Previous orders:", previousOrders);
    localStorage.setItem(
      "orders",
      JSON.stringify([order, ...previousOrders])
    );

    setOrderPlaced(true);
  };

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

      <input id="order-name" type="text" placeholder="Enter Your Name" />
      <input id="order-address" type="text" placeholder="Enter Address" />

      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
}

export default Checkout;
