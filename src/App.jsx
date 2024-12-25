import { Footer } from "./components/Footer";
import { Localizacao } from "./components/Localizacao";
import { QuemSomos } from "./components/QuemSomos";
import { Slide } from "./components/Slide";
import { Header } from "./container/Header";

function App() {
  return (
    <>
      <Header />
      <Slide />
      <QuemSomos />
      <Localizacao />
      <Footer />
    </>
  );
}

export default App;
