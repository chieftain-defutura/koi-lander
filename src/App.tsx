import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import VideoPromo from "./components/VideoPromo";

const App: React.FC = () => {
  return (
    <div>
      <About />
      <VideoPromo />
      <Footer />
    </div>
  );
};

export default App;
