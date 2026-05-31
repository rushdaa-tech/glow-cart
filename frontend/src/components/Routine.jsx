function Routine() {
  const steps = [
    {
      step: "1",
      title: "Cleanse",
      description: "Start with a gentle cleanser to remove dirt and oil."
    },
    {
      step: "2",
      title: "Treat",
      description: "Apply serums like Vitamin C or Niacinamide."
    },
    {
      step: "3",
      title: "Moisturize",
      description: "Lock in hydration with a nourishing moisturizer."
    },
    {
      step: "4",
      title: "Protect",
      description: "Finish with SPF to protect your skin every day."
    }
  ];

  return (
    <section className="routine">
      <h2>Your Daily Skincare Routine</h2>

      <div className="routine-container">
        {steps.map((item, index) => (
          <div className="routine-card" key={index}>
            <h3>{item.step}</h3>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Routine;
