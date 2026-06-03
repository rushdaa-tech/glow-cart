function Cart({
  cartItems,
  clearCart,
  showCart,
  closeCart,
}) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className={`cart-sidebar ${showCart ? "open" : ""}`}>
      <button
        className="close-btn"
        onClick={closeCart}
      >
        ✖
      </button>

      <h2>🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <p key={index}>
              {item.name} - ₹{item.price}
            </p>
          ))}

          <h3>Total: ₹{total}</h3>

          <button onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;