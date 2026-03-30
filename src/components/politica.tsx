import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Container } from "../styles/GlobalStyles";

const PolicyWrapper = styled.div`
  background: var(--gradient-primary);
  min-height: 100vh;
  color: var(--white);
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 3rem;
  width: 100%;
  max-width: 850px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: var(--primary-orange);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-weight: 700;
  margin-bottom: 2rem;
  align-self: flex-start;
  transition: transform 0.2s;
  &:hover {
    transform: translateX(-5px);
  }
`;

const Section = styled.section`
  margin-bottom: 2rem;
  h3 {
    color: var(--primary-orange);
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
  }
  p {
    line-height: 1.7;
    opacity: 0.85;
    font-size: 1rem;
  }
`;

const Politica: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => window.scrollTo(0, 0), []);

  const data = [
    {
      t: "1. Aceitação",
      c: "Ao utilizar os serviços NETVIP, o cliente concorda com os termos e normas da ANATEL.",
    },
    {
      t: "2. Uso Ético",
      c: "A internet deve ser usada de forma legal. Atividades ilícitas como hacking e fraude são proibidas.",
    },
    {
      t: "3. Estabilidade",
      c: "Tráfego abusivo que comprometa a rede poderá gerar limitação ou suspensão do serviço.",
    },
    {
      t: "4. Cancelamento",
      c: "O serviço pode ser encerrado em caso de violação contratual ou legal.",
    },
    {
      t: "5. Privacidade",
      c: "Dados são tratados conforme a LGPD para garantir sua segurança e funcionamento do serviço.",
    },
    {
      t: "6. Terceiros",
      c: "O acesso a serviços externos (Google, etc.) é livre dentro do uso normal da conexão.",
    },
  ];

  return (
    <PolicyWrapper>
      <Container>
        <BackButton onClick={() => navigate("/")}>
          <ChevronLeft size={20} /> Voltar
        </BackButton>

        <ContentCard
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h1 style={{ marginBottom: "2rem" }}>
            Política de Uso <span>NETVIP</span>
          </h1>

          {data.map((item, i) => (
            <Section key={i}>
              <h3>{item.t}</h3>
              <p>{item.c}</p>
            </Section>
          ))}

          <footer
            style={{
              marginTop: "2rem",
              paddingTop: "2rem",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              fontSize: "0.85rem",
              opacity: 0.6,
            }}
          >
            * Consulte o contrato de adesão para detalhes específicos.
          </footer>
        </ContentCard>
      </Container>
    </PolicyWrapper>
  );
};

export default Politica;
