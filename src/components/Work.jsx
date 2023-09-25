import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import porto1 from "../assets/portfolio-img1.png";
import porto2 from "../assets/portfolio-img2.png";
import porto3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-light text-accent">
                My Latest <br />
                Work.
              </h2>
              <p className="max-w-sm mb-16">
                Crafting digital experiences that captivate and innovate. From
                sleek interfaces to seamless interactions, my latest projects
                showcase the perfect blend of form and function. Dive in and
                explore the intersection of creativity and technology.
              </p>
            </div>
            {/* image */}
            <a
              href="https://bit.ly/TheTicketRegistry"
              className="cursor-pointer"
            >
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                {/* overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* img */}
                <img
                  className="group-hover:scale-125 transition-all duration-500 cursor-pointer"
                  src={porto1}
                  alt=""
                />

                {/* pretitle */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">React Project</span>
                </div>
                {/* title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white ">
                    The Ticket Registry
                  </span>
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={porto2}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white ">Project Title</span>
              </div>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={porto3}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white ">Project Title</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
