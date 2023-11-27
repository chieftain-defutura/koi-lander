import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import ResponsiveHeader from "./components/ResponsiveHeader";
import AboutUs from "./components/Aboutus";
import VideoPromo from "./components/VideoPromo";

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (window.innerWidth >= 550) {
      setOpen(false);
    }
  }, [open]);
  return (
    <div>
      <Header setOpen={setOpen} />
      {open && <ResponsiveHeader setOpen={setOpen} />}
      <Hero open={open} />
      <About />
      <VideoPromo />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default App;
