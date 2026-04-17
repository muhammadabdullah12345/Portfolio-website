"use client";
import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaExternalLinkAlt,
  FaHeart,
  FaPlay,
  FaBrain,
  FaCode,
  FaRocket,
  FaChevronDown,
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
  SiPython,
  SiTensorflow,
  SiKeras,
  SiStreamlit,
  SiPinecone,
  SiHuggingface,
} from "react-icons/si";

// ─── DATA ────────────────────────────────────────────────────────────────────

const aiProjects = [
  {
    number: "01",
    title: "Hybrid Search RAG",
    tagline: "Document Q&A with dual-vector retrieval",
    description:
      "Combines dense (semantic) and sparse (BM25 keyword) embeddings stored in Pinecone. An alpha slider lets you tune the semantic-to-keyword ratio in real time. Answers are grounded strictly in retrieved chunks — no hallucinations from model memory.",
    tags: ["Python", "LangChain", "Pinecone", "Groq", "BM25", "Streamlit"],
    github: "#",
    demo: "#",
    video: "#",
    accent: "#00d4aa",
  },
  {
    number: "02",
    title: "AI Search Engine",
    tagline: "Agentic search across Wikipedia, Arxiv & the web",
    description:
      "LangChain agent powered by Groq (Qwen3-32B) that routes queries to Wikipedia, Arxiv, or DuckDuckGo based on context. A strict system prompt forces real-time tool use before every answer. Intermediate steps are fully visible in the UI.",
    tags: [
      "LangChain",
      "Groq",
      "Tools & Agents",
      "DuckDuckGo",
      "Arxiv",
      "Streamlit",
    ],
    github: "#",
    demo: "#",
    video: "#",
    accent: "#6c63ff",
  },
  {
    number: "03",
    title: "Next Word Prediction",
    tagline: "LSTM trained on Shakespeare's complete works",
    description:
      "Sequential model with Embedding → LSTM → Dense layers trained for 100 epochs on the Gutenberg Shakespeare corpus. 20% dropout prevents overfitting. Achieved 73% accuracy. Model saved in H5 format and served via Streamlit.",
    tags: ["TensorFlow", "Keras", "LSTM", "NLTK", "Streamlit"],
    github: "#",
    demo: "#",
    video: "#",
    accent: "#f59e0b",
  },
  {
    number: "04",
    title: "Movie Sentiment Analysis",
    tagline: "Simple RNN on 50K IMDB reviews — 86% accuracy",
    description:
      "Sequential model with Embedding + SimpleRNN trained on the IMDB dataset. Early stopping halted training at epoch 9. Probability threshold of 50% determines positive/negative sentiment. Deployed as a Streamlit app.",
    tags: ["TensorFlow", "Keras", "RNN", "NLP", "Streamlit"],
    github: "#",
    demo: "#",
    video: "#",
    accent: "#ef4444",
  },
  {
    number: "05",
    title: "Bank Churn Prediction",
    tagline: "ANN classifier with full preprocessing pipeline",
    description:
      "End-to-end pipeline: Label Encoding, One-Hot Encoding, StandardScaler, train-test split. ANN trained with Keras predicts employee churn probability. Threshold at 50% for binary output. Served through a clean Streamlit interface.",
    tags: ["TensorFlow", "Keras", "ANN", "Scikit-learn", "Streamlit"],
    github: "#",
    demo: "#",
    video: "#",
    accent: "#10b981",
  },
];

const webProjects = [
  {
    title: "Deewan Engineering Solutions",
    description:
      "Fully responsive construction services website for a Saudi client. Built with React, TypeScript, Tailwind CSS, and shadcn/ui.",
    github: "https://github.com/inlights2/des",
    live: "https://des-pi.vercel.app/",
    image: "/images/project1.jpg",
  },
  {
    title: "inLights Website",
    description:
      "Redesigned company website with improved UX, animations, and performance optimizations.",
    github: "https://github.com/muhammadabdullah12345/inlights-web2",
    live: "https://inlights-web2.vercel.app/",
    image: "/images/project2.png",
  },
  {
    title: "Shopper — E-Commerce",
    description:
      "React + Redux Toolkit e-commerce app with product filtering, cart management, and user authentication.",
    github:
      "https://github.com/muhammadabdullah12345/Shopper-The-Ecommerce-world",
    live: "https://shopper-the-ecommerce-world.vercel.app/",
    image: "/images/project3.png",
  },
  {
    title: "Legend Locations",
    description:
      "Location discovery platform with AI-powered image search, wishlists, and booking.",
    github: "https://github.com/inlights2/legend-locations",
    live: "https://legend-locations.vercel.app/",
    image: "/images/project4.jpg",
  },
];

