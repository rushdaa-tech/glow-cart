function Cart({
  cartItems,
  clearCart,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  showCart,
  closeCart,
  goToCheckout,
}) {
  const total = cartItems.reduce(
  (sum, item) =>
    sum + item.price * item.quantity,
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
  <div key={index} className="cart-item">
    <div className="cart-product">
  <img
    src={item.image}
    alt={item.name}
    className="cart-image"
  />

  <div>
    <p>{item.name}</p>
<div className="quantity-controls">
  <button
    onClick={() =>
      decreaseQuantity(item.name)
    }
  >
    -
  </button>

  <span>{item.quantity}</span>

  <button
    onClick={() =>
      increaseQuantity(item.name)
    }
  >
    +
  </button>
</div>
<p>₹{item.price * item.quantity}</p>
  </div>
</div>

    <button onClick={() => removeItem(index)}>
      Remove
    </button>
  </div>
))}

          <h3>Total: ₹{total}</h3>
          
          <button
  className="checkout-btn"
  onClick={goToCheckout}
>
  Proceed to Checkout
</button>
          <button onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;