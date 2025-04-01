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
};

const skillsData: Skill[] = [
  { name: "HTML5", icon: SiHtml5, className: "text-orange-500", level: 95 },
  { name: "CSS3", icon: SiCss3, className: "text-blue-500", level: 90 },
  {
    name: "Tailwind",
    icon: RiTailwindCssFill,
    className: "text-blue-500",
    level: 90,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    className: "text-yellow-500",
    level: 85,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    className: "text-blue-600",
    level: 80,
  },
  { name: "React", icon: FaReact, className: "text-blue-400", level: 85 },
  { name: "Redux", icon: SiRedux, className: "text-blue-400", level: 85 },
  { name: "Git", icon: FaGitAlt, className: "text-orange-600", level: 80 },
  { name: "Github", icon: FaGithub, className: "text-white-600", level: 80 },
  { name: "Axios", icon: SiAxios, className: "text-purple-500", level: 75 },
  { name: "Netlify", icon: SiNetlify, className: "text-teal-500", level: 75 },
  { name: "Vercel", icon: CgVercel, className: "text-teal-500", level: 75 },
  { name: "SCSS", icon: BsFiletypeScss, className: "text-teal-500", level: 70 },
];

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ delay: index * 0.1, type: "spring" }}
      className="bg-gray-800 rounded-lg p-4 flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow"
    >
      <Icon
        className={`text-4xl mb-3 ${skill.className}`}
        aria-label={skill.name}
      />
      <h3 className="text-white font-medium mb-2">{skill.name}</h3>
      <div className="w-full bg-gray-700 rounded-full h-2.5 mb-1">
        <div
          className="bg-blue-500 h-2.5 rounded-full"
          style={{ width: `${skill.level}%` }}
          aria-valuenow={skill.level}
          aria-valuemin={0}
          aria-valuemax={100}
          role="progressbar"
        />
      </div>
      <span className="text-sm text-gray-300">{skill.level}%</span>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
