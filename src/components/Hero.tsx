import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Wifi, Zap, Shield, ArrowRight, Play, Star } from "lucide-react";
import { Container, Button } from "../styles/GlobalStyles";

const HeroSection = styled.section`
  min-height: 100vh;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 140px;

  @media (max-width: 768px) {
    padding-top: 160px;
    min-height: 90vh;
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(
      circle at 20% 50%,
      rgba(255, 122, 0, 0.15) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 20%,
      rgba(255, 122, 0, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 40% 80%,
      rgba(255, 122, 0, 0.08) 0%,
      transparent 50%
    );

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>');
    opacity: 0.3;
  }
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
`;

const HeroText = styled.div`
  color: var(--white);
`;

const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 122, 0, 0.2);
  color: var(--light-orange);
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 122, 0, 0.3);
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.8rem;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }

  .highlight {
    background: var(--gradient-secondary);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  line-height: 1.7;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PlayButton = styled(Button)`
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px) scale(1.05);
  }
`;

const Features = styled(motion.div)`
  display: flex;
  gap: 2.5rem;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 0.95rem;
  opacity: 0.9;
  font-weight: 500;
`;

const HeroVisual = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const MainCard = styled(motion.div)`
  position: relative;
  width: 450px;
  height: 500px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    width: 350px;
    height: 400px;
    padding: 1.5rem;
  }
`;

const SpeedDisplay = styled.div`
  font-size: 4rem;
  font-weight: 900;
  background: var(--gradient-secondary);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const SpeedLabel = styled.div`
  font-size: 1.2rem;
  color: var(--white);
  opacity: 0.8;
  margin-bottom: 2rem;
`;

const PlanHighlight = styled.div`
  background: var(--gradient-secondary);
  color: var(--white);
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const FloatingCard = styled(motion.div)`
  position: absolute;
  background: var(--white);
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: var(--shadow-heavy);
  backdrop-filter: blur(10px);

  &.speed-card {
    top: -30px;
    right: -50px;
    text-align: center;

    @media (max-width: 768px) {
      top: -20px;
      right: -30px;
      padding: 1rem;
    }
  }

  &.coverage-card {
    bottom: -30px;
    left: -50px;
    display: flex;
    align-items: center;
    gap: 0.8rem;

    @media (max-width: 768px) {
      bottom: -20px;
      left: -30px;
      padding: 1rem;
    }
  }
`;

const CardTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--primary-orange);
  line-height: 1;
`;

const CardSubtitle = styled.div`
  font-size: 0.85rem;
  color: var(--gray);
  font-weight: 500;
`;


const Hero: React.FC = () => {
  const navigate = useNavigate();

  const goToPlans = () => {
    navigate("/planos");
  };

  const goToContact = () => {
    navigate("/contato");
  };

  return (
    <HeroSection id="home">
      <HeroBackground />
      <Container>
        <HeroContent>
          <HeroText>
            <Badge
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Star size={16} />
              #1 Provedor da Região
            </Badge>

            <HeroTitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Internet <span className="highlight">Fibra Óptica</span>
              <br />
              de Alta Velocidade
            </HeroTitle>

            <HeroSubtitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Conecte-se ao futuro com a NETVIP TELECOM. Velocidade
              ultrarrápida, estabilidade garantida e suporte 24h para você
              navegar sem limites.
            </HeroSubtitle>

            <HeroButtons
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button variant="secondary" onClick={goToPlans}>
                Ver Nossos Planos
                <ArrowRight size={18} />
              </Button>
              <PlayButton variant="outline" onClick={goToContact}>
                <Play size={16} />
                Fale Conosco
              </PlayButton>
            </HeroButtons>

            <Features
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Feature>
                <Zap size={18} />
                Fibra Óptica 100%
              </Feature>
              <Feature>
                <Shield size={18} />
                Conexão Segura
              </Feature>
              <Feature>
                <Wifi size={18} />
                Wi-Fi Gratuito
              </Feature>
            </Features>
          </HeroText>

          <HeroVisual
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <MainCard
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <SpeedDisplay>600</SpeedDisplay>
              <SpeedLabel>MEGA</SpeedLabel>
              <PlanHighlight>Plano Premium</PlanHighlight>
              <div
                style={{
                  color: "var(--white)",
                  opacity: 0.8,
                  fontSize: "0.95rem",
                }}
              >
                Velocidade de download e upload
                <br />
                Ideal para toda família
              </div>
            </MainCard>

            <FloatingCard
              className="speed-card"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <CardTitle>99.9%</CardTitle>
              <CardSubtitle>Uptime</CardSubtitle>
            </FloatingCard>

            <FloatingCard
              className="coverage-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <Shield size={24} color="var(--primary-blue)" />
              <div>
                <CardTitle style={{ fontSize: "1.2rem" }}>24/7</CardTitle>
                <CardSubtitle>Suporte</CardSubtitle>
              </div>
            </FloatingCard>
          </HeroVisual>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

export default Hero;
