import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import ProjectsPage from "./components/ProjectsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Credits from "./components/Credits";
import './App.css';

function App() {
  return (
    <Router basename="/operum-ostensae">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='*' element={<HomePage />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/credits' element={<Credits />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;