import { FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const Header = ({ activeTab, setActiveTab, menuOpen, setMenuOpen }: HeaderProps) => {
  return (
    <header className="bg-gray-800 shadow-md sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            className="flex items-center"
          >
            <FaCode className="text-blue-400 text-2xl mr-2" />
            <span className="text-xl font-bold">Dhruv Zala</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => setActiveTab("home")}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                activeTab === "home"
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setActiveTab("skills")}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                activeTab === "skills"
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                activeTab === "projects"
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab("contact")}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                activeTab === "contact"
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => {
                setActiveTab("home");
                setMenuOpen(false);
              }}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                activeTab === "home"
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => {
                setActiveTab("skills");
                setMenuOpen(false);
              }}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                activeTab === "skills"
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => {
                setActiveTab("projects");
                setMenuOpen(false);
              }}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                activeTab === "projects"
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => {
                setActiveTab("contact");
                setMenuOpen(false);
              }}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                activeTab === "contact"
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Contact
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;