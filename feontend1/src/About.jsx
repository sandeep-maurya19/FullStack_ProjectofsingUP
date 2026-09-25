function About() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
        boxSizing: "border-box",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          background: "rgba(255, 255, 255, 0.95)",
          borderRadius: "16px",
          padding: "15px 25px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
        }}
      >
        <h2
          style={{
            margin: 0,
            color: "#2e7d32",
            fontSize: "24px",
          }}
        >
          🌾 Kishan Sava
        </h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <a
            href="/"
            style={{
              textDecoration: "none",
              color: "#333",
              fontWeight: "bold",
            }}
          >
            Home
          </a>

          <a
            href="/about"
            style={{
              textDecoration: "none",
              color: "#2e7d32",
              fontWeight: "bold",
            }}
          >
            About
          </a>

          <a
            href="/contact"
            style={{
              textDecoration: "none",
              color: "#333",
              fontWeight: "bold",
            }}
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "50px auto 30px",
          background: "rgba(255, 255, 255, 0.96)",
          borderRadius: "30px",
          padding: "55px 50px",
          textAlign: "center",
          boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
        }}
      >
        <div style={{ fontSize: "65px", marginBottom: "10px" }}>
          🌾
        </div>

        <h1
          style={{
            color: "#1b5e20",
            fontSize: "45px",
            margin: "10px 0",
          }}
        >
          About <span style={{ color: "#43a047" }}>Kishan Sava</span>
        </h1>

        <p
          style={{
            maxWidth: "800px",
            margin: "20px auto 0",
            color: "#666",
            fontSize: "18px",
            lineHeight: "1.8",
          }}
        >
          Kishan Sava is a smart farming platform created to help farmers
          access useful information, modern farming resources, and technology
          in one simple and convenient place.
        </p>
      </section>

      {/* Mission & Vision */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "30px auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "25px",
        }}
      >
        {/* Mission */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.96)",
            borderRadius: "22px",
            padding: "35px",
            boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
          }}
        >
          <div
            style={{
              width: "65px",
              height: "65px",
              borderRadius: "16px",
              background: "#e8f5e9",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "32px",
              marginBottom: "20px",
            }}
          >
            🎯
          </div>

          <h2 style={{ color: "#2e7d32" }}>Our Mission</h2>

          <p
            style={{
              color: "#666",
              lineHeight: "1.8",
              fontSize: "16px",
            }}
          >
            Our mission is to make useful farming information accessible and
            easy to understand. We aim to support farmers by bringing helpful
            tools and resources together through technology.
          </p>
        </div>

        {/* Vision */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.96)",
            borderRadius: "22px",
            padding: "35px",
            boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
          }}
        >
          <div
            style={{
              width: "65px",
              height: "65px",
              borderRadius: "16px",
              background: "#e8f5e9",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "32px",
              marginBottom: "20px",
            }}
          >
            🌍
          </div>

          <h2 style={{ color: "#2e7d32" }}>Our Vision</h2>

          <p
            style={{
              color: "#666",
              lineHeight: "1.8",
              fontSize: "16px",
            }}
          >
            We envision a future where farmers can easily use digital
            technology and reliable information to make informed decisions
            and build a more productive farming ecosystem.
          </p>
        </div>
      </section>

      {/* Why Kishan Sava */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "30px auto",
          background: "rgba(255, 255, 255, 0.96)",
          borderRadius: "25px",
          padding: "45px",
          boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#1b5e20",
            fontSize: "32px",
            marginBottom: "35px",
          }}
        >
          🌱 Why Kishan Sava?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "25px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "45px" }}>📚</div>
            <h3 style={{ color: "#2e7d32" }}>Useful Information</h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              Access farming-related information in one place.
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "45px" }}>💡</div>
            <h3 style={{ color: "#2e7d32" }}>Smart Ideas</h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              Discover technology-driven approaches to farming.
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "45px" }}>🤝</div>
            <h3 style={{ color: "#2e7d32" }}>Farmer Focused</h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              Designed with the needs of farmers in mind.
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "45px" }}>📱</div>
            <h3 style={{ color: "#2e7d32" }}>Easy to Use</h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              Simple and accessible digital experience.
            </p>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section
        style={{
          maxWidth: "900px",
          margin: "40px auto",
          background: "linear-gradient(135deg, #2e7d32, #43a047)",
          borderRadius: "25px",
          padding: "45px 30px",
          textAlign: "center",
          color: "white",
          boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ fontSize: "30px", marginBottom: "15px" }}>
          🌱 Grow Smarter with Kishan Sava
        </h2>

        <p
          style={{
            fontSize: "17px",
            lineHeight: "1.7",
            maxWidth: "650px",
            margin: "0 auto 25px",
            opacity: 0.9,
          }}
        >
          Explore our platform and discover useful tools and resources for
          modern farming.
        </p>

        <a
          href="/"
          style={{
            display: "inline-block",
            textDecoration: "none",
            background: "white",
            color: "#2e7d32",
            padding: "13px 30px",
            borderRadius: "12px",
            fontWeight: "bold",
          }}
        >
          Explore Kishan Sava →
        </a>
      </section>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          color: "rgba(255,255,255,0.9)",
          padding: "20px",
        }}
      >
        <p>© 2026 Kishan Sava | Made with 🌱 for Farmers</p>
      </footer>
    </div>
  );
}

export default About;
