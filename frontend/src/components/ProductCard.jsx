 import React from "react";
import "./ProductCard.css";

import "./ProductCard.css";

function ProductCard(props) {
  const [imageError, setImageError] = React.useState(false);

  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img
          src={imageError ? "/images/glowserum.jpg" : props.image}
          alt={props.name}
          className="product-image"
          onError={() => setImageError(true)}
        />

        <button
          className={`wishlist-btn ${props.isFavorite ? "is-favorite" : ""}`}
          onClick={props.onToggleFavorite}
          aria-label={
            props.isFavorite ? "Remove from wishlist" : "Add to wishlist"
          }
        >
          {props.isFavorite ? "❤️" : "🤍"}
        </button>
      </div>

      <div className="card-content">
        <h3>{props.name}</h3>
         <p className="product-price">{props.price}</p>
        <button className="add-to-cart-btn" onClick={props.onAddToCart}>
          Add to Cart <span>＋</span>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

