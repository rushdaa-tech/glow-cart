 
import "./Navbar.css";

function Navbar({
  cartCount = 0,
  wishlistCount = 0,
  onCartClick,
  onWishlistClick,
  onAuthClick,
  onOrdersClick,
  darkMode,
  onToggleDarkMode,
  user,
  onLogout,
}) {
  return (
    <nav className="glow-navbar">
      <a href="#home" className="glow-logo">
        GlowCart <span>✦</span>
      </a>

      <div className="glow-nav-links">
        <a href="#home">Home</a>
        <a href="#shop">Shop</a>

        <button className="nav-action" onClick={onWishlistClick}>
          ♡ Wishlist <span className="nav-count">{wishlistCount}</span>
        </button>

        <button className="nav-action" onClick={onCartClick}>
          🛍 Cart <span className="nav-count">{cartCount}</span>
        </button>

        <button className="nav-action" onClick={onOrdersClick}>
          📦 My Orders
        </button>

        <button
          className="nav-theme-btn"
          onClick={onToggleDarkMode}
          type="button"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

        {user ? (
          <div className="nav-account">
            <span className="nav-user">
              Hi, {(user.name || user.email || "User").split(" ")[0]}
            </span>
            <button className="nav-login-btn" onClick={onLogout}>
              Logout
            </button>
          </div>
        ) : (
          <button className="nav-login-btn" onClick={onAuthClick}>
            👤 Login / Sign up
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
