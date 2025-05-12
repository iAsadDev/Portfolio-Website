import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-12 md:py-24 px-4 sm:px-6 bg-white"
      id="contact"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring" }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent mb-3 md:mb-4">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-4">
            Have a project in mind or want to collaborate?  
          </p>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out via email or connect with me on social media.  
            I'm always open to discussions about new opportunities, creative ideas,  
            or just a friendly hello! 👋
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="max-w-md mx-auto space-y-6 md:space-y-8"
        >
          {/* Email Card */}
          <div className="flex items-start gap-4 p-4 sm:p-6 bg-white rounded-lg md:rounded-xl border border-yellow-400 shadow-sm md:shadow-md hover:shadow-lg transition-shadow">
            <div className="p-2 sm:p-3 bg-yellow-100 rounded-full">
              <FiMail className="text-xl sm:text-2xl text-yellow-600" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">Email</h3>
              <a
                href="mailto:malikasad0155@gmail.com"
                className="text-sm sm:text-base text-gray-700 hover:text-yellow-600 transition-colors"
              >
                malikasad0155@gmail.com
              </a>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                I respond within 24 hours.
              </p>
            </div>
          </div>

          {/* Location Card */}
          <div className="flex items-start gap-4 p-4 sm:p-6 bg-white rounded-lg md:rounded-xl border border-yellow-400 shadow-sm md:shadow-md hover:shadow-lg transition-shadow">
            <div className="p-2 sm:p-3 bg-yellow-100 rounded-full">
              <FiMapPin className="text-xl sm:text-2xl text-yellow-600" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">Location</h3>
              <p className="text-sm sm:text-base text-gray-700">Layyah, Punjab, Pakistan</p>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Open to remote work worldwide.
              </p>
            </div>
          </div>

          {/* Social Links Card */}
          <div className="p-4 sm:p-6 bg-white rounded-lg md:rounded-xl border border-yellow-400 shadow-sm md:shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Follow Me</h3>
            <div className="flex gap-3 sm:gap-4 justify-center">
              <a
                href="https://github.com/iAsadDev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-gray-100 hover:bg-yellow-100 rounded-lg border border-yellow-300 text-gray-700 hover:text-yellow-600 transition-all"
                aria-label="GitHub"
              >
                <FiGithub className="text-lg sm:text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/asad-qayyum-2646ba251"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-gray-100 hover:bg-yellow-100 rounded-lg border border-yellow-300 text-gray-700 hover:text-yellow-600 transition-all"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="text-lg sm:text-xl" />
              </a>
              <a
                href="https://www.instagram.com/asad._qayyum"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-gray-100 hover:bg-yellow-100 rounded-lg border border-yellow-300 text-gray-700 hover:text-yellow-600 transition-all"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg sm:text-xl" />
              </a>
            </div>
            <p className="text-xs sm:text-sm text-center text-gray-500 mt-3">
              Let's connect and build something awesome!
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;