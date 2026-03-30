import React, { useState } from "react"; // Adicionado useState
import styled from "styled-components";
import { motion } from "framer-motion"; // Adicionado AnimatePresence para animação suave
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MessageCircleDashed as MessageCircle,
  ArrowUp,
} from "lucide-react";
import { Container } from "../styles/GlobalStyles";

// --- SEUS ESTILOS ORIGINAIS (MANTIDOS) ---
const FooterSection = styled.footer`
  background: var(--gradient-primary);
  color: var(--white);
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.05)"/><circle cx="90" cy="30" r="1" fill="rgba(255,255,255,0.05)"/><circle cx="30" cy="90" r="1" fill="rgba(255,255,255,0.05)"/><circle cx="70" cy="70" r="1" fill="rgba(255,255,255,0.05)"/></svg>')
      repeat;
    opacity: 0.3;
  }
`;

const FooterContent = styled.div`
  padding: 4rem 0 2rem;
  position: relative;
  z-index: 2;
`;
const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;
const FooterColumn = styled(motion.div)`
  h4 {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--primary-orange);
  }
  p {
    line-height: 1.7;
    opacity: 0.9;
    margin-bottom: 1.5rem;
  }
`;
const Logo = styled.div`
  display: flex;
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 1rem;
  flex-direction: column;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
const LogoText = styled.span`
  color: var(--white);
  font-weight: 900;
  letter-spacing: -0.5px;
`;
const LogoOrange = styled.span`
  color: var(--primary-orange);
  font-weight: 900;
`;
const LogoText1 = styled.span`
  color: var(--white);
  opacity: 0.8;
  font-weight: 900;
  letter-spacing: -0.5px;
  margin-left: 4rem;
  font-size: 0.6rem;
  margin-top: -0.8rem;
`;
const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  opacity: 0.9;
  transition: all 0.3s ease;
  &:hover {
    opacity: 1;
    color: var(--primary-orange);
  }
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
const FooterLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
const FooterLink = styled.li`
  a {
    color: var(--white);
    opacity: 0.8;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
      opacity: 1;
      color: var(--primary-orange);
      transform: translateX(5px);
    }
  }
`;
const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
const SocialLink = styled.a`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  &:hover {
    background: var(--primary-orange);
    transform: translateY(-3px) scale(1.1);
    box-shadow: 0 10px 25px rgba(255, 122, 0, 0.3);
  }
`;
const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;
const Copyright = styled.div`
  opacity: 0.8;
  font-size: 0.9rem;
`;
const BackToTop = styled.button`
  background: var(--primary-orange);
  color: var(--white);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(255, 122, 0, 0.3);
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(255, 122, 0, 0.4);
  }
`;
const WhatsAppFloat = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1.3rem;
  }
`;
const WhatsAppButton = styled(motion.button)`
  background: #25d366;
  color: var(--white);
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 5px 20px rgba(37, 211, 102, 0.4);
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 10px 30px rgba(37, 211, 102, 0.5);
  }
`;

const Footer: React.FC = () => {
  const [showPolicy, setShowPolicy] = useState(false); // ESTADO PARA O MODAL

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de conhecer os planos da NETVIP TELECOM.",
    );
    window.open(`https://wa.me/5581994030800?text=${message}`, "_blank");
  };

  return (
    <>
      <FooterSection>
        <Container>
          <FooterContent>
            <FooterTop>
              {/* Coluna 1: Logo e Social */}
              <FooterColumn
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Logo>
                  <div>
                    <LogoText>NET</LogoText>
                    <LogoOrange>VIP</LogoOrange>
                  </div>
                  <LogoText1>TELECOM</LogoText1>
                </Logo>
                <p>
                  A NETVIP TELECOM é o seu provedor de confiança, oferecendo
                  internet fibra óptica de alta velocidade com tecnologia de
                  ponta.
                </p>
                <SocialLinks>
                  <SocialLink href="#">
                    <Facebook size={20} />
                  </SocialLink>
                  <SocialLink href="#">
                    <Instagram size={20} />
                  </SocialLink>
                  <SocialLink href="#">
                    <Twitter size={20} />
                  </SocialLink>
                  <SocialLink href="#">
                    <Youtube size={20} />
                  </SocialLink>
                </SocialLinks>
              </FooterColumn>

              {/* Colunas 2 e 3: Links e Serviços (resumidos para o exemplo) */}
              <FooterColumn>
                <h4>Navegação</h4>
                <FooterLinks>
                  <FooterLink>
                    <a onClick={() => scrollToSection("home")}>Início</a>
                  </FooterLink>
                  <FooterLink>
                    <a onClick={() => scrollToSection("plans")}>Planos</a>
                  </FooterLink>
                  <FooterLink>
                    <a onClick={() => scrollToSection("contact")}>Contato</a>
                  </FooterLink>
                </FooterLinks>
              </FooterColumn>

              <FooterColumn>
                <h4>Suporte</h4>
                <FooterLinks>
                  <FooterLink>
                    <a>Segunda Via</a>
                  </FooterLink>
                  <FooterLink>
                    <a>Teste de Velocidade</a>
                  </FooterLink>
                  <FooterLink>
                    <a onClick={() => setShowPolicy(true)}>Privacidade</a>
                  </FooterLink>
                </FooterLinks>
              </FooterColumn>

              {/* Coluna 4: Endereços */}
              <FooterColumn>
                <h4>Contato</h4>
                <ContactInfo>
                  <ContactItem>
                    <Phone size={18} />
                    <span>(81) 99403-0800</span>
                  </ContactItem>
                  <ContactItem>
                    <Mail size={18} />
                    <span>contato@netviptelecom.com.br</span>
                  </ContactItem>
                  <ContactItem>
                    <MapPin size={18} />
                    <span>Carpina - PE</span>
                  </ContactItem>
                </ContactInfo>
              </FooterColumn>
            </FooterTop>

            <FooterBottom>
              <Copyright>
                © 2026 NETVIP TELECOM - Todos os direitos reservados.
                <br />
                <a
                  href="https://www.ivanizidoro.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SITE DESENVOLVIDO POR IVAN IZIDORO.
                </a>
              </Copyright>

              <BackToTop onClick={scrollToTop} aria-label="Voltar ao topo">
                <ArrowUp size={20} />
              </BackToTop>
            </FooterBottom>
          </FooterContent>
        </Container>
      </FooterSection>

      <WhatsAppFloat>
        <WhatsAppButton
          onClick={openWhatsApp}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <MessageCircle size={28} />
        </WhatsAppButton>
      </WhatsAppFloat>
    </>
  );
};

export default Footer;
