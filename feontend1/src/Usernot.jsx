function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        fontFamily: "Arial, sans-serif",
        padding: "40px 25px",
        boxSizing: "border-box",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "20px auto 50px",
          padding: "60px 50px",
          background: "rgba(255, 255, 255, 0.96)",
          borderRadius: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "50px",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.2)",
          boxSizing: "border-box",
        }}
      >
        {/* Left Content */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "inline-block",
              background: "#e8f5e9",
              color: "#2e7d32",
              padding: "8px 16px",
              borderRadius: "30px",
              fontSize: "14px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            🌱 SMART FARMING PLATFORM
          </div>

          <h1
            style={{
              fontSize: "52px",
              lineHeight: "1.1",
              color: "#1b5e20",
              margin: "0 0 20px",
            }}
          >
            Welcome to
            <br />
            <span style={{ color: "#43a047" }}>Kishan Sava</span>
          </h1>

          <p
            style={{
              color: "#666",
              fontSize: "18px",
              lineHeight: "1.8",
              maxWidth: "600px",
              marginBottom: "30px",
            }}
          >
            A modern platform designed to bring useful farming
            information, resources and technology together in one
            simple place.
          </p>

          <button
            style={{
              border: "none",
              cursor: "pointer",
              color: "white",
              background:
                "linear-gradient(135deg, #43a047, #2e7d32)",
              padding: "15px 30px",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: "bold",
              boxShadow: "0 8px 20px rgba(46, 125, 50, 0.3)",
            }}
          >
            Explore Kishan Sava →
          </button>
        </div>

        {/* Farmer Illustration */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, #c8e6c9, #81c784)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "125px",
              boxShadow:
                "0 20px 45px rgba(46, 125, 50, 0.25)",
            }}
          >
            👨‍🌾
          </div>
        </div>
      </section>

      {/* Features Heading */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "34px",
            marginBottom: "35px",
          }}
        >
          🌾 Everything Farmers Need
        </h2>

        {/* Feature Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "25px",
          }}
        >
          {/* Card 1 */}
          <div style={cardStyle}>
            <div style={iconStyle}>🌱</div>

            <h3 style={titleStyle}>Crop Information</h3>

            <p style={descriptionStyle}>
              Learn about crops, farming methods and useful
              agricultural practices.
            </p>
          </div>

          {/* Card 2 */}
          <div style={cardStyle}>
            <div style={iconStyle}>🌦️</div>

            <h3 style={titleStyle}>Weather Updates</h3>

            <p style={descriptionStyle}>
              Stay informed about weather conditions and plan
              your farming activities.
            </p>
          </div>

          {/* Card 3 */}
          <div style={cardStyle}>
            <div style={iconStyle}>👨‍🌾</div>

            <h3 style={titleStyle}>Farmer Support</h3>

            <p style={descriptionStyle}>
              Find useful resources and information created for
              farmers.
            </p>
          </div>

          {/* Card 4 */}
          <div style={cardStyle}>
            <div style={iconStyle}>📈</div>

            <h3 style={titleStyle}>Smart Farming</h3>

            <p style={descriptionStyle}>
              Discover modern technology and smarter approaches
              to farming.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section
        style={{
          maxWidth: "900px",
          margin: "60px auto 20px",
          padding: "45px 30px",
          textAlign: "center",
          background:
            "linear-gradient(135deg, #2e7d32, #43a047)",
          borderRadius: "25px",
          color: "white",
          boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
          boxSizing: "border-box",
        }}
      >
        <div style={{ fontSize: "45px" }}>🌾</div>

        <h2
          style={{
            fontSize: "30px",
            margin: "10px 0 15px",
          }}
        >
          Grow Smarter With Kishan Sava
        </h2>

        <p
          style={{
            maxWidth: "650px",
            margin: "0 auto",
            fontSize: "17px",
            lineHeight: "1.7",
            opacity: "0.9",
          }}
        >
          Bringing farming, technology and useful information
          together for a smarter agricultural experience.
        </p>
      </section>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          color: "rgba(255, 255, 255, 0.9)",
          paddingTop: "25px",
        }}
      >
        <p>© 2026 Kishan Sava | Made with 🌱 for Farmers</p>
      </footer>
    </div>
  );
}

const cardStyle = {
  background: "rgba(255, 255, 255, 0.96)",
  padding: "30px 22px",
  borderRadius: "20px",
  textAlign: "center",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
};

const iconStyle = {
  width: "70px",
  height: "70px",
  margin: "0 auto 18px",
  borderRadius: "18px",
  background: "#e8f5e9",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "38px",
};

const titleStyle = {
  color: "#2e7d32",
  fontSize: "20px",
  marginBottom: "10px",
};

const descriptionStyle = {
  color: "#666",
  fontSize: "15px",
  lineHeight: "1.6",
};

export default Home;
