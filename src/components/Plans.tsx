import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Check, Wifi, Zap, Star, ArrowRight, Gift } from "lucide-react";
import {
  Container,
  Section,
  Title,
  Subtitle,
  Button,
} from "../styles/GlobalStyles";

const PlansSection = styled(Section)`
  background: var(--light-gray);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to bottom, var(--white), var(--light-gray));
  }
`;

const PlansGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const PlanCard = styled(motion.div)<{ featured?: boolean }>`
  background: var(--white);
  border-radius: 20px;
  padding: 0;
  box-shadow: ${(props) =>
    props.featured ? "var(--shadow-heavy)" : "var(--shadow-medium)"};
  border: ${(props) =>
    props.featured
      ? "3px solid var(--primary-orange)"
      : "1px solid rgba(0, 0, 0, 0.1)"};
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;

  &:hover {
    transform: translateY(-15px) scale(1.02);
    box-shadow: ${(props) =>
      props.featured
        ? "0 30px 60px rgba(255, 122, 0, 0.25)"
        : "0 25px 50px rgba(0, 0, 0, 0.2)"};
  }

  ${(props) =>
    props.featured &&
    `
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: var(--gradient-secondary);
    }
  `}
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--gradient-secondary);
  color: var(--white);
  padding: 0.8rem 2rem;
  border-radius: 25px;
  font-size: 0.85rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: var(--shadow-medium);
  z-index: 10;
`;

const PlanHeader = styled.div<{ color: string }>`
  background: ${(props) => props.color};
  color: var(--white);
  padding: 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="2" fill="rgba(255,255,255,0.1)"/></svg>')
      repeat;
    opacity: 0.3;
  }
`;

const SpeedBadge = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  display: inline-block;
  backdrop-filter: blur(10px);
`;

const PlanSpeed = styled.div`
  font-size: 4rem;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const PlanUnit = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  opacity: 0.9;
`;

const PlanName = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  opacity: 0.9;
  margin-top: 0.5rem;
`;

const PlanContent = styled.div`
  padding: 2rem;
`;

const PlanPrice = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  padding: 1.5rem 0;
  background: var(--light-gray);
  border-radius: 12px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.3rem;
  margin-bottom: 0.5rem;
`;

const Currency = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--gray);
`;

const Price = styled.div`
  font-size: 2.8rem;
  font-weight: 900;
  color: var(--primary-blue);
  line-height: 1;
`;

const PriceDecimals = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
`;

const PriceLabel = styled.div`
  font-size: 0.9rem;
  color: var(--gray);
  font-weight: 500;
`;

const BenefitsTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: var(--primary-blue);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const PlanFeatures = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
`;

const Feature = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  color: var(--dark-gray);
  line-height: 1.4;
`;

const FeatureIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--gradient-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const PlanButton = styled(Button)<{ featured?: boolean }>`
  width: 100%;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
  padding: 1rem 2rem;
  border-radius: 12px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }
`;

const Plans: React.FC = () => {
  const plans = [
    {
      name: "BÁSICO",
      speed: "100",
      price: "59,99",
      color: "var(--gradient-primary)",
      icon: <Wifi size={24} />,
      features: [
        "Velocidade de 100 Mbps",
        "Wi-Fi grátis incluso",
        "Instalação gratuita",
        "Suporte técnico 24h",
        "Sem fidelidade",
      ],
    },
    {
      name: "POPULAR",
      speed: "200",
      price: "69,99",
      color: "var(--gradient-secondary)",
      featured: true,
      icon: <Zap size={24} />,
      features: [
        "Velocidade de 200 Mbps",
        "Wi-Fi grátis incluso",
        "Instalação gratuita",
        "Suporte técnico 24h",
        "Aplicativos de filmes e séries grátis",
        "Sem fidelidade",
      ],
    },
    {
      name: "AVANÇADO",
      speed: "300",
      price: "79,99",
      color: "linear-gradient(135deg, #4A90E2 0%, #0A1D63 100%)",
      icon: <Star size={24} />,
      features: [
        "Velocidade de 300 Mbps",
        "Wi-Fi mesh grátis",
        "Instalação gratuita",
        "Suporte técnico 24h",
        "Aplicativos de filmes e séries grátis",
        "Sem fidelidade",
      ],
    },
    {
      name: "PREMIUM",
      speed: "400",
      price: "89,99",
      color: "linear-gradient(135deg, #FF7A00 0%, #0A1D63 100%)",
      icon: <Star size={24} />,
      features: [
        "Velocidade de 400 Mbps",
        "Wi-Fi 6 mesh grátis",
        "Instalação gratuita",
        "Suporte técnico 24h",
        "Aplicativos de filmes e séries grátis",
        "Sem fidelidade",
      ],
    },
    {
      name: "ULTRA",
      speed: "600",
      price: "99,99",
      color: "linear-gradient(135deg, #0A1D63 0%, #FF7A00 100%)",
      icon: <Star size={24} />,
      features: [
        "Velocidade de 600 Mbps",
        "Wi-Fi 6 mesh premium",
        "Instalação gratuita",
        "Suporte técnico 24h",
        "Aplicativos de filmes e séries grátis",
        "Sem fidelidade",
      ],
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <PlansSection id="plans">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Title>Nossos Planos</Title>
          <Subtitle>
            Selecione um de nossos planos e venha para o melhor provedor da
            região!
            <br />
            Todos com fibra óptica, instalação gratuita e sem fidelidade.
          </Subtitle>
        </motion.div>

        <PlansGrid>
          {plans.map((plan, index) => (
            <PlanCard
              key={plan.name}
              featured={plan.featured}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {plan.featured && (
                <FeaturedBadge>
                  <Star size={16} />
                  MAIS POPULAR
                </FeaturedBadge>
              )}

              <PlanHeader color={plan.color}>
                <SpeedBadge>ASSINE JÁ</SpeedBadge>
                <PlanSpeed>
                  {plan.speed}
                  <PlanUnit>MEGA</PlanUnit>
                </PlanSpeed>
                <PlanName>{plan.name}</PlanName>
              </PlanHeader>

              <PlanContent>
                <PlanPrice>
                  <PriceContainer>
                    <Currency>R$</Currency>
                    <Price>
                      {plan.price.split(",")[0]}
                      <PriceDecimals>,{plan.price.split(",")[1]}</PriceDecimals>
                    </Price>
                  </PriceContainer>
                  <PriceLabel>POR APENAS</PriceLabel>
                </PlanPrice>

                <BenefitsTitle>
                  <Gift size={16} />
                  BENEFÍCIOS:
                </BenefitsTitle>

                <PlanFeatures>
                  {plan.features.map((feature, featureIndex) => (
                    <Feature key={featureIndex}>
                      <FeatureIcon>
                        <Check size={14} color="white" />
                      </FeatureIcon>
                      {feature}
                    </Feature>
                  ))}
                </PlanFeatures>

                <PlanButton
                  variant={plan.featured ? "secondary" : "primary"}
                  featured={plan.featured}
                  onClick={scrollToContact}
                >
                  Assine Já
                  <ArrowRight size={16} />
                </PlanButton>
              </PlanContent>
            </PlanCard>
          ))}
        </PlansGrid>
      </Container>
    </PlansSection>
  );
};

export default Plans;
