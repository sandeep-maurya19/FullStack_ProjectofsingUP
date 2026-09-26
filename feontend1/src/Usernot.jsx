function Usernot() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "430px",
          backgroundColor: "#ffffff",
          borderRadius: "24px",
          padding: "45px 35px",
          textAlign: "center",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.2)",
          boxSizing: "border-box",
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: "80px",
            height: "80px",
            margin: "0 auto 20px",
            borderRadius: "50%",
            backgroundColor: "#f3f0ff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "38px",
          }}
        >
          🔍
        </div>

        {/* Title */}
        <h1
          style={{
            color: "#22223b",
            fontSize: "32px",
            marginBottom: "15px",
          }}
        >
          User Not Found
        </h1>

        {/* Message */}
        <p
          style={{
            color: "#6c6c80",
            fontSize: "16px",
            lineHeight: "1.7",
            marginBottom: "30px",
          }}
        >
          We couldn't find an account with those details.
          <br />
          Create a new account to get started.
        </p>

        {/* Sign Up Button */}
        <a
          href="/SingUp"
          style={{
            display: "inline-block",
            textDecoration: "none",
            color: "#ffffff",
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            padding: "14px 35px",
            borderRadius: "12px",
            fontSize: "16px",
            fontWeight: "bold",
            boxShadow: "0 8px 20px rgba(102, 126, 234, 0.35)",
          }}
        >
          Create Account
        </a>

        {/* Login */}
        <p
          style={{
            marginTop: "25px",
            color: "#888",
            fontSize: "14px",
          }}
        >
          Already have an account?{" "}
          <a
            href="/login1"
            style={{
              color: "#667eea",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Usernot;
