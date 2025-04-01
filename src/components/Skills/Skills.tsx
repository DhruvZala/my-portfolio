import { motion } from "framer-motion";
import { FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNetlify,
  SiAxios,
  SiRedux,
} from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import { CgVercel } from "react-icons/cg";
import { IconType } from "react-icons";

type Skill = {
  name: string;
  icon: IconType;
  className: string;
  level: number;
  color: string;
};

const skillsData: Skill[] = [
  {
    name: "HTML5",
    icon: SiHtml5,
    className: "text-orange-500",
    level: 95,
    color: "#E34F26",
  },
  {
    name: "CSS3",
    icon: SiCss3,
    className: "text-blue-500",
    level: 90,
    color: "#1572B6",
  },
  {
    name: "Tailwind",
    icon: RiTailwindCssFill,
    className: "text-blue-500",
    level: 90,
    color: "#38B2AC",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    className: "text-yellow-500",
    level: 85,
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    className: "text-blue-600",
    level: 80,
    color: "#3178C6",
  },
  {
    name: "React",
    icon: FaReact,
    className: "text-blue-400",
    level: 85,
    color: "#61DAFB",
  },
  {
    name: "Redux",
    icon: SiRedux,
    className: "text-blue-400",
    level: 85,
    color: "#764ABC",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    className: "text-orange-600",
    level: 80,
    color: "#F05032",
  },
  {
    name: "Github",
    icon: FaGithub,
    className: "text-white-600",
    level: 80,
    color: "#181717",
  },
  {
    name: "Axios",
    icon: SiAxios,
    className: "text-purple-500",
    level: 75,
    color: "#5A29E4",
  },
  {
    name: "Netlify",
    icon: SiNetlify,
    className: "text-teal-500",
    level: 75,
    color: "#00C7B7",
  },
  {
    name: "Vercel",
    icon: CgVercel,
    className: "text-teal-500",
    level: 75,
    color: "#000000",
  },
  {
    name: "SCSS",
    icon: BsFiletypeScss,
    className: "text-teal-500",
    level: 70,
    color: "#CC6699",
  },
];

const SkillCard = ({ skill }: { skill: Skill; index: number }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.05,
        boxShadow: `0 10px 25px -5px ${skill.color}40`,
      }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative bg-gray-800 rounded-xl p-6 flex flex-col items-center shadow-lg cursor-pointer overflow-hidden group"
    >
      {/* Animated background highlight */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at center, ${skill.color}20, transparent 70%)`,
        }}
      />

      {/* Icon with glow effect */}
      <div className="relative z-10">
        <Icon
          className={`text-5xl mb-4 ${skill.className} drop-shadow-lg group-hover:scale-110 transition-transform duration-300`}
          aria-label={skill.name}
        />
      </div>

      <h3 className="text-white font-semibold mb-3 text-lg relative z-10">
        {skill.name}
      </h3>

      {/* Progress bar with animated fill */}
      <div className="w-full bg-gray-700 rounded-full h-3 mb-2 relative z-10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1.5, type: "spring" }}
          className="h-full rounded-full"
          style={{ backgroundColor: skill.color }}
          aria-valuenow={skill.level}
          aria-valuemin={0}
          aria-valuemax={100}
          role="progressbar"
        />
      </div>

      <span className="text-sm font-medium text-gray-300 relative z-10">
        {skill.level}% 
      </span>

      {/* Decorative elements */}
      <div
        className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"
        style={{ backgroundColor: skill.color }}
      />
    </motion.div>
  );
};

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ type: "spring" }}
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            My Skills
          </span>
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skillsData.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
          <div className="absolute bottom-10 right-1/4 w-64 h-64 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
