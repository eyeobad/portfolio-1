// src/pages/Projects/Projects.jsx
import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

// Local images
import Bakery from "/bakery.jpg";
import BlackCafe from "/black cafe.jpg";
import Ccoed from "/ccoed.jpg";
import SeUn from "/Se_un.jpg";
import Aurora from "/aurora-pay.png";
import Nex from "/nex.jpg";
import Travelbeta from "/travelbeta.jpg";
import Moviebox from "/movie box.png";
import Veescraper from "/veescraper.jpg";
import Website from "/website.jpg";

// ✅ More projects (keep link = image like your original)
const projects = [
  {
    title: "A Full Functional Shopping Store",
    description:
      "A Full Functional Shopping Store built with Html 5, Django, Bootsrap, Aos and Javascript..",
    src: SeUn,
    link: SeUn,
    color: "#8f89ff",
    githubLink: "https://github.com/eyeobad/",
    liveLink: "https://eyeobad.pythonanywhere.com/home",
  },
  {
    title: "Aurora Pay",
    description: "Fintech wallet app (Aurora Pay).",
    src: Aurora,
    link: Aurora,
    color: "#60a5fa",
    githubLink: "https://github.com/eyeobad/aurora-pay.git",
    liveLink: null,
  },
  {
    title: "VeeScraper",
    description: "A Django-based scraper that powered by AI which can convert the scraped page to a react component and also a tailwind styling (VeeScraper).",
    src: Veescraper,
    link: Veescraper,
    color: "#f472b6",
    githubLink: "https://github.com/eyeobad/VeeScraper-Django.git",
    liveLink: null,
  },
  {
    title: "Travelbeta",
    description: "A full working travel beta clone with amadeus api for flight,hotel,vacation and car bookings",
    src: Travelbeta,
    link: Travelbeta,
    color: "#22d3ee",
    githubLink: "https://github.com/eyeobad/travelbeta.git",
    liveLink: 'travelbeta-iota.vercel.app',
  },
  {
    title: "Website Analyzer",
    description: "Email/website analysis for marketing leads power by ai to scrape analysis the website and offer solutions.",
    src: Website,
    link: Website,
    color: "#a78bfa",
    githubLink: "https://github.com/eyeobad/email-analysis.git",
    liveLink: 'https://email-analysis.vercel.app/',
  },
  {
    title: "Nex",
    description: "a marketing agency landing page.",
    src: Nex,
    link: Nex,
    color: "#34d399",
    githubLink: "https://github.com/eyeobad/nex.git",
    liveLink: "https://nexdigitals.agency/",
  },
  {
    title: "🚀 Black Cafe",
    description: "A sleek Coffee Shop Landing Page built with React, Gsap and Tailwind CSS.",
    src: BlackCafe,
    link: BlackCafe,
    color: "#ffffff",
    githubLink: "https://github.com/eyeobad/coffee",
    liveLink: "https://coffee-pi-navy.vercel.app",
  },
  {
    title: "Bakery Landing Page",
    description: "A sleek Bakery Landing Page built with React, Aos and Tailwind CSS.",
    src: Bakery,
    link: Bakery,
    color: "#5196fd",
    githubLink: "https://github.com/eyeobad/",
    liveLink: "https://sweet-treats-landingpage.netlify.app/",
  },
  // {
  //   title: "Ccord",
  //   description: "A sleek Landing Page built with React, Framer Motion, Gsap and Tailwind CSS,.",
  //   src: Ccoed,
  //   link: Ccoed,
  //   color: "#ed649e",
  //   githubLink: "https://github.com/eyeobad/",
  //   liveLink: "https://ccords.netlify.app/",
  // },
  // {
  //   title: "Movie Box",
  //   description: "Movie project (add the repo link when ready).",
  //   src: Moviebox,
  //   link: Moviebox,
  //   color: "#f59e0b",
  //   githubLink: null,
  //   liveLink: null,
  // },
];

export default function Projects() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // ✅ FIX 1: Set body+html background to the same gradient so overscroll matches.
    const gradient = "linear-gradient(135deg, #0c0e14, #111322 40%, #1e1b4b)";
    const originalBodyBg = document.body.style.background;
    const originalHtmlBg = document.documentElement.style.background;
    document.body.style.background = gradient;
    document.documentElement.style.background = gradient;

    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card { scale: 0.85; margin-top: -5vh; }
        .project-container { height: 90vh; }
      }
    `;
    document.head.appendChild(style);

    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      // Restore original background on unmount
      document.body.style.background = originalBodyBg;
      document.documentElement.style.background = originalHtmlBg;
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  // ✅ IMPORTANT: make ranges dynamic for any number of projects
  const step = 1 / projects.length;

  return (
    <ReactLenis root>
      {/* ✅ FIX 2: Added min-h-screen to ensure the container always fills the viewport */}
      <main
        className="bg-gradient-to-br from-[#0c0e14] via-[#111322] to-[#1e1b4b] min-h-screen"
        ref={container}
      >
        <section className="text-white w-full bg-transparent">
          {projects.map((project, i) => {
            // ✅ soften the scale drop for more cards
            const drop = 0.035; // smaller = smoother with many cards
            const targetScale = Math.max(0.72, 1 - (projects.length - i) * drop);

            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * step, 1]} // ✅ FIXED
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
      >
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            <motion.img
              src={url}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />

            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>
          </div>

          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
                {description}
              </p>
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="flex items-center gap-4">
                {/* GitHub */}
                {githubLink ? (
                  <motion.a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2"
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    <span className="text-xs md:text-sm font-medium" style={{ color }}>
                      Code
                    </span>
                  </motion.a>
                ) : (
                  <span className="text-xs md:text-sm text-white/40">No repo</span>
                )}

                {/* Live */}
                {liveLink ? (
                  <motion.a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2"
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    <span className="text-xs md:text-sm font-medium" style={{ color }}>
                      Live
                    </span>
                  </motion.a>
                ) : (
                  <span className="text-xs md:text-sm text-white/40">No live</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string,
  liveLink: PropTypes.string,
};
