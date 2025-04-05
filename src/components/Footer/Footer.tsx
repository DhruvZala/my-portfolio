import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaGithub className="h-6 w-6" />,
      href: "https://github.com/DhruvZala",
      title: "GitHub",
    },
    {
      icon: <FaLinkedin className="h-6 w-6" />,
      href: "https://www.linkedin.com/in/dhruv-zala-05a964338/",
      title: "LinkedIn",
    },
    {
      icon: <FaInstagram className="h-6 w-6" />,
      href: "https://www.instagram.com/dhruvvv._.20/",
      title: "Instagram",
    },
    {
      icon: <FaEnvelope className="h-6 w-6" />,
      href: "mailto:zaladhruv673@gmail.com",
      title: "Email",
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 py-12 mt-16 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Social Links with Animation */}
          <div className="flex space-x-6 mb-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.title}
              >
                {link.icon}
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-white bg-gray-700 px-2 py-1 rounded whitespace-nowrap">
                  {link.title}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Copyright Text */}
          <motion.p
            className="text-gray-400 text-sm font-light tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            © {new Date().getFullYear()} Dhruv Zala. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
