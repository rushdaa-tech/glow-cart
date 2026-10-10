
function Navbar({
  cartCount,
  wishlistCount,
  onCartClick,
  onWishlistClick,
  onAuthClick,
  user,
  onLogout,
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

        {user ? (
          <>
            <li>
              👋 {user.name || user.email || "Account"}
            </li>
            <li
              onClick={onLogout}
              style={{ cursor: "pointer" }}
            >
              Logout
            </li>
          </>
        ) : (
          <li
            onClick={onAuthClick}
            style={{ cursor: "pointer" }}
          >
            👤 Login
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
