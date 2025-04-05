import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

interface HomeProps {
  setActiveTab: (tab: string) => void;
}

const Home = ({ setActiveTab }: HomeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12 px-4"
    >
      <div className="text-center mb-16 relative">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-blue-900 opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="inline-block mb-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-400 overflow-hidden mx-auto shadow-lg"
            >
              {/* Image Section */}
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <img
                  src="IMG_20231114_115455.jpg"
                  alt="Dhruv Zala"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>

          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-white"
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Dhruv Zala
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Fullstack Developer
          </motion.p>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-6"
          >
            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(37, 99, 235, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              onClick={() => setActiveTab("projects")}
              className="px-8 py-3 bg-gradient-to-r flex items-center justify-center gap-1 from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-full text-white font-medium transition-all shadow-lg"
            >
              View My Work <FaArrowUp />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="max-w-4xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 text-center">
          About Me
        </h2>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700/50">
          <p className="text-gray-300 mb-6 text-lg leading-relaxed">
            I'm a passionate fullstack developer with expertise in building
            modern, responsive web applications using{" "}
            <span className="text-blue-400">React</span>,{" "}
            <span className="text-blue-400">TypeScript</span>, and other
            cutting-edge technologies.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            With a strong foundation in{" "}
            <span className="text-blue-400">HTML</span>,{" "}
            <span className="text-blue-400">CSS</span>, and{" "}
            <span className="text-blue-400">JavaScript</span>, I create seamless
            user experiences that are both visually appealing and highly
            functional.
          </p>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Javascript", "TypeScript", "React", "Redux"].map(
              (tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gray-700/50 hover:bg-gray-700/70 rounded-lg p-3 text-center transition-all"
                >
                  <span className="text-blue-300 font-medium">{tech}</span>
                </motion.div>
              )
            )}
          </div>
        </div>
      </motion.div>

      {/* Floating elements decoration */}
      <motion.div
        className="fixed top-1/4 left-1/4 w-4 h-4 rounded-full bg-blue-400 opacity-30"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="fixed bottom-1/3 right-1/3 w-6 h-6 rounded-full bg-purple-400 opacity-20"
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </motion.div>
  );
};

export default Home;
