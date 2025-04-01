import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>

        <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition w-full"
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4">
              Or connect with me directly
            </h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/DhruvZala"
                className="text-gray-300 hover:text-white transition"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/dhruv-zala-05a964338/"
                className="text-gray-300 hover:text-white transition"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/dhruvvv._.20/"
                className="text-gray-300 hover:text-white transition"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a href="mailto:zaladhruv673@gmail.com" className="text-gray-300 hover:text-white transition">
                <FaEnvelope className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
