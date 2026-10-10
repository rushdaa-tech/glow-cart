function Navbar({
  cartCount,
  wishlistCount,
  onCartClick,
  onWishlistClick,
  onAuthClick,
}) {
  return (
    <nav>
      <h2>GlowCart ✨</h2>

      <ul>
        <li>Home</li>
        <li>Shop</li>

        <li onClick={onCartClick}>
          Cart ({cartCount})
        </li>

        <li onClick={onWishlistClick}>
          ❤️ {wishlistCount}
        </li>

        <li onClick={onAuthClick} style={{ cursor: "pointer" }}>
          👤 Login
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;