import React from "react";

function Logo() {
  return (
    <a href="index.html" className="site-logo">
      <img
        style={{ maxWidth: 50 }}
        src="img/logo-primary.png"
        alt="Spot BETF"
      />
      <span className="logo-text">Spot Bitcoin ETF</span>
    </a>
  );
}

export default Logo;
