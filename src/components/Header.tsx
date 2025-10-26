import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  MessageCircleDashed as MessageCircle,
} from "lucide-react";
import { Button } from "../styles/GlobalStyles";

const TopBar = styled.div`
  background: var(--gradient-secondary);
  color: var(--white);
  padding: 0.5rem 0;
  font-size: 0.85rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 10px,
      rgba(255, 255, 255, 0.1) 10px,
      rgba(255, 255, 255, 0.1) 12px
    );
    animation: slide 3s linear infinite;
  }

  @keyframes slide {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }
`;

const TopBarContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  position: relative;
  justify-content: center;
  z-index: 2;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.3rem;
    padding: 0 1rem;
  }
`;

const HeaderContainer = styled(motion.header)<{ scrolled: boolean }>`
  position: fixed;
  top: ${(props) => (props.scrolled ? "0" : "40px")};
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${(props) =>
    props.scrolled ? "var(--white)" : "rgba(255, 255, 255, 0.95)"};
  backdrop-filter: blur(15px);
  border-bottom: ${(props) =>
    props.scrolled ? "1px solid rgba(10, 29, 99, 0.1)" : "none"};
  box-shadow: ${(props) => (props.scrolled ? "var(--shadow-medium)" : "none")};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 768px) {
    top: ${(props) => (props.scrolled ? "0" : "80px")};
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 900;
  color: var(--primary-blue);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const LogoText = styled.span`
  background: var(--gradient-primary);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
  letter-spacing: -0.5px;
`;

const LogoOrange = styled.span`
  color: var(--primary-orange);
  font-weight: 900;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: var(--primary-blue);
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0;

  &:hover {
    color: var(--primary-orange);
    transform: translateY(-1px);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: var(--gradient-secondary);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 100%;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const WhatsAppButton = styled(Button)`
  background: #25d366;
  border-color: #25d366;
  font-size: 0.9rem;
  padding: 0.6rem 1.2rem;

  &:hover {
    background: #1faa52;
    box-shadow: 0 8px 25px rgba(37, 211, 102, 0.3);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  color: var(--primary-blue);
  padding: 8px;
  border-radius: 6px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(10, 29, 99, 0.1);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--white);
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
`;

const MobileNavLink = styled.a`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--primary-blue);
  transition: all 0.3s ease;
  padding: 1rem;

  &:hover {
    color: var(--primary-orange);
    transform: scale(1.1);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  color: var(--primary-blue);
  padding: 12px;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(10, 29, 99, 0.1);
    transform: rotate(90deg);
  }
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <TopBar>
        <TopBarContent>
          <span>
            <a href="https://www.instagram.com/netvipprovedor/#" target="#">
              Instagram
            </a>
          </span>
          <span>📞 (81) 99403-0800 / (81) 99789-5571</span>
          <span>🎯 Central de Cliente: (81) 3499-7444</span>
        </TopBarContent>
      </TopBar>

      <HeaderContainer
        scrolled={scrolled}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Nav>
          <Logo onClick={() => scrollToSection("home")}>
            <LogoText>NET</LogoText>
            <LogoOrange>VIP</LogoOrange>
          </Logo>

          <NavLinks>
            <NavLink onClick={() => scrollToSection("home")}>Início</NavLink>
            <NavLink onClick={() => scrollToSection("about")}>
              Quem Somos
            </NavLink>
            <NavLink onClick={() => scrollToSection("plans")}>
              Nossos Planos
            </NavLink>
            <NavLink onClick={() => scrollToSection("contact")}>
              Contato
            </NavLink>
          </NavLinks>

          <ActionButtons>
            <a href="http://api.whatsapp.com/send/?phone=5581994030800&text=Ol%C3%A1%21+Gostaria+de+conhecer+os+planos+da+NETVIP+TELECOM.&type=phone_number&app_absent=0">
              <WhatsAppButton variant="secondary">
                <MessageCircle size={16} />
                WhatsApp
              </WhatsAppButton>
            </a>
            <a
              href="https://netvippe.sgp.net.br/accounts/central/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                style={{
                  color: "var(--primary-blue)",
                  borderColor: "var(--primary-blue)",
                }}
              >
                Central de Cliente
              </Button>
            </a>
          </ActionButtons>

          <MobileMenuButton onClick={() => setIsMenuOpen(true)}>
            <Menu size={24} />
          </MobileMenuButton>
        </Nav>
      </HeaderContainer>

      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CloseButton onClick={() => setIsMenuOpen(false)}>
              <X size={24} />
            </CloseButton>

            <MobileNavLink onClick={() => scrollToSection("home")}>
              Início
            </MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection("about")}>
              Quem Somos
            </MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection("plans")}>
              Nossos Planos
            </MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection("contact")}>
              Contato
            </MobileNavLink>

            <a
              href="https://netvippe.sgp.net.br/accounts/central/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                style={{
                  color: "var(--primary-blue)",
                  borderColor: "var(--primary-blue)",
                }}
              >
                Central de Cliente
              </Button>
            </a>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
