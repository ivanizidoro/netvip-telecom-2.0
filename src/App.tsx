import { GlobalStyle } from "./styles/GlobalStyles";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Plans from "./components/Plans";
import MobilePlans from "./components/MobilePlans";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
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
