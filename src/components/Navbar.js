import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  
  // Used to track if Navbar is open or closed
  const [expandNavbar, setExpandNavbar] = useState(false)

  // Stores the current URL in the Web Browser 
  const location = useLocation()

  // Collapse the Navbar whenever a new URL in the navbar is clicked
  useEffect(() => {
    setExpandNavbar(false);
  }, [location])

  return (
    <div className="navbar" id={expandNavbar ? "open": "close"}>
      <div className="toggleButton">
        {/* When button is clicked, expand or collapse navbar */}
        <button onClick={
          () => {
            setExpandNavbar((prev) => !prev)
        }}>
          {/* TODO: Use ReorderIcon */}
          Menu
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default Navbar;
