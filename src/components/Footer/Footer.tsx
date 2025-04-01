import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/DhruvZala"
            className="text-gray-400 hover:text-white"
          >
            <FaGithub className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/dhruv-zala-05a964338/"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a
            href="https://www.instagram.com/dhruvvv._.20/"
            className="text-gray-400 hover:text-white"
          >
            <FaInstagram className="h-6 w-6" />
          </a>
          <a href="mailto:zaladhruv673@gmail.com" className="text-gray-400 hover:text-white">
            <FaEnvelope className="h-6 w-6" />
          </a>
        </div>
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Dhruv Zala. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
