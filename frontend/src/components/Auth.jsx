import { useState } from "react";
import "./Auth.css";

function Auth({ onClose, onLoginSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch(
        `http://localhost:5000/api/auth/${isLogin ? "login" : "signup"}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(
            isLogin
              ? { email, password }
              : { name, email, password }
          ),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      localStorage.setItem("token", data.token);
      setMessage(data.message || "Success!");

      onLoginSuccess(data.user || { name, email });

      setTimeout(() => onClose(), 1000);
    } catch (error) {
      setMessage(error.message || "Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-overlay">
      <div className="auth-card">
        <button className="auth-close" onClick={onClose}>
          ✕
        </button>

        <h2>GlowCart ✨</h2>
        <p>{isLogin ? "Welcome back!" : "Create your account"}</p>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password (at least 8 characters)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={8}
            required
          />

          <button type="submit" disabled={loading}>
            {loading
              ? "Please wait..."
              : isLogin
              ? "Login"
              : "Sign Up"}
          </button>
        </form>

        {message && <p className="auth-message">{message}</p>}

        <p>
          {isLogin ? "New to GlowCart?" : "Already have an account?"}
          {" "}
          <button
            className="auth-switch"
            onClick={() => {
              setIsLogin(!isLogin);
              setMessage("");
            }}
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Auth;