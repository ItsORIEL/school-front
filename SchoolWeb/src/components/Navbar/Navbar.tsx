import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const handleIconClick = () => {
    console.log("Icon clicked!");
    // Add more logic here if needed
  };

  return (
    <div className="navbar">
      <div className="burgir">
        <button onClick={handleIconClick} className="svg-background">
          <img src="/coolicon.svg" alt="Cool Icon" className="svg-background" />
        </button>
      </div>
      <div className="title">Shob Classes</div>
      <div className="victor">
        <button onClick={handleIconClick} className="svg-background">
          <img src="/vector.svg" alt="Cool Icon" className="svg-background" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
