import { useRef, useState } from "react";

import { motion } from "framer-motion";

import emailjs from "@emailjs/browser";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

import { portfolioData } from "../data/portfolioData";

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_i86b99o",
        "template_z0cj6k8",
        form.current,
        "sBUYRNKZxiTNeS1NX"
      )

      .then(
        () => {
          setLoading(false);

          setSuccess(true);

          form.current.reset();

          setTimeout(() => {
            setSuccess(false);
          }, 4000);
        },

        () => {
          setLoading(false);

          alert(
            "Something went wrong. Please try again."
          );
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-28 px-6 md:px-20 bg-[#0f172a]"
    >
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6">
            Let's Build Something{" "}
            <span className="text-purple-500">
              Amazing
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Have an opportunity,
            collaboration idea,
            or just want to connect?
            My inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14">

          {/* LEFT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            className="space-y-6"
          >

            {/* EMAIL */}
            <a
              href={`mailto:${portfolioData.email}`}
              className="flex items-center gap-5 bg-[#1f2937] p-6 rounded-2xl border border-gray-700 hover:border-purple-500 transition duration-300"
            >
              <FaEnvelope className="text-2xl text-purple-500" />

              <div>
                <h3 className="font-bold text-lg">
                  Primary Email
                </h3>

                <p className="text-gray-400">
                  {portfolioData.email}
                </p>
              </div>
            </a>

            {/* SECONDARY EMAIL */}
            <a
              href={`mailto:${portfolioData.secondaryEmail}`}
              className="flex items-center gap-5 bg-[#1f2937] p-6 rounded-2xl border border-gray-700 hover:border-purple-500 transition duration-300"
            >
              <FaEnvelope className="text-2xl text-purple-500" />

              <div>
                <h3 className="font-bold text-lg">
                  Secondary Email
                </h3>

                <p className="text-gray-400">
                  {
                    portfolioData.secondaryEmail
                  }
                </p>
              </div>
            </a>

            {/* PHONE */}
            <a
              href={`tel:${portfolioData.phone}`}
              className="flex items-center gap-5 bg-[#1f2937] p-6 rounded-2xl border border-gray-700 hover:border-green-500 transition duration-300"
            >
              <FaPhoneAlt className="text-2xl text-green-500" />

              <div>
                <h3 className="font-bold text-lg">
                  Phone
                </h3>

                <p className="text-gray-400">
                  {portfolioData.phone}
                </p>
              </div>
            </a>

            {/* SOCIALS */}
            <div className="flex gap-5 pt-4">

              <a
                href={
                  portfolioData.github
                }
                target="_blank"
                className="w-14 h-14 rounded-full bg-[#1f2937] flex items-center justify-center border border-gray-700 hover:border-purple-500 transition duration-300 text-2xl"
              >
                <FaGithub />
              </a>

              <a
                href={
                  portfolioData.linkedin
                }
                target="_blank"
                className="w-14 h-14 rounded-full bg-[#1f2937] flex items-center justify-center border border-gray-700 hover:border-blue-500 transition duration-300 text-2xl"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            className="bg-[#1f2937] p-10 rounded-3xl border border-gray-700 space-y-6"
          >

            {/* NAME */}
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-xl bg-[#111827] border border-gray-700 focus:border-purple-500 outline-none transition duration-300"
            />

            {/* EMAIL */}
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-xl bg-[#111827] border border-gray-700 focus:border-purple-500 outline-none transition duration-300"
            />

            {/* MESSAGE */}
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              className="w-full p-4 rounded-xl bg-[#111827] border border-gray-700 focus:border-purple-500 outline-none transition duration-300 resize-none"
            />

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-700 transition duration-300 font-semibold text-lg"
            >
              {loading
                ? "Sending..."
                : "Send Message 🚀"}
            </button>

            {/* SUCCESS */}
            {success && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="bg-green-500/20 border border-green-500 text-green-400 p-4 rounded-xl text-center"
              >
                Message sent successfully!
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;