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
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
const [cartItems, setCartItems] = useState([]);
const [showCart, setShowCart] = useState(false);
const [showCheckout, setShowCheckout] = useState(false);

const addToCart = (product) => {
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
  if (showCheckout) {
  return (
    <Checkout cartItems={cartItems} />
  );
}
return (
  <div className={darkMode ? "dark-mode" : ""}>
      <Navbar
  cartCount={cartItems.length}
  onCartClick={() => setShowCart(true)}
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
      <div className="products">
        <ProductCard
  name="Glow Serum"
  price="₹499"
  image="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
  onAddToCart={() =>
    addToCart({
      name: "Glow Serum",
      price: 499,
       image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
    })
  }
/>

        <ProductCard
          name="Clay Detox Mask"
          price="₹299"
          image="https://images.unsplash.com/photo-1586495777744-4413f21062fa"
        />
        <ProductCard
  name="Sunscreen SPF 50"
  price="₹799"
  image="https://images.unsplash.com/photo-1541643600914-78b084683601"
/>

<ProductCard
  name="Moisturizer"
  price="₹599"
  image="https://images.unsplash.com/photo-1556228578-8c89e6adf883"
/>

<ProductCard
  name="Lip balm"
  price="₹399"
  image="https://images.unsplash.com/photo-1583001931096-959e9a1a6223"
/>
<ProductCard
  name="Vitamin C Serum"
  price="₹599"
  image="https://images.unsplash.com/photo-1620916566398-39f1143ab7be"
/>

<ProductCard
  name="Niacinamide Serum"
  price="₹649"
  image="https://images.unsplash.com/photo-1601612628452-9e99ced43524"
/>

<ProductCard
  name="Retinol Night Serum"
  price="₹799"
  image="https://images.unsplash.com/photo-1571781926291-c477ebfd024b"
/>

<ProductCard
  name="Hyaluronic Acid Serum"
  price="₹699"
  image="https://images.unsplash.com/photo-1556228578-8c89e6adf883"
/>

<ProductCard
  name="Coffee Face Scrub"
  price="₹399"
  image="https://images.unsplash.com/photo-1515377905703-c4788e51af15"
/>

<ProductCard
  name="Rose Body Scrub"
  price="₹449"
  image="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
/>

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
  showCart={showCart}
  closeCart={() => setShowCart(false)}
  goToCheckout={() => {
  setShowCheckout(true);
  setShowCart(false);
}}
/>
 
      <Footer />
    </div>

    
  );
}

export default App;