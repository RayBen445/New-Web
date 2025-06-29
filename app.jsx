import React from "react"; import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; import Navbar from "./components/Navbar"; import Home from "./pages/Home"; import Footer from "./components/Footer"; import "./index.css";

export default function App() { return ( <Router> <div className="bg-gradient-to-b from-gray-100 to-white dark:from-[#0f0f0f] dark:to-black text-gray-800 dark:text-white min-h-screen"> <Navbar /> <Routes> <Route path="/" element={<Home />} /> </Routes> <Footer /> </div> </Router> ); }

