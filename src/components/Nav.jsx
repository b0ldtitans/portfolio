import React, { useState } from "react";
import {
  BiHomeAlt,
  BiUser,
  BiChevronLeftCircle,
  BiChevronRightCircle,
} from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Nav = () => {
  const [expanded, setExpanded] = useState(false); // Initialize with expanded state

  const toggleNavbar = () => {
    setExpanded((prevExpanded) => !prevExpanded); // Toggle the expanded state
  };

  return (
    <motion.nav
      initial="hidden"
      animate="show"
      variants={fadeIn("right", 0.3)}
      className={`fixed bottom-2 lg:left-2 lg:bottom-8 w-full lg:w-[480px] lg:h-[60px] lg:w-[460px] rounded-full z-50 transition-all ${
        expanded
          ? "h-[60px] bg-black/20 backdrop-blur-2xl"
          : "h-[80px] bg-black/0"
      }`}
    >
      <div className="flex justify-between items-center h-full mx-5 text-2xl text-white/50">
        <button
          onClick={toggleNavbar}
          className="cursor-pointer w-[60px] h-[60px] lg:text-[40px] text-white hover:text-accent flex items-center justify-center"
        >
          {expanded ? <BiChevronLeftCircle /> : <BiChevronRightCircle />}
        </button>
        {expanded && (
          <>
            <Link
              to="home"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-200}
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            >
              <BiHomeAlt />
            </Link>
            <Link
              to="about"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            >
              <BiUser />
            </Link>
            <Link
              to="services"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            >
              <BsClipboardData />
            </Link>
            <Link
              to="work"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            >
              <BsBriefcase />
            </Link>
            <Link
              to="contact"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            >
              <BsChatSquare />
            </Link>
          </>
        )}
      </div>
    </motion.nav>
  );
};

export default Nav;
