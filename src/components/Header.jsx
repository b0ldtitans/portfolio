import React from "react";
import Logo from "../assets/bitmapzz.png";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
