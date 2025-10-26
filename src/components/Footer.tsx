import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
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
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
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
  align-items: center;
  gap: 12px;
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 1rem;

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
    right: 1rem;
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
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de conhecer os planos da NETVIP TELECOM."
    );
    window.open(`https://wa.me/5581994030800?text=${message}`, "_blank");
  };

  return (
    <>
      <FooterSection>
        <Container>
          <FooterContent>
            <FooterTop>
              <FooterColumn
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Logo>
                  <LogoText>NET</LogoText>
                  <LogoOrange>VIP</LogoOrange>
                </Logo>
                <p>
                  A NETVIP TELECOM é o seu provedor de confiança, oferecendo
                  internet fibra óptica de alta velocidade com tecnologia de
                  ponta e suporte especializado 24 horas por dia.
                </p>
                <SocialLinks>
                  <SocialLink href="#" aria-label="Facebook">
                    <Facebook size={20} />
                  </SocialLink>
                  <SocialLink href="#" aria-label="Instagram">
                    <Instagram size={20} />
                  </SocialLink>
                  <SocialLink href="#" aria-label="Twitter">
                    <Twitter size={20} />
                  </SocialLink>
                  <SocialLink href="#" aria-label="YouTube">
                    <Youtube size={20} />
                  </SocialLink>
                </SocialLinks>
              </FooterColumn>

              <FooterColumn
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4>Navegação</h4>
                <FooterLinks>
                  <FooterLink>
                    <a onClick={() => scrollToSection("home")}>Início</a>
                  </FooterLink>
                  <FooterLink>
                    <a onClick={() => scrollToSection("about")}>Quem Somos</a>
                  </FooterLink>
                  <FooterLink>
                    <a onClick={() => scrollToSection("plans")}>
                      Nossos Planos
                    </a>
                  </FooterLink>
                  <FooterLink>
                    <a onClick={() => scrollToSection("contact")}>Contato</a>
                  </FooterLink>
                </FooterLinks>
              </FooterColumn>

              <FooterColumn
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4>Serviços</h4>
                <FooterLinks>
                  <FooterLink>
                    <a>Internet Fibra Óptica</a>
                  </FooterLink>
                  <FooterLink>
                    <a>Wi-Fi Residencial</a>
                  </FooterLink>
                  <FooterLink>
                    <a>Internet Empresarial</a>
                  </FooterLink>
                  <FooterLink>
                    <a>Suporte Técnico</a>
                  </FooterLink>
                  <FooterLink>
                    <a>Instalação Gratuita</a>
                  </FooterLink>
                </FooterLinks>
              </FooterColumn>

              <FooterColumn
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4>Nossos Endereços</h4>
                <ContactInfo>
                  <ContactItem>
                    <Phone size={18} />
                    <div>
                      <div>(81) 99403-0600</div>
                      <div>(81) 3499-7444</div>
                    </div>
                  </ContactItem>
                  <ContactItem>
                    <Mail size={18} />
                    <span>contato@netviptelecom.com</span>
                  </ContactItem>
                  <ContactItem>
                    <MapPin size={18} />
                    <div>
                      <div>
                        <strong>Sede:</strong> Av. da Bandeira, 291
                      </div>
                      <div>Carpina - PE</div>
                      <br />
                      <div>
                        <strong>Filiais:</strong>
                      </div>
                      <div>• Lagoa de Itaenga - PE</div>
                      <div>• Tracunhaém - PE</div>
                    </div>
                  </ContactItem>
                </ContactInfo>
              </FooterColumn>
            </FooterTop>

            <FooterBottom>
              <Copyright>
                © 2024 NETVIP TELECOM - Todos os direitos reservados. Criado por{" "}
                <strong>IVAN IZIDORO</strong>
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
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          aria-label="Contato via WhatsApp"
        >
          <MessageCircle size={28} />
        </WhatsAppButton>
      </WhatsAppFloat>
    </>
  );
};

export default Footer;
