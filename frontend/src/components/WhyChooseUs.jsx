function WhyChooseUs() {
  const features = [
    {
      title: "Gentle Ingredients",
      description: "Made with skin-loving ingredients for everyday care.",
    },
    {
      title: "Cruelty Free",
      description: "Never tested on animals and always skin-friendly.",
    },
    {
      title: "Visible Results",
      description: "Glow that you can see and confidence you can feel.",
    },
  ];

  return (
    <section className="why-choose">
      <h2>Why Choose GlowCart?</h2>

      <div className="feature-container">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
