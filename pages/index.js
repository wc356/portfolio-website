import React, { useEffect } from "react";

import Layout from "../components/Layout";
import Landing from "../components/Landing";
import About from "../components/About";
import Projects from "../components/Projects";
import OtherProjects from "../components/OtherProjects";
import Contact from "../components/Contact";

// Render
const LandingPage = () => {
  return (
    <Layout>
      <Landing />
      <About />
      <Projects />
      <OtherProjects />
      <Contact />
    </Layout>
  );
};

export default LandingPage;
