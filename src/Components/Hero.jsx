import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaInstagram } from "react-icons/fa6";

import image from "../assets/men.jpeg"
const Hero = () => {
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/iAsadDev' },
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/asad-qayyum-2646ba251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
     {icon: <FaInstagram />, url: 'https://www.instagram.com/asad._qayyum?igsh=MTJzYmZ3Ymo1emZyNw=='}
  ];
  return (
    <section id="home" className="relative bg-white dark:bg-gray-900 overflow-hidden">
      {/* Hero Section - Taller */}
      <div className="min-h-screen flex items-center pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
              >
                Hi, I'm <span className="text-yellow-500">Asad</span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-6"
              >
                Full Stack Developer
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg"
              >
                I build exceptional digital experiences with modern technologies. 
                Currently pursuing Computer Science while creating impactful web applications.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <a
                  href="#contact"
                  className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg shadow-lg hover:shadow-yellow-500/30 transition-all flex items-center justify-center"
                >
                  Get In Touch
                </a>
                
                <a
                  href="/resume.pdf"
                  download
                  className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
                >
                  <FiDownload /> Resume
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex justify-center md:justify-start gap-4 mt-8"
              >
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                  >
                    {link.icon}
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center"
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
                <img
                  src={image}
                  alt="Asad - Full Stack Developer"
                  className="w-full h-full object-contain rounded-full border-4 border-yellow-500 shadow-xl"
                />
                <div className="absolute -z-10 w-full h-full rounded-full bg-yellow-100 dark:bg-yellow-900/30 top-4 left-4"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-yellow-500 opacity-20"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

    
    </section>
  );
};

export default Hero;