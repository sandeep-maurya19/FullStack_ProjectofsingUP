import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        width: "100%",
        padding: "15px 25px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          height: "65px",
          padding: "0 25px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgba(255, 255, 255, 0.95)",
          borderRadius: "18px",
          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
          boxSizing: "border-box",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span style={{ fontSize: "28px" }}>🌾</span>

          <span
            style={{
              fontSize: "23px",
              fontWeight: "bold",
              color: "#2e7d32",
            }}
          >
            Kishan Sava
          </span>
        </Link>

        {/* Navigation Links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Link
            to="/"
            style={linkStyle}
          >
            🏠 Home
          </Link>

          <Link
            to="/about"
            style={linkStyle}
          >
            ℹ️ About
          </Link>

          <Link
            to="/SingUp"
            style={linkStyle}
          >
            ✨ Sign Up
          </Link>

          {/* Login Button */}
          <Link
            to="/login1"
            style={{
              textDecoration: "none",
              color: "white",
              background:
                "linear-gradient(135deg, #43a047, #2e7d32)",
              padding: "11px 20px",
              borderRadius: "10px",
              fontWeight: "bold",
              boxShadow: "0 5px 15px rgba(46, 125, 50, 0.25)",
            }}
          >
            🔐 Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#444",
  padding: "10px 14px",
  borderRadius: "9px",
  fontWeight: "600",
  fontSize: "15px",
};

export default Navbar;
