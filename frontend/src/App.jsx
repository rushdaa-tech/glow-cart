import OrderHistory from "./components/OrderHistory";
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
import Auth from "./components/Auth";
import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [showAuth, setShowAuth] = useState(false);

  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user")) || null;
    } catch {
      return null;
    }
  });

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [showOrderHistory, setShowOrderHistory] = useState(false);

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
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
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const removeItem = (indexToRemove) => {
    setCartItems(
      cartItems.filter((_, index) => index !== indexToRemove)
    );
  };

  const increaseQuantity = (productName) => {
    setCartItems(
      cartItems.map((item) =>
        item.name === productName
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (productName) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.name === productName
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const toggleWishlist = (productName) => {
    if (wishlist.includes(productName)) {
      setNotification(`💔 Removed ${productName}`);
      setWishlist(wishlist.filter((item) => item !== productName));
    } else {
      setNotification(`❤️ Added ${productName}`);
      setWishlist([...wishlist, productName]);
    }
  };

  const moveToWishlist = (product) => {
    if (!wishlist.includes(product.name)) {
      setWishlist([...wishlist, product.name]);
    }

    setCartItems(
      cartItems.filter((item) => item.name !== product.name)
    );

    setNotification(`❤️ Moved ${product.name} to wishlist`);
  };

  const moveToCart = (productName) => {
    const product = products.find(
      (item) => item.name === productName
    );

    if (product) {
      addToCart(product);
      setWishlist(wishlist.filter((item) => item !== productName));
      setNotification(`🛒 Moved ${productName} to cart`);
    }
  };



 const products = [
  { name: "Glow Serum", price: 499, image: "/images/glowserum.jpg" },
  { name: "Clay Detox Mask", price: 299, image: "/images/claymask.jpg" },
  { name: "Sunscreen SPF 50", price: 799, image: "/images/sunscreen.jpg" },
  { name: "Moisturizer", price: 599, image: "/images/moisturiser.jpg" },
  { name: "Lip Balm", price: 399, image: "/images/lipbalm.jpg" },
  { name: "Vitamin C Serum", price: 599, image: "/images/vitaminserum.jpg" },
  { name: "Niacinamide Serum", price: 649, image: "/images/niacinamideserum.jpg" },
  { name: "Retinol Night Serum", price: 799, image: "/images/retinolserum.jpg" },
  { name: "Hyaluronic Acid Serum", price: 699, image: "/images/hyaluronicserum.jpg" },
  { name: "Coffee Face Scrub", price: 399, image: "/images/coffeescrub.jpg" },
  { name: "Rose Body Scrub", price: 449, image: "/images/rosescrub.jpg" },
  { name: "Gentle Foaming Cleanser", price: 349, image: "/images/cleanser.jpg" },
  { name: "Rose Water Toner", price: 299, image: "/images/toner.jpg" },
  { name: "Aloe Vera Soothing Gel", price: 249, image: "/images/aloeveragel.jpg" },
  { name: "Caffeine Under-Eye Serum", price: 449, image: "/images/undereyecream.jpg" },
  { name: "Cleansing Balm", price: 499, image: "/images/cleansingbalm.jpg" },
  { name: "Overnight Sleeping Mask", price: 549, image: "/images/sleepingmask.jpg" },
  { name: "Hydrating Face Mist", price: 349, image: "/images/facemist.jpg" },
  { name: "Mini Skincare Starter Kit", price: 999, image: "/images/skincarekit.jpg" },
];

  if (orderPlaced) {
  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <OrderSuccess />
      <button onClick={() => {
        setOrderPlaced(false);
        setShowCheckout(false);
        setCartItems([]);
      }}>
        Continue Shopping
      </button>
      <button onClick={() => {
        setOrderPlaced(false);
        setShowOrderHistory(true);
      }}>
        View Order History
      </button>
    </div>
  );
}

if (showOrderHistory) {
  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <OrderHistory />
      <button onClick={() => setShowOrderHistory(false)}>
        Back to Shop
      </button>
    </div>
  );
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
  onOrdersClick={() => setShowOrderHistory(true)}
  darkMode={darkMode}
  onToggleDarkMode={() => setDarkMode(!darkMode)}
  onAuthClick={() => setShowAuth(true)}
  user={user}
  onLogout={() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  }}
/>



      {showAuth && (
        <Auth
          onClose={() => setShowAuth(false)}
          onLoginSuccess={(loggedInUser) => {
            setUser(loggedInUser);
            localStorage.setItem("user", JSON.stringify(loggedInUser));
          }}
        />
      )}

 
      <Hero />
      <WhyChooseUs />
      <About />

      <h2 className="product-heading">Featured Products</h2>

      <input
        type="text"
        placeholder="🔍 Search skincare products..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="products">
        {products
          .filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              price={`₹${product.price}`}
              image={product.image}
              onAddToCart={() => addToCart(product)}
              isFavorite={wishlist.includes(product.name)}
              onToggleFavorite={() => toggleWishlist(product.name)}
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
        closeWishlist={() => setShowWishlist(false)}
        moveToCart={moveToCart}
      />

      <Footer />
    </div>
  );
}

export default App;