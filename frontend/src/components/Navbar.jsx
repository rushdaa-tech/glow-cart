function Navbar({
  cartCount,
  wishlistCount,
  onCartClick,
  onWishlistClick,
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
      </ul>
    </nav>
  );
}

export default Navbar;