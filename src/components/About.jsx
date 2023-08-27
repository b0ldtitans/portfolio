import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-row gap-y-10 lg:flex-row lg:items-center lg-gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          >
            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1"
            >
              <h2 className="h2 text-accent">Hey there, I'm Thareq Azani!</h2>
              <h3 className="h3 mb-4">
                Your Go-To Freelance Front-end Developer
              </h3>
              <p className="mb-6">
                A dash of culinary creativity, a sprinkle of hospitality
                finesse, and a tech-savvy twist – that's me in a nutshell. With
                a culinary arts degree and a background in hotel administration
                from the prestigious Bandung Institute of Tourism, I've blended
                my passion for IT with my knack for innovation. <br />
                <br />
                Right now, I'm adding digital prowess to my skillset at
                Purwadhika Digital Technology School. My secret sauce?
                Navigating fast-paced terrains like a pro, and adapting on the
                fly. <br />
                <br />
                I'm not just about pixels and code – I'm here to stir up
                success. Whether it's crafting delightful user experiences or
                dishing out dynamic web solutions, I'm your guy. Let's whip up
                something amazing together. Connect with me at
                thareqazani@gmail.com and let's add a pinch of innovation to the
                digital world.
              </p>

              <div className="flex gap-x-6 lg:gap-x-10 mb-12">
                {/* <div>
                  <div className="text-[40px] font-tertiary text-gradient mb-2">
                    {inView ? (
                      <CountUp start={0} end={13} duration={5} />
                    ) : null}
                  </div>
                  <div className="font-primary text-sm tracking-[2px]">
                    Years of <br />
                    Experience
                  </div>
                </div> */}
                {/* <div>
                  <div className="text-[40px] font-tertiary text-gradient mb-2">
                    {inView ? (
                      <CountUp start={0} end={15} duration={5} />
                    ) : null}
                    k+
                  </div>
                  <div className="font-primary text-sm tracking-[2px]">
                    Projects <br />
                    Completed
                  </div>
                </div> */}
                {/* <div>
                  <div className="text-[40px] font-tertiary text-gradient mb-2">
                    {inView ? (
                      <CountUp start={0} end={12} duration={5} />
                    ) : null}{" "}
                    k+
                  </div>
                  <div className="font-primary text-sm tracking-[2px]">
                    Satisfied <br />
                    Clients
                  </div>
                </div> */}
              </div>
            </motion.div>
            <div className="lg:flex justify-center hidden ">
              <table className="border border-gray-400 w-3/4">
                <thead>
                  <tr className=" border-b">
                    <th className="py-2 px-4 align-middle text-center">
                      Participated Projects
                    </th>
                    <th className="py-2 px-4 border-l align-middle text-center">
                      My Education
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 align-middle text-center">TBA</td>
                    <td className="py-2 px-4 border-l align-middle text-center text-2xl">
                      Sekolah Tinggi Pariwisata NHI Bandung
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 align-middle text-center"></td>
                    <td className="py-2 px-4 border-l align-middle text-center">
                      <sup>
                        Associates's Degree in Food Production Management
                      </sup>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 align-middle text-center"></td>
                    <td className="py-2 px-4 border-l align-middle text-center text-2xl">
                      Politeknik Pariwisata NHI Bandung
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 align-middle text-center"></td>
                    <td className="py-2 px-4 border-l align-middle text-center">
                      <sup>
                        Applied Bachelor's Degree in Hospitality Management
                      </sup>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 align-middle text-center"></td>
                    <td className="py-2 px-4 border-l align-middle text-center text-2xl">
                      Purwadhika Digital Technology School
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 align-middle text-center"></td>
                    <td className="py-2 px-4 border-l align-middle text-center">
                      <sup>Job Connector Web Development</sup>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
