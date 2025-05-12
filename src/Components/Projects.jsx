import { motion } from "framer-motion";
import Burger from "../assets/burger.png";
import port from "../assets/port.png"
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      title: "Burger Shop Website Frontend",
      description: "Responsive burger shop website with a modern design, menu showcase, and blog secion.",
      tags: ["React", "Node.js", "MongoDB", "Express.js"],
      github: "#",
      live: "https://burger-asad.netlify.app/",
      image: Burger
    },
    {
      title: "Portfolio Website",
      description: "A modern and visually engaging portfolio showcasing projects with the latest frontend frameworks.",
      tags: ["React", "Tailwind"],
      github: "#",
      live: "https://asadqayyum.netlify.app/",
      image: port
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-24 mt-1 px-6 bg-neutral-900"
      id="projects"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-4">
            My Projects
          </h2>
          <p className="text-xl text-amber-200/80 max-w-2xl mx-auto">
            Here are some of my featured works. Each project represents unique challenges and solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-amber-500/20 hover:border-amber-400/40 transition-all duration-300 shadow-lg"
            >
              {/* Project Image */}
              <div className="h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{
                    filter: "sepia(20%) hue-rotate(5deg) saturate(120%) brightness(0.9) contrast(1.05)"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/30 to-transparent" />
                <div className="absolute inset-0 bg-amber-500 mix-blend-overlay opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6 bg-neutral-800/80 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-amber-400 mb-2">{project.title}</h3>
                <p className="text-amber-100/90 mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-amber-900/40 text-amber-300 border border-amber-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <FiGithub className="text-lg" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <FiExternalLink className="text-lg" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-amber-200/80 mb-6">
            Want to see more? Check out my GitHub profile for additional projects.
          </p>
          <a
            href="https://github.com/iAsadDev"
            className="inline-flex items-center px-6 py-3 rounded-full bg-amber-600 hover:bg-amber-500 text-neutral-900 font-medium transition-colors shadow-lg hover:shadow-amber-500/20"
          >
            View All Projects
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;