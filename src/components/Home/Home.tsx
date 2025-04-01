import { motion } from "framer-motion";

interface HomeProps {
  setActiveTab: (tab: string) => void;
}

const Home = ({ setActiveTab }: HomeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12"
    >
      <div className="text-center mb-12">
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-white"
        >
          Hi, I'm <span className="text-blue-400">Dhruv Zala</span>
        </motion.h1>
        <motion.p
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          Fullstack Developer
        </motion.p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex justify-center gap-4"
        >
          <a
            href="#projects"
            onClick={() => setActiveTab("projects")}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={() => setActiveTab("contact")}
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-medium transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-white mb-6">About Me</h2>
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
          <p className="text-gray-300 mb-4">
            I'm a passionate fullstack developer with expertise in building
            modern, responsive web applications using React, TypeScript, and
            other cutting-edge technologies.
          </p>
          <p className="text-gray-300">
            With a strong foundation in HTML, CSS, and JavaScript, I create
            seamless user experiences that are both visually appealing and
            highly functional.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
