import "./App.css";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Hero from "./components/Hero";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />

      <div className="products">
        <ProductCard
          name="Glow Serum"
          price="₹499"
          image="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
        />

        <ProductCard
          name="Lip Gloss"
          price="₹299"
          image="https://images.unsplash.com/photo-1586495777744-4413f21062fa"
        />
        <ProductCard
  name="Perfume"
  price="₹799"
  image="https://images.unsplash.com/photo-1541643600914-78b084683601"
/>

<ProductCard
  name="Moisturizer"
  price="₹599"
  image="https://images.unsplash.com/photo-1556228578-8c89e6adf883"
/>

<ProductCard
  name="Lipstick"
  price="₹399"
  image="https://images.unsplash.com/photo-1583001931096-959e9a1a6223"
/>
      </div>
    </div>
  );
}

export default App;