const aiSkills = [
  { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
  { name: "TensorFlow", icon: <SiTensorflow className="text-[#FF6F00]" /> },
  { name: "Keras", icon: <SiKeras className="text-[#D00000]" /> },
  { name: "LangChain", icon: <FaBrain className="text-[#00d4aa]" /> },
  { name: "Streamlit", icon: <SiStreamlit className="text-[#FF4B4B]" /> },
  { name: "Groq API", icon: <FaRocket className="text-[#f59e0b]" /> },
  { name: "Hugging Face", icon: <SiHuggingface className="text-[#FFD21E]" /> },
];

const webSkills = [
  { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
  { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
  { name: "GitHub", icon: <SiGithub className="text-white" /> },
];

// ─── ANIMATION VARIANTS ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function Tag({ label, color }) {
  return (
    <span
      className="text-xs font-mono px-2 py-0.5 rounded border"
      style={{
        color: color || "#00d4aa",
        borderColor: (color || "#00d4aa") + "55",
        background: (color || "#00d4aa") + "11",
      }}
    >
      {label}
    </span>
  );
}

function AIProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group rounded-2xl border border-gray-700 bg-gray-900 overflow-hidden transition-all duration-300 hover:shadow-2xl"
      style={{
        boxShadow: hovered
          ? `0 0 0 1.5px ${project.accent}55, 0 20px 60px ${project.accent}18`
          : undefined,
      }}
    >
      {/* Top accent bar */}
      <div
        className="h-1 w-full"
        style={{
          background: `linear-gradient(90deg, ${project.accent}, ${project.accent}44)`,
        }}
      />

      <div className="p-7">
        {/* Number + title row */}
        <div className="flex items-start justify-between mb-3">
          <span
            className="font-mono text-4xl font-bold opacity-10 select-none"
            style={{ color: project.accent }}
          >
            {project.number}
          </span>
          <div className="flex gap-2 mt-1">
            {project.video && (
              <a
                href={project.video}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-gray-700 hover:border-current transition-colors text-gray-500 hover:text-current"
                title="Watch Demo"
              >
                <FaPlay size={11} style={{ color: project.accent }} />
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-gray-700 text-gray-500 transition-colors hover:text-white"
              title="GitHub"
            >
              <FaGithub size={13} />
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-gray-700 text-gray-500 transition-colors hover:text-white"
              title="Live Demo"
            >
              <FaExternalLinkAlt size={11} />
            </a>
          </div>
        </div>

        <h4 className="text-xl font-bold text-white mb-1">{project.title}</h4>
        <p
          className="text-sm font-medium mb-3"
          style={{ color: project.accent }}
        >
          {project.tagline}
        </p>
        <p className="text-gray-400 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <Tag key={t} label={t} color={project.accent} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function WebProjectCard({ project, index }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      className="group rounded-xl overflow-hidden border border-gray-700 bg-gray-900 shadow hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -4 }}
    >
      <div className="h-44 bg-gray-800 relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-center"
          sizes="(max-width:768px) 100vw,50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-5">
          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 p-2.5 rounded-full hover:bg-gray-100 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 p-2.5 rounded-full hover:bg-gray-100 transition-colors"
            >
              <FaExternalLinkAlt size={12} />
            </a>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h4 className="font-bold text-white mb-1.5">{project.title}</h4>
        <p className="text-sm text-gray-400">{project.description}</p>
      </div>
    </motion.div>
  );
}

