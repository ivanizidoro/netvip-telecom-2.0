import { useState } from "react";
import { Container, Image, NavContainer, MenuButton, Button } from "./styles";
import Logo from "/Logo.png";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Ícones do menu

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <Image src={Logo} alt="Logo" />
      <MenuButton onClick={toggleMenu}>
        {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
      </MenuButton>
      <NavContainer isOpen={isOpen}>
        <Link to="/" onClick={closeMenu}>
          Início
        </Link>
        <Link to="/quemsomos" onClick={closeMenu}>
          Quem somos
        </Link>
        <Link to="/planos" onClick={closeMenu}>
          Nossos Planos
        </Link>
        <Link to="/contato" onClick={closeMenu}>
          Contato
        </Link>
        <Button>
          <a
            href="https://netvippe.sgp.net.br/accounts/central/login"
            target="_blank"
            onClick={closeMenu}
          >
            Central do Cliente
          </a>
        </Button>
      </NavContainer>
    </Container>
  );
}
