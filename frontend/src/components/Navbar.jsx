function Navbar({ cartCount, onCartClick }) {
  return (
    <nav>
      <h2>GlowCart ✨</h2>

      <ul>
        <li>Home</li>
        <li>Shop</li>
        <li onClick={onCartClick}>
  Cart ({cartCount})
</li>
      </ul>
    </nav>
  );
}

export default Navbar;