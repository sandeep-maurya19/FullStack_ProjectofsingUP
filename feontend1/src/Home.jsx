import Navbar from "./Navbar";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        fontFamily: "Arial, sans-serif",
        paddingBottom: "40px",
      }}
    >
      {/* Your Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "35px auto",
          padding: "60px 50px",
          background: "rgba(255, 255, 255, 0.96)",
          borderRadius: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "40px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
          boxSizing: "border-box",
        }}
      >
        {/* Left Side */}
        <div
          style={{
            flex: 1,
          }}
        >
          <p
            style={{
              color: "#43a047",
              fontSize: "15px",
              fontWeight: "bold",
              letterSpacing: "2px",
              marginBottom: "10px",
            }}
          >
            🌱 SMART FARMING PLATFORM
          </p>

          <h1
            style={{
              fontSize: "52px",
              lineHeight: "1.15",
              color: "#1b5e20",
              margin: "10px 0 20px",
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
              lineHeight: "1.7",
              maxWidth: "600px",
            }}
          >
            A simple and smart platform designed to connect farmers with
            useful information, modern farming resources and technology.
          </p>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "30px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/services"
              style={{
                textDecoration: "none",
                color: "white",
                background:
                  "linear-gradient(135deg, #43a047, #2e7d32)",
                padding: "14px 28px",
                borderRadius: "12px",
                fontWeight: "bold",
                boxShadow: "0 8px 20px rgba(46,125,50,0.3)",
              }}
            >
              Explore Services →
            </a>

            <a
              href="/about"
              style={{
                textDecoration: "none",
                color: "#2e7d32",
                background: "#e8f5e9",
                padding: "14px 28px",
                borderRadius: "12px",
                fontWeight: "bold",
              }}
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Side Illustration */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
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
              boxShadow: "0 20px 40px rgba(46,125,50,0.25)",
            }}
          >
            👨‍🌾
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "50px auto",
          padding: "0 25px",
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "32px",
            marginBottom: "35px",
          }}
        >
          🌾 Everything Farmers Need
        </h2>

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

            <h3 style={headingStyle}>Crop Information</h3>

            <p style={textStyle}>
              Discover useful information about crops, farming methods
              and better agricultural practices.
            </p>
          </div>

          {/* Card 2 */}
          <div style={cardStyle}>
            <div style={iconStyle}>🌦️</div>

            <h3 style={headingStyle}><Link to="/chekout1" >Weather Information</Link></h3>

            <p style={textStyle}>
              Get weather information to help you plan your farming
              activities.
            </p>
          </div>

          {/* Card 3 */}
          <div style={cardStyle}>
            <div style={iconStyle}>🧑‍🌾</div>

            <h3 style={headingStyle}><Link  to="/chekout2" >Advance Weather</Link></h3>

            <p style={textStyle}>
              Access useful resources and information created with
              farmers in mind.
            </p>
          </div>

          {/* Card 4 */}
          <div style={cardStyle}>
            <div style={iconStyle}>📈</div>

            <h3 style={headingStyle}>Smart Farming</h3>

            <p style={textStyle}>
              Explore technology and information that can support
              smarter farming decisions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          maxWidth: "900px",
          margin: "60px auto 30px",
          padding: "45px 30px",
          textAlign: "center",
          background:
            "linear-gradient(135deg, #2e7d32, #43a047)",
          color: "white",
          borderRadius: "25px",
          boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
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
          Let's Grow Together
        </h2>

        <p
          style={{
            maxWidth: "650px",
            margin: "0 auto 25px",
            fontSize: "17px",
            lineHeight: "1.7",
            opacity: "0.9",
          }}
        >
          Join Kishan Sava and explore a smarter way to access
          farming resources and information.
        </p>

        <a
          href="/SingUp"
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
          Get Started →
        </a>
      </section>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          color: "rgba(255,255,255,0.9)",
          marginTop: "35px",
        }}
      >
        <p>© 2026 Kishan Sava | Made with 🌱 for Farmers</p>
      </footer>
    </div>
  );
}

/* Card Styles */

const cardStyle = {
  background: "rgba(255,255,255,0.96)",
  padding: "30px 22px",
  borderRadius: "20px",
  textAlign: "center",
  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
};

const iconStyle = {
  width: "70px",
  height: "70px",
  margin: "0 auto 15px",
  borderRadius: "18px",
  background: "#e8f5e9",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "38px",
};

const headingStyle = {
  color: "#2e7d32",
  fontSize: "20px",
  marginBottom: "10px",
};

const textStyle = {
  color: "#666",
  lineHeight: "1.6",
  fontSize: "15px",
};

export default Home;
