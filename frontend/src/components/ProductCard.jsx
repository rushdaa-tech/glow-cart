function ProductCard(props) {
  return (
    <div className="card">
      <button
  className="wishlist-btn"
  onClick={props.onToggleFavorite}
>
  {props.isFavorite ? "❤️" : "🤍"}
</button>
      <img src={props.image} alt="product" />

      <h3>{props.name}</h3>

      <p>{props.price}</p>

      <button onClick={props.onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;