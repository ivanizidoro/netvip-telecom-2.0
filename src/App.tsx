import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyles";
import Header from "./components/Header";
import WelcomePopup from "./components/WelcomePopup";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import PlansPage from "./pages/PlansPage";
import ContactPage from "./pages/ContactPage";
import CareersPage from "./pages/CareersPage";

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
    <Router>
      <GlobalStyle />
      <WelcomePopup
        isOpen={isWelcomePopupOpen}
        onClose={() => setIsWelcomePopupOpen(false)}
      />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<AboutPage />} />
        <Route path="/planos" element={<PlansPage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/trabalhe-conosco" element={<CareersPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
