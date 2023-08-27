import React from "react";
import Image from "../assets/avatar.png";
import { FaGithub, FaLinkedin, FaDribbble } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      id="home"
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* {Text} */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] mb-3 font-bold leading-[0.8] lg:text-[110px]"
            >
              THAREQ<span> AZANI</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[29px] lg:text-[57px] font-secondary
    font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-2">I am</span>
              <TypeAnimation
                sequence={[
                  "a Front-end Developer",
                  2000,
                  "a Back-end Developer",
                  2000,
                  "a Chef",
                  2000,
                  "a Mobile Developer",
                  2000,
                  "a Software Engineer",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              A dedicated web developer passionate about crafting seamless
              digital experiences. With expertise in front-end and back-end
              technologies, I specialize in turning ideas into captivating
              websites that captivate and engage users. Let's collaborate to
              bring your visions to life and create impactful online solutions
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <Link
                to="contact"
                activeClass="active"
                smooth={true}
                spy={true}
                className="btn btn-sm cursor-pointer flex items-center justify-content"
              >
                Contact me
              </Link>
              <Link
                to="work"
                activeClass="active"
                smooth={true}
                spy={true}
                href="#"
                className="text-gradient btn-link"
              >
                My Portfolio
              </Link>
            </motion.div>
            {/* {Social} */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto
      lg:mx-0"
            >
              <a
                className="hover:text-blue-500"
                href="https://linkedin.com/in/thareqazani"
                target="_empty"
              >
                <FaLinkedin />
              </a>
              <a
                className="hover:text-black"
                href="https://github.com/b0ldtitans"
                target="_empty"
              >
                <FaGithub />
              </a>
              <a
                className="hover:text-pink-600"
                href="https://dribbble.com/thareqazani"
                target="_empty"
              >
                <FaDribbble />
              </a>
            </motion.div>
          </div>
          {/* {image} */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
