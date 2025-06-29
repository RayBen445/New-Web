import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Moon, Sun, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import './index.css';

const Navbar = ({ darkMode, toggleDarkMode }) => (
  <nav className="p-4 flex justify-between items-center shadow-md sticky top-0 bg-white dark:bg-gray-900 z-50">
    <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-700">
      Prof-Tech
    </h1>
    <ul className="flex items-center gap-4">
      <li><Link to="/" className="hover:text-cyan-400">Home</Link></li>
      <li><Link to="/skills" className="hover:text-cyan-400">Skills</Link></li>
      <li><Link to="/projects" className="hover:text-cyan-400">Projects</Link></li>
      <li><Link to="/education" className="hover:text-cyan-400">Education</Link></li>
      <li><Link to="/blogs" className="hover:text-cyan-400">Blogs</Link></li>
      <li><Link to="/contact" className="hover:text-cyan-400">Contact</Link></li>
      <li>
        <button onClick={toggleDarkMode}>
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </li>
    </ul>
  </nav>
);

const Footer = () => (
  <footer className="mt-10 py-6 text-center border-t border-gray-300 dark:border-gray-700">
    <div className="flex justify-center space-x-4 mb-2">
      <a href="https://github.com/RayBen445" target="_blank" rel="noopener noreferrer"><Github /></a>
      <a href="#"><Twitter /></a>
      <a href="#"><Linkedin /></a>
      <a href="#"><Mail /></a>
    </div>
    <p className="text-sm">© 2025 Prof-Tech 💛 All Rights Reserved</p>
  </footer>
);

const Home = () => (
  <section className="text-center py-20 px-6">
    <img src="/profile.jpg" alt="Profile" className="w-32 h-32 mx-auto rounded-full border-4 border-cyan-400" />
    <h2 className="text-4xl font-bold mt-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-700">
      Prof-Tech
    </h2>
    <p className="mt-2 text-sm">I'm a student economist and developer from Nigeria</p>
    <p className="mt-4 max-w-xl mx-auto text-lg">
      Innovating <span className="text-cyan-400">Solutions</span> with <span className="text-blue-500">Digital Excellence</span>
    </p>
    <section className="px-6 py-12 bg-gray-100 dark:bg-gray-800 mt-10">
      <div className="max-w-3xl mx-auto">
        <p className="text-center">
          I’m a self-driven developer from Nigeria, currently studying Economics at LAUTECH.
          I have a passion for web and backend development, always learning and building impactful digital solutions.
        </p>
        <div className="mt-6 p-4 bg-white dark:bg-gray-700 rounded-xl shadow">
          <p className="text-center">
            <span className="font-bold">Prof-Tech</span> crafts digital experiences that 
            <span className="text-green-400"> inspire </span> and 
            <span className="text-yellow-400"> transform</span>.
          </p>
        </div>
      </div>
    </section>
  </section>
);

const Skills = () => <div className="p-10">Skills section coming soon</div>;
const Projects = () => <div className="p-10">Projects section coming soon</div>;
const Education = () => <div className="p-10">Education section coming soon</div>;
const Blogs = () => <div className="p-10">Blogs section coming soon</div>;
const Contact = () => <div className="p-10">Contact section coming soon</div>;

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <Router>
      <div className={darkMode ? 'dark' : ''}>
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col">
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/education" element={<Education />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
