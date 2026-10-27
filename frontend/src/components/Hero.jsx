 
function Hero() {
  const handleShopClick = () => {
    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="hero">
      <h1>Your everyday glow ritual</h1>

      <p>Where skincare meets self care.</p>

      <button onClick={handleShopClick}>Shop Now</button>
    </div>
  );
}

export default Hero;
