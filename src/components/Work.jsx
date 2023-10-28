import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import porto1 from "../assets/portfolio-img1.png";
import fmpos2 from "../assets/fmpos2.png";
import medium from "../assets/medium.png";

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
                explore the intersection of creativity and technology. I also
                write for fun. Check out my Medium articles below! Although I'm
                a lazy writer.
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
            <a href="https://github.com/b0ldtitans/FamilyMart-POSWebApp">
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                {/* overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* img */}
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={fmpos2}
                  alt=""
                />
                {/* pretitle */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">
                    Fullstack Web Development
                  </span>
                </div>
                {/* title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white ">
                    FamilyMart POS Web App
                    <p className="text-xs">
                      UI/UX design by Michelle Grace (Purwadhika JCUX-1504)
                    </p>
                  </span>{" "}
                </div>
              </div>
            </a>

            <a href="https://medium.com/@thareqazani">
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>

                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={medium}
                  alt=""
                />

                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white ">Medium Articles</span>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