function SkillBadge({ skill, index }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      whileHover={{ scale: 1.06 }}
      className="bg-gray-800 border border-gray-700 rounded-xl p-5 flex flex-col items-center gap-2.5 hover:border-gray-500 transition-all duration-300 shadow-sm hover:shadow-md"
    >
      <div className="text-3xl">{skill.icon}</div>
      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
    </motion.div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Force dark mode on mount
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  // Active nav tracking
  useEffect(() => {
    const sections = [
      "home",
      "ai-projects",
      "web-projects",
      "skills",
      "about",
      "contact",
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.3 },
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { label: "AI Projects", href: "#ai-projects" },
    { label: "Web Projects", href: "#web-projects" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <div className="bg-gray-950 text-white transition-colors duration-300 font-sans">
        <Head>
          <title>Muhammad Abdullah | AI Engineer</title>
          <meta
            name="description"
            content="AI/ML Engineer building intelligent systems with LangChain, TensorFlow, and LLMs. Background in full-stack development."
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap"
            rel="stylesheet"
          />
        </Head>

        {/* ── NAVBAR ── */}
        <nav className="bg-gray-950/80 backdrop-blur-md shadow-sm fixed top-0 w-full z-50 border-b border-gray-800 transition-all duration-300">
          <div className="max-w-6xl mx-auto px-5 py-3.5 flex justify-between items-center">
            <a href="#home" className="font-mono text-lg font-bold text-white">
              abdullah<span className="text-[#00d4aa]">.ai</span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-7">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </div>

            {/* Mobile */}
            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300"
              >
                <svg
                  className="h-5 w-5"
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

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-gray-950 border-t border-gray-800"
              >
                <div className="px-5 py-4 space-y-3">
                  {navLinks.map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-sm font-medium text-gray-300 hover:text-[#00d4aa]"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* ── HERO ── */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center bg-gray-950 px-5 pt-24 pb-16 relative overflow-hidden"
        >
          {/* Subtle grid background */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* Glow blobs */}
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
            style={{
              background: "radial-gradient(circle, #00d4aa, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-8 pointer-events-none"
            style={{
              background: "radial-gradient(circle, #6c63ff, transparent 70%)",
            }}
          />

          <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            {/* Left */}
            <motion.div
              className="md:w-1/2 text-center md:text-left"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 border border-[#00d4aa]/30 bg-[#00d4aa]/5 text-[#00d4aa] px-4 py-1.5 rounded-full text-xs font-mono font-semibold mb-6 tracking-wide"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#00d4aa] animate-pulse" />
                AI Engineer · Open to Work
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight text-white">
                Hi, I&apos;m{" "}
                <span className="relative">
                  <span
                    className="text-transparent bg-clip-text"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, #00d4aa, #6c63ff)",
                    }}
                  >
                    Abdullah
                  </span>
                </span>
              </h1>

              <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
                Building intelligent systems with{" "}
                <span className="text-white font-semibold">
                  LangChain, TensorFlow,
                </span>{" "}
                and large language models. Former full-stack developer — now
                focused on{" "}
                <span className="text-white font-semibold">
                  AI engineering.
                </span>
              </p>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
                <a
                  href="#ai-projects"
                  className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90 hover:shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #00d4aa, #6c63ff)",
                  }}
                >
                  View AI Projects
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="px-6 py-2.5 rounded-lg text-sm font-semibold border border-gray-700 text-gray-300 hover:border-[#00d4aa] hover:text-[#00d4aa] transition-all"
                >
                  Download CV
                </a>
              </div>

              <div className="flex gap-4 justify-center md:justify-start">
                {[
                  {
                    href: "https://github.com/muhammadabdullah12345",
                    icon: <FaGithub />,
                  },
                  {
                    href: "https://www.linkedin.com/in/i-abdullah-chaudhary/",
                    icon: <FaLinkedin />,
                  },
                  { href: "mailto:abd0172817@gmail.com", icon: <FaEnvelope /> },
                ].map(({ href, icon }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg border border-gray-800 text-gray-400 hover:text-[#00d4aa] hover:border-[#00d4aa]/40 transition-all text-lg"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right — Photo */}
            <motion.div
              className="md:w-2/5 flex justify-center"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-2xl blur-2xl opacity-30"
                  style={{
                    background: "linear-gradient(135deg, #00d4aa, #6c63ff)",
                    transform: "scale(1.1)",
                  }}
                />
                <div className="w-60 h-60 md:w-72 md:h-72 rounded-2xl overflow-hidden border-2 border-white/20 relative z-10 shadow-2xl">
                  <Image
                    src="/images/myself.jpg"
                    alt="Muhammad Abdullah"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 flex flex-col items-center gap-1"
          >
            <span className="text-xs font-mono">scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FaChevronDown size={12} />
            </motion.div>
          </motion.div>
        </section>

        {/* ── AI PROJECTS ── */}
        <section id="ai-projects" className="py-24 px-5 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="mb-14"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="font-mono text-xs font-semibold text-[#00d4aa] uppercase tracking-widest">
                Featured Work
              </span>
              <h2 className="text-4xl font-bold mt-2 mb-3 text-white">
                AI Projects
              </h2>
              <p className="text-gray-400 max-w-xl text-sm leading-relaxed">
                Built during my AI/ML learning journey — each project shipped
                with a live demo, GitHub repo, and walkthrough video.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {aiProjects.map((p, i) => (
                <AIProjectCard key={p.number} project={p} index={i} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── WEB PROJECTS ── */}
        <section id="web-projects" className="py-24 px-5 bg-gray-950">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="mb-14"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="font-mono text-xs font-semibold text-[#6c63ff] uppercase tracking-widest">
                Previous Work
              </span>
              <h2 className="text-4xl font-bold mt-2 mb-3 text-white">
                Web Development
              </h2>
              <p className="text-gray-400 max-w-xl text-sm leading-relaxed">
                Projects from my full-stack development phase — real client work
                and personal builds.
              </p>
            </motion.div>

            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {webProjects.map((p, i) => (
                <WebProjectCard key={p.title} project={p} index={i} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section id="skills" className="py-24 px-5 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="mb-14"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="font-mono text-xs font-semibold text-[#f59e0b] uppercase tracking-widest">
                Tech Stack
              </span>
              <h2 className="text-4xl font-bold mt-2 text-white">
                Skills & Tools
              </h2>
            </motion.div>

            {/* AI Skills */}
            <motion.div
              className="mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-mono font-semibold text-[#00d4aa] uppercase tracking-widest">
                  AI / ML
                </span>
                <div className="flex-1 h-px bg-gray-800" />
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-4">
                {aiSkills.map((s, i) => (
                  <SkillBadge key={s.name} skill={s} index={i} />
                ))}
              </div>
            </motion.div>

            {/* Web Skills */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-mono font-semibold text-[#6c63ff] uppercase tracking-widest">
                  Web Dev
                </span>
                <div className="flex-1 h-px bg-gray-800" />
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-4">
                {webSkills.map((s, i) => (
                  <SkillBadge key={s.name} skill={s} index={i} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="py-24 px-5 bg-gray-950">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="mb-14"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="font-mono text-xs font-semibold text-[#10b981] uppercase tracking-widest">
                Background
              </span>
              <h2 className="text-4xl font-bold mt-2 text-white">About Me</h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-14 items-center">
              {/* Left — bio */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
                className="space-y-5 text-gray-400 text-[15px] leading-relaxed"
              >
                <motion.p variants={fadeUp}>
                  I&apos;m{" "}
                  <span className="text-white font-semibold">
                    Muhammad Abdullah
                  </span>
                  , an AI/ML Engineer from Pakistan currently building
                  intelligent systems with LangChain, TensorFlow, and large
                  language models.
                </motion.p>
                <motion.p variants={fadeUp}>
                  My journey started in full-stack development — I shipped real
                  client projects using React and Next.js. That engineering
                  foundation has made the transition into AI much smoother: I
                  understand how to build production systems, not just
                  notebooks.
                </motion.p>
                <motion.p variants={fadeUp}>
                  Over the past several months I have built five AI projects
                  covering neural networks, NLP, RAG, and agentic systems — each
                  deployed with a live demo and public GitHub repo. I post every
                  project on LinkedIn as I build, documenting the process
                  publicly.
                </motion.p>
                <motion.p variants={fadeUp}>
                  I&apos;m actively seeking my{" "}
                  <span className="text-white font-semibold">
                    first full-time AI Engineer role.
                  </span>{" "}
                  If you are working on something interesting in AI, I would
                  genuinely love to connect.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  className="pt-2 flex flex-wrap gap-3"
                >
                  <a
                    href="#contact"
                    className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
                    style={{
                      background: "linear-gradient(135deg, #00d4aa, #6c63ff)",
                    }}
                  >
                    Get in Touch
                  </a>
                  <a
                    href="/resume.pdf"
                    download
                    className="px-5 py-2.5 rounded-lg text-sm font-semibold border border-gray-700 text-gray-300 hover:border-[#00d4aa] hover:text-[#00d4aa] transition-all"
                  >
                    Download CV
                  </a>
                </motion.div>
              </motion.div>

              {/* Right — stat cards */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  {
                    label: "AI Projects Shipped",
                    value: "5",
                    accent: "#00d4aa",
                  },
                  {
                    label: "Web Projects Delivered",
                    value: "4+",
                    accent: "#6c63ff",
                  },
                  {
                    label: "Best Model Accuracy",
                    value: "86%",
                    accent: "#f59e0b",
                  },
                  { label: "Months in AI/ML", value: "6+", accent: "#10b981" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    custom={i}
                    variants={fadeUp}
                    className="rounded-2xl border border-gray-800 bg-gray-900 p-6 text-center"
                  >
                    <div
                      className="text-4xl font-bold mb-1"
                      style={{ color: stat.accent }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="py-24 px-5 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="mb-14"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="font-mono text-xs font-semibold text-[#ef4444] uppercase tracking-widest">
                Let&apos;s Talk
              </span>
              <h2 className="text-4xl font-bold mt-2 text-white">Contact</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Form */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-gray-950 rounded-2xl border border-gray-800 p-8 shadow-sm"
              >
                <h3 className="text-xl font-bold mb-6 text-white">
                  Send a Message
                </h3>
                <form
                  className="space-y-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  {[
                    {
                      id: "name",
                      label: "Name",
                      type: "text",
                      placeholder: "Your name",
                    },
                    {
                      id: "email",
                      label: "Email",
                      type: "email",
                      placeholder: "your@email.com",
                    },
                  ].map(({ id, label, type, placeholder }) => (
                    <div key={id}>
                      <label
                        htmlFor={id}
                        className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wide"
                      >
                        {label}
                      </label>
                      <input
                        type={type}
                        id={id}
                        placeholder={placeholder}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-700 bg-gray-900 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00d4aa]/40 focus:border-[#00d4aa] transition-all placeholder-gray-600"
                      />
                    </div>
                  ))}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wide"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Hello, I'd like to talk about..."
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-700 bg-gray-900 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00d4aa]/40 focus:border-[#00d4aa] transition-all resize-none placeholder-gray-600"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90 hover:shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, #00d4aa, #6c63ff)",
                    }}
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>

              {/* Contact info */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
                className="space-y-5 pt-4"
              >
                <motion.p
                  variants={fadeUp}
                  className="text-gray-400 text-sm leading-relaxed"
                >
                  I am actively looking for my first AI Engineer role. Whether
                  you have an opportunity, a collaboration idea, or just want to
                  talk about AI — my inbox is open.
                </motion.p>

                {[
                  {
                    icon: <FaEnvelope />,
                    label: "Email",
                    value: "abd0172817@gmail.com",
                    href: "mailto:abd0172817@gmail.com",
                    color: "#ef4444",
                  },
                  {
                    icon: <FaLinkedin />,
                    label: "LinkedIn",
                    value: "Muhammad Abdullah",
                    href: "https://www.linkedin.com/in/i-abdullah-chaudhary/",
                    color: "#6c63ff",
                  },
                  {
                    icon: <FaGithub />,
                    label: "GitHub",
                    value: "muhammadabdullah12345",
                    href: "https://github.com/muhammadabdullah12345",
                    color: "#00d4aa",
                  },
                ].map(({ icon, label, value, href, color }, i) => (
                  <motion.a
                    key={label}
                    custom={i}
                    variants={fadeUp}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-gray-800 bg-gray-950 hover:border-gray-700 transition-all group shadow-sm"
                  >
                    <div
                      className="p-2.5 rounded-lg text-sm"
                      style={{ color, background: color + "15" }}
                    >
                      {icon}
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-medium">
                        {label}
                      </div>
                      <div className="text-sm font-semibold text-gray-200 group-hover:text-[#00d4aa] transition-colors">
                        {value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="bg-gray-950 border-t border-gray-800 py-8 px-5">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
            <span className="font-mono">
              © {new Date().getFullYear()} Muhammad Abdullah
            </span>
            <span className="flex items-center gap-1">
              Built with <FaHeart className="text-[#ef4444] mx-0.5" size={10} />{" "}
              using Next.js & Tailwind CSS
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}
