import { Button, Container, Image, NavContainer } from "./styles";

import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <Container>
      <Image src={Logo} alt="Logo" />
      <div>
        <NavContainer>
          <Link to="/">Início</Link>
          <Link to="/quemsomos">Quem somos</Link>
          <Link to="/planos">Nossos Planos</Link>
          <Link to="/contato">Contato</Link>
        </NavContainer>
        <Button>
          <a href="https://netvippe.sgp.net.br/accounts/central/login" target="_blank">
            Central do cliente
          </a>
        </Button>
      </div>
    </Container>
  );
}
