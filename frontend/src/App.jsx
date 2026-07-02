import OrderSuccess from "./components/OrderSuccess";
import Wishlist from "./components/Wishlist";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";
import About from "./components/About";
import Routine from "./components/Routine";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import Reviews from "./components/Reviews";
import WhyChooseUs from "./components/WhyChooseUs";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Hero from "./components/Hero";
import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
const [cartItems, setCartItems] = useState(() => {
  const savedCart =
    localStorage.getItem("cart");

  return savedCart
    ? JSON.parse(savedCart)
    : [];
});
const [showCart, setShowCart] = useState(false);
const [showWishlist, setShowWishlist] = useState(false);
const [searchTerm, setSearchTerm] = useState("");
const [showCheckout, setShowCheckout] = useState(false);
const [orderPlaced, setOrderPlaced] =
  useState(false);
const [wishlist, setWishlist] = useState(() => {
  const savedWishlist =
    localStorage.getItem("wishlist");

  return savedWishlist
    ? JSON.parse(savedWishlist)
    : [];
});
useEffect(() => {
  localStorage.setItem(
    "cart",
    JSON.stringify(cartItems)
  );
}, [cartItems]);
useEffect(() => {
  localStorage.setItem(
    "wishlist",
    JSON.stringify(wishlist)
  );
}, [wishlist]);
const [notification, setNotification] = useState("");
useEffect(() => {
  if (notification) {
    const timer = setTimeout(() => {
      setNotification("");
    }, 2000);

    return () => clearTimeout(timer);
  }
}, [notification]);
const addToCart = (product) => {
  setNotification(`🛒 ${product.name} added to cart`);
  const existingProduct = cartItems.find(
    (item) => item.name === product.name
  );

  if (existingProduct) {
    setCartItems(
      cartItems.map((item) =>
        item.name === product.name
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  } else {
    setCartItems([
      ...cartItems,
      {
        ...product,
        quantity: 1,
      },
    ]);
  }
};

const clearCart = () => {
  setCartItems([]);
};
const removeItem = (indexToRemove) => {
  setCartItems(
    cartItems.filter(
      (_, index) => index !== indexToRemove
    )
  );
};
const increaseQuantity = (productName) => {
  setCartItems(
    cartItems.map((item) =>
      item.name === productName
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    )
  );
};
const decreaseQuantity = (productName) => {
  setCartItems(
    cartItems
      .map((item) =>
        item.name === productName
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
};
const toggleWishlist = (productName) => {
  if (wishlist.includes(productName)) {
    setNotification(
      `💔 Removed ${productName}`
    );

    setWishlist(
      wishlist.filter(
        (item) => item !== productName
      )
    );
  } else {
    setNotification(
      `❤️ Added ${productName}`
    );

    setWishlist([
      ...wishlist,
      productName,
    ]);
  }
};
const moveToWishlist = (product) => {
  // Add to wishlist if not already there
  if (!wishlist.includes(product.name)) {
    setWishlist([
      ...wishlist,
      product.name,
    ]);
  }

  // Remove from cart
  setCartItems(
    cartItems.filter(
      (item) => item.name !== product.name
    )
  );

  setNotification(
    `❤️ Moved ${product.name} to wishlist`
  );
};
const moveToCart = (productName) => {
  const product = products.find(
    (item) => item.name === productName
  );

  if (product) {
    addToCart(product);

    setWishlist(
      wishlist.filter(
        (item) => item !== productName
      )
    );

    setNotification(
      `🛒 Moved ${productName} to cart`
    );
  }
};
  const products = [
  {
    name: "Glow Serum",
    price: 499,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
  },
  {
    name: "Clay Detox Mask",
    price: 299,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa",
  },
  {
    name: "Sunscreen SPF 50",
    price: 799,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601",
  },
  {
    name: "Moisturizer",
    price: 599,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883",
  },
  {
    name: "Lip Balm",
    price: 399,
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223",
  },
  {
    name: "Vitamin C Serum",
    price: 599,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be",
  },
  {
    name: "Niacinamide Serum",
    price: 649,
    image: "https://images.unsplash.com/photo-1601612628452-9e99ced43524",
  },
  {
    name: "Retinol Night Serum",
    price: 799,
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b",
  },
  {
    name: "Hyaluronic Acid Serum",
    price: 699,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883",
  },
  {
    name: "Coffee Face Scrub",
    price: 399,
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15",
  },
  {
    name: "Rose Body Scrub",
    price: 449,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
  },
];
if (orderPlaced) {
  return <OrderSuccess />;
}
if (showCheckout) {
  return (
    <Checkout
      cartItems={cartItems}
      setOrderPlaced={setOrderPlaced}
    />
  );
}
return (
  <div className={darkMode ? "dark-mode" : ""}>
    {notification && (
  <div className="notification">
    {notification}
  </div>
)}
      <Navbar
  cartCount={cartItems.length}
  wishlistCount={wishlist.length}
  onCartClick={() => setShowCart(true)}
  onWishlistClick={() => setShowWishlist(true)}
/>
      <button
  onClick={() => setDarkMode(!darkMode)}
  className="theme-btn"
>
  {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
</button>
      <Hero />
 <WhyChooseUs />
 <About />

 <h2 className="product-heading">Featured Products</h2>
 <input
  type="text"
  placeholder="🔍 Search skincare products..."
  className="search-bar"
  value={searchTerm}
  onChange={(e) =>
    setSearchTerm(e.target.value)
  }
/>
      <div className="products"> 
        {products
  .filter((product) =>
    product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  )
  .map((product) => (
  <ProductCard
  key={product.name}
  name={product.name}
  price={`₹${product.price}`}
  image={product.image}
  onAddToCart={() => addToCart(product)}
  isFavorite={wishlist.includes(product.name)}
  onToggleFavorite={() =>
    toggleWishlist(product.name)
  }
/>
))}
      </div>
      <Routine />
      <Reviews />
      <Newsletter />
      <Cart
  cartItems={cartItems}
  clearCart={clearCart}
  removeItem={removeItem}
  increaseQuantity={increaseQuantity}
  decreaseQuantity={decreaseQuantity}
  moveToWishlist={moveToWishlist}
  showCart={showCart}
  closeCart={() => setShowCart(false)}
  goToCheckout={() => {
    setShowCheckout(true);
    setShowCart(false);
  }}
/>
<Wishlist
  wishlist={wishlist}
  showWishlist={showWishlist}
  closeWishlist={() =>
    setShowWishlist(false)
  }
  moveToCart={moveToCart}
/>
 
      <Footer />
    </div>

    
  );
}

export default App;