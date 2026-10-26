 
import "./Wishlist.css";

function Wishlist({
  wishlist,
  showWishlist,
  closeWishlist,
  moveToCart,
}) {
  return (
    <div
       className={`cart-sidebar wishlist-sidebar ${
  showWishlist ? "open" : ""
}`}
    >
      <button
        className="wishlist-close-btn"
        onClick={closeWishlist}
        aria-label="Close wishlist"
      >
        ✕
      </button>

      <h2>❤️ Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="wishlist-empty">No favorites yet ♡</p>
      ) : (
        wishlist.map((item, index) => (
          <div key={`${item}-${index}`} className="wishlist-item">
            <p>❤️ {typeof item === "string" ? item : item.name}</p>

            <button
              className="wishlist-move-btn"
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
