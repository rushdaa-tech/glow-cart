 
import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address 💌");
      return;
    }

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!validEmail.test(email.trim())) {
      setMessage("Please enter a valid email address 💗");
      return;
    }

    const savedEmails = JSON.parse(
      localStorage.getItem("newsletterEmails") || "[]"
    );

    if (
      savedEmails.some(
        (savedEmail) => savedEmail.toLowerCase() === email.trim().toLowerCase()
      )
    ) {
      setMessage("You're already subscribed! 💕");
      return;
    }

    localStorage.setItem(
      "newsletterEmails",
      JSON.stringify([...savedEmails, email.trim()])
    );

    setMessage("You're subscribed! Stay in your glow era ✨");
    setEmail("");
  };

  return (
    <section className="newsletter">
      <h2>Stay in Your Glow Era ✨</h2>
      <p>
        Get skincare tips, new product updates, and exclusive offers.
      </p>

      <form className="newsletter-form" onSubmit={handleSubscribe}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setMessage("");
          }}
          required
        />
        <button type="submit">Subscribe</button>
      </form>

      {message && <p role="status">{message}</p>}
    </section>
  );
}

export default Newsletter;
