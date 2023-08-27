import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isSuccessNotificationVisible, setIsSuccessNotificationVisible] =
    useState(false);
  const [isFailedNotificationVisible, setIsFailedNotificationVisible] =
    useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e80yj48",
        "template_nt8e4nd",
        form.current,
        "TDTYg33qn0VYAyzZQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSuccessNotificationVisible(true);
          form.current.reset();
          setTimeout(() => {
            setIsSuccessNotificationVisible(false);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
          setIsFailedNotificationVisible(true);
        }
      );
  };

  return (
    <section id="contact" className="py-16 lg:section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 justify-center items-center"
          >
            <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
              Get in Touch
            </h4>
            <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
              Let's work <br /> Together!
            </h2>
            <p>
              I'm open and ready for freelance collaborations! Whether you're
              dreaming of a stunning web design, have a top-notch web
              development ideas on your mind, I'm all ears. And don't worry, the
              coffee is on me!
            </p>
          </motion.div>
          {/* form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start ml-12"
          >
            <input
              name="user_name"
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="Your Name"
              required
            />
            <input
              name="user_email"
              type="email"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              className="bg-transparent border-b py-12 
            outline-none w-full placeholder:text-white 
            focus:border-accent transition-all resize-none mb-12"
              placeholder="Your Message"
              required
            ></textarea>
            <input
              type="submit"
              className="btn btn-lg cursor-pointer"
              value="Submit"
            />
          </form>
        </div>
      </div>
      {isSuccessNotificationVisible && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-purple-900/10 rounded-2xl text-center py-4 lg:px-4 fixed bottom-0 left-0 right-0"
        >
          <div
            className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
            role="alert"
          >
            <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
              Yay!
            </span>
            <span className="font-semibold mr-2 text-left flex-auto">
              Email sent successfully!
            </span>
            <span
              className="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer"
              onClick={() => setIsSuccessNotificationVisible(false)}
            >
              <svg
                className="fill-current h-6 w-6 text-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
              </svg>
            </span>
          </div>
        </motion.div>
      )}
      {isFailedNotificationVisible && (
        <div
          class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong class="font-bold">Oh No!</strong>
          <span class="block sm:inline">Your Messagge Didn't Get Sent!</span>
          <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
            <span
              className="absolute top-0 bottom-0 right-0 px-4 py-3"
              onClick={() => setIsSuccessNotificationVisible(false)}
            >
              <svg
                className="fill-current h-6 w-6 text-indigo-500 cursor-pointer"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
              </svg>
            </span>
          </span>
        </div>
      )}
    </section>
  );
};

export default Contact;
