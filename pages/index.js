import Layout from "../components/Layout";
import Landing from "../components/Landing";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useEffect } from "react";

// Render
export default function LandingPage() {
  useEffect(() => {
    console.log("useEffect ran");
  });

  return (
    <Layout>
      <Landing />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Layout>
  );
}
