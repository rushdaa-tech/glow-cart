function Wishlist({
  wishlist,
  showWishlist,
  closeWishlist,
  moveToCart,
}) {
  return (
    <div
      className={`cart-sidebar ${
        showWishlist ? "open" : ""
      }`}
    >
      <button
        className="close-btn"
        onClick={closeWishlist}
      >
        ✖
      </button>

      <h2>❤️ Wishlist</h2>

      {wishlist.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        wishlist.map((item, index) => (
  <div key={index} className="cart-item">
    <p>❤️ {item}</p>

    <button
      onClick={() => moveToCart(item)}
    >
      🛒 Move to Cart
    </button>
  </div>
))
      )}
    </div>
  );
}

export default Wishlist;