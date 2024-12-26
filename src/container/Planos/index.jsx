import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../Header";
import { Container, ContainerPlanos, H2 } from "./styles";

const planos = [
  { id: 1, image: "/planos/30.png" },
  { id: 2, image: "/planos/100.png" },
  { id: 3, image: "/planos/200.png" },
  { id: 4, image: "/planos/300.png" },
  { id: 5, image: "/planos/400.png" },
  { id: 6, image: "/planos/600.png" },
];

export function Planos() {
  return (
    <>
      <Header />
      <Container>
        <H2>Nossos planos</H2>
        <p>
          Selecione um de nossos planos e venha para o melhor provedor da
          região!
        </p>
        <ContainerPlanos>
          {planos.map((item) => (
            <div key={item.id} className="plano-button">
              <img src={item.image} alt="planos" className="plano-item" />
              <Link to="/contato" className="text-white">Assine já</Link>
            </div>
          ))}
        </ContainerPlanos>
      </Container>
      <Footer />
    </>
  );
}
