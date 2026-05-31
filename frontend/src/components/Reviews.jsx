function Reviews() {
  const reviews = [
    {
      name: "Maya",
      review: "My skin has never looked this radiant. Absolutely love it!",
    },
    {
      name: "Sarah",
      review: "The Glow Serum became my daily skincare essential.",
    },
    {
      name: "Emma",
      review: "Gentle on my skin and the results are amazing.",
    },
  ];

  return (
    <section className="reviews">
      <h2>What Our Customers Say</h2>

      <div className="review-container">
        {reviews.map((item, index) => (
          <div className="review-card" key={index}>
            <h3>⭐⭐⭐⭐⭐</h3>
            <p>"{item.review}"</p>
            <h4>- {item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
