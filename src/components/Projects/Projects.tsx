import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    tags: string[];
    link: string;
    github?: string;
    image?: string;
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
      whileHover={{ y: -5 }}
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-blue-500 group"
    >
      {/* Project Image Placeholder */}
      <div className="h-48 bg-gradient-to-r from-blue-900 to-purple-900 relative overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-4xl font-bold text-white opacity-20">
              {project.title.charAt(0)}
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <div className="flex space-x-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub repository"
              >
                <FiGithub className="w-5 h-5" />
              </a>
            )}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="View project"
            >
              <FiExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        <p className="text-gray-300 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300 hover:bg-gray-600 hover:text-white transition-colors"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <div className="flex space-x-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition flex items-center justify-center space-x-2"
          >
            <span>Live Demo</span>
            <FiExternalLink className="w-4 h-4" />
          </a>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-medium transition flex items-center justify-center space-x-2"
            >
              <span>Code</span>
              <FiGithub className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description:
        "An E-commerce Website Using MERN Stack, Rest API, And Typescript",
      tags: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Typescript",
        "Tailwind CSS",
      ],
      link: "https://cartifyfrontend-6ha1azey1-dhruv-zalas-projects.vercel.app/",
      image: "Screenshot 2025-04-26 161910.png",
    },
    {
      id: 2,
      title: "Weather App",
      description: "Real-time weather application using OpenWeather API",
      tags: ["React", "Axios", "CSS"],
      link: "https://rad-trifle-9c39b1.netlify.app/",
      image: "Screenshot 2025-03-30 182713.png",
    },
    {
      id: 3,
      title: "Task Manager",
      description: "Todo application with drag and drop functionality",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      link: "https://imaginative-taffy-a0769d.netlify.app/",
      image: "Screenshot 2025-04-21 152001.png",
    },
    {
      id: 4,
      title: "Personal Portfolio",
      description:
        "My personal portfolio with every needed information about me",
      tags: ["React", "Tailwind"],
      link: "#",
      image: "Screenshot 2025-04-01 141823.png",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-gradient-to-b from-gray-900 to-gray-800"
      id="projects"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ type: "spring" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              My Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a
            specific problem or explore new technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.a
            href="https://github.com/DhruvZala"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg transition-colors font-medium"
          >
            View All Projects on GitHub
            <FiGithub className="ml-2 w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
