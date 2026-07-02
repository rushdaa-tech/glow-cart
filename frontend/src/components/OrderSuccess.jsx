function OrderSuccess() {
  const orderId = Math.floor(
    Math.random() * 100000
  );

  return (
    <div className="checkout-page">
      <h1>🎉 Order Confirmed!</h1>

      <p>
        Thank you for shopping with
        GlowCart ✨
      </p>

      <h2>Order ID: #{orderId}</h2>

      <p>
        Your order has been placed
        successfully.
      </p>
    </div>
  );
}

export default OrderSuccess;