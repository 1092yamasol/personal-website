import React from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Sidebar from "./Components/sidebar/Sidebar";
import Home from "./Components/home/Home";
import About from "./Components/about/About";
import Services from "./Components/services/Services";
import Resume from "./Components/resume/Resume";
import Portfolio from "./Components/portfolio/Portfolio";
import Pricing from "./Components/Pricing/Pricing";
import Blog from "./Components/blog/Blog";
import Testimonials from "./Components/testimonials/Testimonials";
import Contact from "./Components/contact/Contact";

function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
    </>
  );
}

export default App;
