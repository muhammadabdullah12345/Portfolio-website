"use client";
import Head from "next/head";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMoon,
  FaSun,
  FaExternalLinkAlt,
  FaHeart,
  FaUserAlt,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiGithub,
} from "react-icons/si";
import Image from "next/image";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Check system preference on initial load
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(prefersDark);

    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Head>
        <title>Muhammad Abdullah | Frontend Developer</title>
        <meta
          name="description"
          content="Portfolio of Muhammad Abdullah, Frontend Web Developer specializing in React and Next.js"
        />
      </Head>

      {/* Navbar */}
      <nav className="bg-white dark:bg-gray-800 shadow-md fixed top-0 w-full z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Abdullah.dev
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "Projects", "Skills", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                className="text-gray-700 dark:text-gray-200 hover:text-pink-600 dark:hover:text-pink-400 font-medium transition-colors duration-300"
              >
                {item}
              </a>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 mr-4 rounded-full bg-gray-100 dark:bg-gray-700"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-gray-700" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-200 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-800 shadow-lg"
          >
            <div className="px-4 py-4 space-y-4">
              {["Home", "Projects", "Skills", "About", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                    className="block text-gray-700 dark:text-gray-200 hover:text-pink-600 dark:hover:text-pink-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-800 px-4 pt-28"
        id="home"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="text-center md:text-left md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 px-4 py-1 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Frontend Developer
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                Muhammad Abdullah
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              Frontend Web Developer specializing in creating stunning,
              responsive websites with React, Next.js, and Tailwind CSS.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="bg-transparent border-2 border-pink-600 dark:border-pink-400 text-pink-600 dark:text-pink-400 px-8 py-3 rounded-full hover:bg-pink-600/10 transition-colors"
              >
                Contact Me
              </a>
            </div>
            <motion.div
              className="flex gap-5 mt-10 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <a
                href="https://github.com/muhammadabdullah12345"
                className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 text-xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-abdullah-9279b3250/"
                className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 text-xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:abd0172817@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 text-xl"
              >
                <FaEnvelope />
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full absolute blur-2xl opacity-20"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 bg-white dark:bg-gray-800 rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-gray-700 relative z-10">
                {/* Improved image container with better positioning */}
                <div className="w-full h-full relative">
                  <Image
                    src="/images/pf1.jpg"
                    alt="Muhammad Abdullah"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center 35%" // Adjusted to move image up within frame
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-4 bg-white dark:bg-gray-800" id="projects">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-pink-600 dark:text-pink-400 uppercase tracking-wider">
              My Work
            </span>
            <h3 className="text-4xl font-bold mt-2 mb-4">Featured Projects</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto"></div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "inLights Website 1",
                description:
                  "First version of inLights company website developed during internship. Built with React, Next.js and Tailwind CSS focusing on modern UI principles.",
                github: "https://github.com/muhammadabdullah12345/InLights-web",
                live: "https://in-lights-web.vercel.app/",
                image: "/images/project1.png",
              },
              {
                title: "inLights Website 2",
                description:
                  "Updated and redesigned version of the inLights company website with improved user experience, animations, and performance optimizations.",
                github:
                  "https://github.com/muhammadabdullah12345/inlights-web2",
                live: "https://inlights-web2.vercel.app/",
                image: "/images/project2.png",
              },
              {
                title: "Shopper",
                description:
                  "An eCommerce site built with React and Redux Toolkit. Features include product filtering, cart management, user authentication, and responsive design.",
                github:
                  "https://github.com/muhammadabdullah12345/Shopper-The-Ecommerce-world",
                live: "https://shopper-the-ecommerce-world.vercel.app/",
                image: "/images/project3.png",
              },
              {
                title: "Fast React Pizza Co.",
                description:
                  "Pizza ordering app made while learning advanced React concepts. Includes features like real-time order tracking, cart management, and address geocoding.",
                github:
                  "https://github.com/muhammadabdullah12345/Fast-React-Pizza",
                live: "https://fast-react-pizza-ten-kohl.vercel.app/",
                image: "/images/project4.png",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                className="group rounded-xl overflow-hidden border dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="h-56 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index < 2}
                  />

                  {/* Overlay with links */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-gray-900 p-3 rounded-full hover:bg-pink-600 hover:text-white transition-colors"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-gray-900 p-3 rounded-full hover:bg-pink-600 hover:text-white transition-colors"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4">
                      <Link
                        href={project.github}
                        className="text-pink-600 dark:text-pink-400 hover:underline flex items-center gap-1 text-sm"
                        target="_blank"
                      >
                        <FaGithub /> GitHub
                      </Link>
                      <Link
                        href={project.live}
                        className="text-pink-600 dark:text-pink-400 hover:underline flex items-center gap-1 text-sm"
                        target="_blank"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        className="py-24 px-4 bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-800"
        id="skills"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-pink-600 dark:text-pink-400 uppercase tracking-wider">
              My Expertise
            </span>
            <h3 className="text-4xl font-bold mt-2 mb-4">
              Skills & Technologies
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: <SiHtml5 className="text-[#E34F26]" />, name: "HTML" },
              { icon: <SiCss3 className="text-[#1572B6]" />, name: "CSS" },
              {
                icon: <SiJavascript className="text-[#F7DF1E]" />,
                name: "JavaScript",
              },
              { icon: <SiReact className="text-[#61DAFB]" />, name: "React" },
              {
                icon: <SiNextdotjs className="text-black dark:text-white" />,
                name: "Next.js",
              },
              {
                icon: <SiTailwindcss className="text-[#06B6D4]" />,
                name: "Tailwind CSS",
              },
              {
                icon: <SiRedux className="text-[#764ABC]" />,
                name: "Redux Toolkit",
              },
              {
                icon: <SiGithub className="text-black dark:text-white" />,
                name: "GitHub",
              },
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center group hover:border-pink-400 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        className="py-24 px-6 bg-gradient-to-br from-gray-900 to-gray-800"
        id="about"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-pink-500 uppercase tracking-wider">
              Get To Know Me
            </span>
            <h3 className="text-4xl font-bold mt-2 mb-4 text-white">
              About Me
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Profile Card */}
            <motion.div
              className="lg:w-2/5"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative group">
                {/* Animated glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

                {/* Card content */}
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 relative z-10 border border-gray-700 shadow-2xl">
                  <div className="text-8xl text-pink-500 font-bold mb-6 text-center">
                    MA
                  </div>
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-pink-500 to-transparent my-6"></div>
                  <p className="italic text-gray-300 text-center text-lg">
                    "Creating beautiful web experiences one line of code at a
                    time."
                  </p>

                  {/* Skills badges */}
                  <div className="flex flex-wrap justify-center gap-2 mt-8">
                    {["React", "Next.js", "Tailwind CSS", "UI/UX"].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gray-700/50 border border-gray-600 rounded-full text-sm text-gray-300"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Bio */}
            <motion.div
              className="lg:w-3/5"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-6 text-gray-300">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-pink-500/20 rounded-lg text-pink-500">
                    <FaUserAlt size={18} />
                  </div>
                  <p className="text-lg">
                    I'm Muhammad Abdullah, a passionate frontend web developer
                    with a keen eye for creating interactive and visually
                    appealing web experiences.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-pink-500/20 rounded-lg text-pink-500">
                    <FaCode size={18} />
                  </div>
                  <p>
                    My journey in web development has allowed me to build
                    multiple projects using React, Next.js, and Tailwind CSS. I
                    take pride in crafting responsive, user-friendly interfaces
                    that deliver exceptional user experiences.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-pink-500/20 rounded-lg text-pink-500">
                    <FaLaptopCode size={18} />
                  </div>
                  <p>
                    Currently, I'm enhancing my skills during an internship
                    where I've developed company websites from scratch, turning
                    design concepts into fully functional web applications.
                  </p>
                </div>

                <div className="pt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-lg transition-transform hover:scale-105"
                  >
                    Let's work together
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="py-12 px-4 bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-800"
        id="contact"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-pink-600 dark:text-pink-400 uppercase tracking-wider">
              Get In Touch
            </span>
            <h3 className="text-4xl font-bold mt-2 mb-4">Contact Me</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700"
            >
              <h4 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Send Me a Message
              </h4>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Hello, I'd like to talk about..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:opacity-90 transition-all shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h4 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Contact Information
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Feel free to reach out to me through any of these platforms.
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-pink-100 dark:bg-pink-900/30 p-3 rounded-full text-pink-600 dark:text-pink-400">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h5 className="text-sm text-gray-500 dark:text-gray-400">
                      Email
                    </h5>
                    <a
                      href="mailto:abd0172817@gmail.com"
                      className="text-gray-900 dark:text-white hover:text-pink-600 dark:hover:text-pink-400"
                    >
                      abd0172817@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-pink-100 dark:bg-pink-900/30 p-3 rounded-full text-pink-600 dark:text-pink-400">
                    <FaLinkedin />
                  </div>
                  <div>
                    <h5 className="text-sm text-gray-500 dark:text-gray-400">
                      LinkedIn
                    </h5>
                    <a
                      href="https://www.linkedin.com/in/muhammad-abdullah-9279b3250/"
                      className="text-gray-900 dark:text-white hover:text-pink-600 dark:hover:text-pink-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Muhammad Abdullah
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-pink-100 dark:bg-pink-900/30 p-3 rounded-full text-pink-600 dark:text-pink-400">
                    <FaGithub />
                  </div>
                  <div>
                    <h5 className="text-sm text-gray-500 dark:text-gray-400">
                      GitHub
                    </h5>
                    <a
                      href="https://github.com/muhammadabdullah12345"
                      className="text-gray-900 dark:text-white hover:text-pink-600 dark:hover:text-pink-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      muhammadabdullah12345
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-6">
          {/* Top Section with Logo and Links */}

          {/* Divider */}
          <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col items-center">
            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
              <p>
                &copy; {new Date().getFullYear()} Muhammad Abdullah. All rights
                reserved.
              </p>
            </div>
            <div className="flex items-center mt-3 text-gray-500 dark:text-gray-500 text-sm">
              <span>Crafted with</span>
              <FaHeart className="mx-1 text-pink-500" size={12} />
              <span>using React, Next.js & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
