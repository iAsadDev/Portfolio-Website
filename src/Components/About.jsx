import { motion } from "framer-motion";
import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiGit,
  SiFirebase,
} from "react-icons/si";

const AboutMe = () => {
  // High-quality developer image that complements the yellow theme
  const developerImage = "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";

  const skills = [
    { name: "JavaScript", icon: <SiJavascript className="text-amber-400" />, category: "Language" },
    { name: "TypeScript", icon: <SiTypescript className="text-amber-300" />, category: "Language" },
    { name: "Python", icon: <SiPython className="text-amber-500" />, category: "Language" },
    { name: "C++", icon: <SiCplusplus className="text-amber-600" />, category: "Language" },
    { name: "HTML", icon: <SiHtml5 className="text-amber-500" />, category: "Frontend" },
    { name: "CSS", icon: <SiCss3 className="text-amber-400" />, category: "Frontend" },
    { name: "React", icon: <SiReact className="text-amber-300" />, category: "Frontend" },
    { name: "Next.js", icon: <SiNextdotjs className="text-amber-200" />, category: "Frontend" },
    { name: "Tailwind", icon: <SiTailwindcss className="text-amber-400" />, category: "Frontend" },
    { name: "Bootstrap", icon: <SiBootstrap className="text-amber-500" />, category: "Frontend" },
    { name: "Node.js", icon: <SiNodedotjs className="text-amber-600" />, category: "Backend" },
    { name: "Express.js", icon: <SiExpress className="text-amber-300" />, category: "Backend" },
    { name: "MongoDB", icon: <SiMongodb className="text-amber-500" />, category: "Database" },
    { name: "Git", icon: <SiGit className="text-amber-600" />, category: "Tools" },
    { name: "Firebase", icon: <SiFirebase className="text-amber-500" />, category: "Database" },
  ];

  const education = {
    degree: "BS Computer Science",
    institution: "GCUF Layyah Campus",
    period: "2022 – 2026",
    description: "Specializing in software engineering with advanced coursework in web technologies, algorithms, and system design."
  };

  const experience = [
    {
      role: "Freelance Developer",
      period: "2023 - Present",
      description: "Developed 15+ web applications using React and Node.js with 100% client satisfaction."
    },
    {
      role: "Open Source Contributor",
      period: "2024 - Present",
      description: "Contributed to 8+ open-source projects with 50+ merged pull requests."
    }
  ];

  const summary = `I'm a passionate full-stack developer with expertise in modern JavaScript frameworks. I specialize in building high-performance web applications with clean architecture and intuitive user interfaces. My work focuses on creating seamless digital experiences through innovative solutions.`;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="about"
      className="py-24 px-6 bg-neutral-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent"
        >
          About <span className="text-amber-400">Me</span>
        </motion.h2>

        {/* Main Content - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            {/* Summary */}
            <Section title="👨‍💻 Professional Summary">
              <p className="text-lg leading-relaxed text-amber-50 mb-6">
                {summary}
              </p>
              <p className="text-lg leading-relaxed text-amber-50">
                Currently enhancing my skills through academic projects while delivering professional solutions to clients worldwide. Committed to writing clean, efficient code and staying updated with industry trends.
              </p>
            </Section>

            {/* Education */}
            <Section title="🎓 Education">
              <div className="bg-neutral-800/90 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/30 hover:border-amber-400/60 shadow-lg mb-6 transition-all duration-300">
                <h4 className="text-xl font-semibold text-amber-400">{education.degree}</h4>
                <p className="text-sm text-amber-300/80 italic mb-2">
                  {education.institution} | {education.period}
                </p>
                <p className="text-amber-100/90">{education.description}</p>
              </div>
            </Section>

            {/* Experience */}
            <Section title="💼 Professional Experience">
              {experience.map((exp, index) => (
                <div key={index} className="bg-neutral-800/90 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/30 hover:border-amber-400/60 shadow-lg mb-4 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-amber-400">{exp.role}</h4>
                  <p className="text-sm text-amber-300/80 italic mb-2">{exp.period}</p>
                  <p className="text-amber-100/90">{exp.description}</p>
                </div>
              ))}
            </Section>
          </div>

          {/* Right Column - Image & Skills */}
          <div className="space-y-12">
            {/* Developer Image with perfect yellow integration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden border border-amber-500/30 hover:border-amber-400/60 transition-all duration-300"
            >
              <img
                src={developerImage}
                alt="Developer working"
                className="w-full h-full object-cover"
                style={{ 
                  filter: "sepia(30%) hue-rotate(5deg) saturate(150%) brightness(0.85) contrast(1.1)",
                }}
              />
              <div className="absolute inset-0 bg-amber-500 mix-blend-overlay opacity-15"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-neutral-900/30"></div>
            </motion.div>

            {/* Skills */}
            <Section title="🛠️ Technical Skills">
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 },
                  },
                }}
              >
                {skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { type: "spring", stiffness: 100, damping: 12 },
                      },
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 8px 20px rgba(245, 158, 11, 0.25)",
                    }}
                    className="bg-neutral-800/90 backdrop-blur-sm border border-amber-500/30 hover:border-amber-400/60 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-lg transition-all duration-300"
                  >
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <h4 className="text-sm font-semibold text-amber-100">{skill.name}</h4>
                    <p className="text-xs text-amber-300/80">{skill.category}</p>
                  </motion.div>
                ))}
              </motion.div>
            </Section>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

// Reusable Section
const Section = ({ title, children }) => (
  <div className="mb-8">
    <h3 className="text-2xl font-bold mb-4 text-amber-400">{title}</h3>
    <div>{children}</div>
  </div>
);

export default AboutMe;