import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router";
import Logo from "./Logo";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import MaterialsPage from "./MaterialsPage";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark"); // NEW

  // NEW: apply the theme to the page and remember the choice
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

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
        if (!response.ok) throw new Error();
        const data = await response.json();
        setUser(data.user);
      } catch (err) {
        localStorage.removeItem("token");
      } finally {
        setLoading(false);
      }
    }
    loadUser();
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    setUser(null);
  }

  function toggleTheme() { // NEW
    setTheme(theme === "dark" ? "light" : "dark");
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <Link to="/"><Logo /></Link>
          <div className="nav-links">
            {/* NEW: theme switch */}
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "dark" ? (
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
              ) : (
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
              )}
            </button>
            {user ? (
              <>
                <span className="nav-user">Hi, {user.name}</span>
                <button className="nav-logout" onClick={handleLogout}>Log out</button>
              </>
            ) : (
              <Link to="/login" className="nav-login">Log in</Link>
            )}
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage onLogin={setUser} />} />
        <Route path="/materials" element={<MaterialsPage user={user} />} />
      </Routes>
    </div>
  );
}

export default App;