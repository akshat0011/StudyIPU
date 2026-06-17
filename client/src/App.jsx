import { useState, useEffect } from "react"; // CHANGED: also import useEffect
import { Routes, Route, Link } from "react-router"; // NEW
import MaterialsPage from "./MaterialsPage"; // NEW

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // NEW: true while we check the saved token on load
  const [mode, setMode] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // NEW: runs once when the page loads — if a token is saved, fetch the user's profile
  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("http://localhost:3000/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) throw new Error("Invalid token");

        const data = await response.json();
        setUser(data.user);
      } catch (err) {
        localStorage.removeItem("token"); // token was bad or expired — drop it
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage("");

    const url =
      mode === "signup"
        ? "http://localhost:3000/signup"
        : "http://localhost:3000/login";
    const body =
      mode === "signup" ? { name, email, password } : { email, password };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await response.json();

      if (!response.ok) {
        setMessage(data.error);
        return;
      }

      if (mode === "signup") {
        setMessage("Account created! You can log in now.");
        setMode("login");
      } else {
        localStorage.setItem("token", data.token);
        setUser(data.user);
      }
    } catch (err) {
      setMessage("Could not reach the server. Is it running?");
    }
  }

  function handleLogout() {
    localStorage.removeItem("token");
    setUser(null);
  }

  // NEW: while we're still checking the saved token, don't flash the form
  if (loading) {
    return <p>Loading...</p>;
  }

if (user) {
    return (
      <div>
        <h1>StudyIPU</h1>

        {/* NEW: navigation bar, stays on screen across pages */}
        <nav>
          <Link to="/">Home</Link> | <Link to="/materials">Materials</Link>
          {" | "}
          <button onClick={handleLogout}>Log out</button>
        </nav>

        {/* NEW: which page shows depends on the URL */}
        <Routes>
          <Route
            path="/"
            element={
              <p>
                Welcome, {user.name}! Logged in as {user.email} ({user.role}).
              </p>
            }
          />
          <Route path="/materials" element={<MaterialsPage />} />
        </Routes>
      </div>
    );
  }

  return (
    <div>
      <h1>StudyIPU</h1>
      <h2>{mode === "signup" ? "Create an account" : "Log in"}</h2>

      <form onSubmit={handleSubmit}>
        {mode === "signup" && (
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{mode === "signup" ? "Sign up" : "Log in"}</button>
      </form>

      <p>{message}</p>

      <button onClick={() => setMode(mode === "signup" ? "login" : "signup")}>
        {mode === "signup"
          ? "Already have an account? Log in"
          : "Need an account? Sign up"}
      </button>
    </div>
  );
}

export default App;