import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const PageContainer = styled.div`
  background: var(--gradient-primary); /* Usa o gradiente do seu site */
  min-height: 100vh;
  color: var(--white);
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
`;

const ContentCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 3rem;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);

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
  gap: 8px;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 2rem;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.8;
  }
`;

const Section = styled.section`
  margin-bottom: 2rem;
  h2 {
    color: var(--primary-orange);
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  p {
    line-height: 1.8;
    opacity: 0.9;
    margin-bottom: 0.5rem;
  }
  ul {
    margin-left: 1.5rem;
    opacity: 0.9;
    line-height: 1.8;
  }
`;

const Politica: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <PageContainer>
      <ContentCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <BackButton onClick={() => navigate("/")}>
          <ChevronLeft size={20} /> Voltar ao Site
        </BackButton>

        <h1 style={{ marginBottom: "2.5rem" }}>
          Política de Uso <span>NETVIP</span>
        </h1>

        <Section>
          <h2>Aceitação dos Termos</h2>
          <p>
            Ao contratar e utilizar os serviços da NETVIP TELECOM, o cliente
            concorda com os termos estabelecidos pelo provedor e com as leis
            aplicáveis, incluindo regulamentações da ANATEL.
          </p>
        </Section>

        <Section>
          <h2>Uso Responsável dos Serviços</h2>
          <p>O cliente deve utilizar a internet de maneira legal e ética.</p>
          <ul>
            <li>
              É proibido o uso dos serviços para atividades ilícitas, como
              fraude, hacking ou disseminação de conteúdo ilegal.
            </li>
          </ul>
        </Section>

        <Section>
          <h2>Restrições de Uso</h2>
          <p>
            Uso que gere tráfego abusivo, interferência na rede ou comprometa a
            estabilidade dos serviços poderá ser limitado, suspenso ou
            cancelado.
          </p>
        </Section>

        <Section>
          <h2>Suspensão ou Cancelamento</h2>
          <p>
            O provedor poderá suspender, limitar ou encerrar os serviços em
            casos de violação dos termos ou da legislação vigente.
          </p>
        </Section>

        <Section>
          <h2>Privacidade e Dados</h2>
          <p>
            A política de privacidade da NETVIP TELECOM informa como os dados
            dos clientes são coletados, armazenados e utilizados, em
            conformidade com a LGPD.
          </p>
        </Section>

        <Section>
          <h2>Uso de Serviços de Terceiros</h2>
          <p>
            É permitido o acesso e uso de serviços de terceiros, como Google,
            dentro do uso normal da conexão.
          </p>
          <p>
            Dados de uso podem ser compartilhados de acordo com a política de
            privacidade, quando necessário para funcionamento ou métricas de
            serviços.
          </p>
        </Section>

        <Section>
          <h2>Consulta e Contratos</h2>
          <p>
            Os termos completos, restrições e direitos do cliente estão
            detalhados no contrato assinado no momento da contratação.
          </p>
        </Section>

        <footer
          style={{
            marginTop: "3rem",
            opacity: 0.5,
            fontSize: "0.8rem",
            textAlign: "center",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "1rem",
          }}
        >
          © 2026 NETVIP TELECOM - Documento de Uso Interno e do Cliente.
        </footer>
      </ContentCard>
    </PageContainer>
  );
};

export default Politica;
