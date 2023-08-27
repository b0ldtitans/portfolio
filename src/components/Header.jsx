import React from "react";
import Logo from "../assets/bitmapzz.png";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img src={Logo} alt="Logo" />
          </a>
          <Link
            // as="button"
            // to="contact"
            // activeClass="active"
            // smooth={true}
            // spy={true}
            className="btn btn-sm flex items-center justify-content"
          >
            Work in Progress
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
