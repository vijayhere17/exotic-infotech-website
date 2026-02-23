import React from "react";

const Servicepage = ({ service }) => {
  if (!service) return null;

  return (
    <section
      style={{
        padding: "120px 8%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "60px",
        background: "#f8f9fb",
      }}
    >
      <div style={{ flex: 1 }}>
        <h1
          style={{
            fontSize: "52px",
            marginBottom: "25px",
          }}
        >
          {service.hero.title}
        </h1>

        <p
          style={{
            maxWidth: "500px",
            lineHeight: "1.6",
            color: "#555",
            marginBottom: "30px",
          }}
        >
          {service.hero.description}
        </p>

        <button
          style={{
            backgroundColor: service.themeColor,
            padding: "14px 28px",
            border: "none",
            color: "#fff",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Get In Touch
        </button>
      </div>

      <div style={{ flex: 1, textAlign: "center" }}>
        <img
          src={service.hero.image}
          alt={service.hero.title}
          style={{
            maxWidth: "450px",
            width: "100%",
          }}
        />
      </div>
    </section>
  );
};

export default Servicepage;
