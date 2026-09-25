function Kishan() {
  return (
    <div
      style={{
        width: "100%",
        boxSizing: "border-box",
        padding: "18px 25px",
        background:
          "linear-gradient(135deg, #1b5e20 0%, #43a047 50%, #66bb6a 100%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.18)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "25px",
        }}
      >
        {/* Logo / Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            minWidth: "220px",
          }}
        >
          <div
            style={{
              width: "55px",
              height: "55px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.2)",
              border: "2px solid rgba(255,255,255,0.6)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "30px",
            }}
          >
            🌾
          </div>

          <div>
            <h2
              style={{
                margin: 0,
                fontSize: "24px",
                letterSpacing: "1px",
              }}
            >
              Kishan Sava
            </h2>

            <p
              style={{
                margin: "3px 0 0",
                fontSize: "12px",
                opacity: 0.85,
              }}
            >
              🌱 Smart Farming • Better Future
            </p>
          </div>
        </div>

        {/* Thought */}
        <div
          style={{
            flex: 1,
            textAlign: "center",
            padding: "5px 20px",
          }}
        >
          <div
            style={{
              fontSize: "26px",
              marginBottom: "5px",
            }}
          >
            🌱
          </div>

          <p
            style={{
              margin: 0,
              fontSize: "18px",
              fontWeight: "600",
              fontStyle: "italic",
              lineHeight: "1.5",
            }}
          >
            "मिट्टी से जुड़कर ही,
            <br />
            भविष्य को बेहतर बनाया जा सकता है।"
          </p>

          <span
            style={{
              display: "block",
              marginTop: "7px",
              fontSize: "12px",
              opacity: 0.8,
            }}
          >
            — किसान की मेहनत, देश की ताकत 🇮🇳
          </span>
        </div>

        {/* Right Side */}
        <div
          style={{
            minWidth: "220px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              textAlign: "right",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "13px",
                opacity: 0.8,
              }}
            >
              खेती • प्रकृति • तकनीक
            </p>

            <h3
              style={{
                margin: "4px 0 0",
                fontSize: "18px",
              }}
            >
              🚜 Grow With Nature
            </h3>
          </div>

          <div
            style={{
              fontSize: "48px",
            }}
          >
            👨‍🌾
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kishan;

