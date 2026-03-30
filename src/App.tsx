import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyles";
import Header from "./components/Header";
import WelcomePopup from "./components/WelcomePopup";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import PlansPage from "./pages/PlansPage";
import ContactPage from "./pages/ContactPage";
import CareersPage from "./pages/CareersPage";
import Politica from "./components/politica";

// O Layout decide se mostra ou não os componentes baseados na rota
const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const hideLayout = location.pathname === "/politica";

  return (
    <>
      {!hideLayout && <Header />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
};

function App() {
  const [isWelcomePopupOpen, setIsWelcomePopupOpen] = useState(false);

  useEffect(() => {
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

      {/* AGORA O LAYOUT ENVOLVE AS ROTAS */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<AboutPage />} />
          <Route path="/planos" element={<PlansPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/trabalhe-conosco" element={<CareersPage />} />
          <Route path="/politica" element={<Politica />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
