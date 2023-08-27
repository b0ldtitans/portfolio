import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Front-End Development",
    description:
      "Crafting stunning and interactive user interfaces that bring your ideas to life. From eye-catching designs to seamless user experiences, we make the web a better place, one pixel at a time.",
  },
  {
    name: "Back-End Development",
    description:
      "Behind the scenes, we build the engine that powers your digital dreams. Seamlessly connecting databases, handling complex logic, and ensuring everything runs smoothly behind the curtain.",
  },
  {
    name: "Mobile App Development",
    description:
      "In a world where apps rule, we're your app's best friend. From brainstorming the next big feature to fine-tuning the tiniest detail, we create apps that fit right into people's pockets and lives.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services bg-cover lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-40"
          >
            <div className="">
              <h2 className="h2 text-accent mb-6">What I Do</h2>
              <h3 className="h3 max-w-[455px] mb-16">
                Aspiring to craft compelling digital experiences, I'm taking my
                first steps into the world of front-end development with a
                passion for learning and creativity.
              </h3>
            </div>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* Services List */}
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6 ">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
