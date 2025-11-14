import React, { useState, useEffect } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Plans from "./components/Plans";
import MobilePlans from "./components/MobilePlans";
import WelcomePopup from "./components/WelcomePopup";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isWelcomePopupOpen, setIsWelcomePopupOpen] = useState(false);

  useEffect(() => {
    // Show welcome popup on first load
    const hasSeenPopup = sessionStorage.getItem("hasSeenWelcomePopup");
    if (!hasSeenPopup) {
      setIsWelcomePopupOpen(true);
      sessionStorage.setItem("hasSeenWelcomePopup", "true");
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <WelcomePopup
        isOpen={isWelcomePopupOpen}
        onClose={() => setIsWelcomePopupOpen(false)}
      />
      <Header />
      <Hero />
      <Plans />
      <MobilePlans />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
