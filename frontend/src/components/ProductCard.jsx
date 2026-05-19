function ProductCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt="product" />

      <h3>{props.name}</h3>

      <p>{props.price}</p>

      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;