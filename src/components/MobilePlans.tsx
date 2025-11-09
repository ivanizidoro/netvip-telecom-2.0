import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Check, Smartphone, ArrowRight } from "lucide-react";
import {
  Container,
  Section,
  Title,
  Subtitle,
  Button,
} from "../styles/GlobalStyles";

const MobilePlansSection = styled(Section)`
  background: linear-gradient(135deg, #0a1d63 0%, #1a2f7a 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    right: -20%;
    width: 600px;
    height: 600px;
    background: radial-gradient(
      circle,
      rgba(255, 122, 0, 0.15) 0%,
      transparent 70%
    );
    border-radius: 50%;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -30%;
    left: -10%;
    width: 400px;
    height: 400px;
    background: radial-gradient(
      circle,
      rgba(74, 144, 226, 0.2) 0%,
      transparent 70%
    );
    border-radius: 50%;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const MobileTitle = styled(Title)`
  color: var(--white);
  margin-bottom: 0.5rem;
`;

const MobileSubtitle = styled(Subtitle)`
  color: rgba(255, 255, 255, 0.9);
  max-width: 700px;
`;

const Badge5G = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--gradient-secondary);
  color: var(--white);
  padding: 0.6rem 1.5rem;
  border-radius: 25px;
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 15px rgba(255, 122, 0, 0.3);
`;

const PlansGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const MobilePlanCard = styled(motion.div)<{ featured?: boolean }>`
  background: linear-gradient(135deg, #ff7300e6 0%, #ff880075 100%);
  border-radius: 25px;
  padding: 0;
  box-shadow: ${(props) =>
    props.featured
      ? "0 20px 60px rgba(255, 122, 0, 0.4)"
      : "0 15px 40px rgba(0, 0, 0, 0.3)"};
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: ${(props) =>
    props.featured
      ? "3px solid var(--white)"
      : "2px solid rgba(255, 255, 255, 0.3)"};

  &:hover {
    transform: translateY(-15px) scale(1.03);
    box-shadow: ${(props) =>
      props.featured
        ? "0 30px 80px rgba(255, 122, 0, 0.5)"
        : "0 25px 60px rgba(0, 0, 0, 0.4)"};
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="2" fill="rgba(255,255,255,0.2)"/></svg>')
      repeat;
    opacity: 0.4;
    pointer-events: none;
  }
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background: var(--primary-blue);
  color: var(--white);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 10;
`;

const PlanHeader = styled.div`
  padding: 2.5rem 2rem 1.5rem;
  text-align: center;
  position: relative;
`;

const DataAmount = styled.div`
  font-size: 4.5rem;
  font-weight: 900;
  color: var(--primary-blue);
  line-height: 1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const DataUnit = styled.span`
  font-size: 2rem;
  font-weight: 800;
  color: var(--primary-blue);
`;

const PlanDescription = styled.p`
  font-size: 0.85rem;
  color: var(--primary-blue);
  margin-top: 0.5rem;
  font-weight: 600;
  line-height: 1.4;
`;

const PlanContent = styled.div`
  padding: 0 2rem 2rem;
`;

const PlanPrice = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.3rem;
  margin-bottom: 0.5rem;
`;

const Currency = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-blue);
`;

const Price = styled.div`
  font-size: 3.5rem;
  font-weight: 900;
  color: var(--primary-blue);
  line-height: 1;
`;

const PriceDecimals = styled.span`
  font-size: 2rem;
  font-weight: 800;
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
  color: var(--primary-blue);
  font-weight: 600;
  line-height: 1.4;
`;

const FeatureIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--primary-blue);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const PlanButton = styled(Button)`
  width: 100%;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 1.2rem 2rem;
  border-radius: 15px;
  background: var(--primary-blue);
  color: var(--white);
  border: 3px solid var(--primary-blue);
  position: relative;
  overflow: hidden;

  &:hover {
    background: #0a1550;
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(10, 29, 99, 0.4);
  }

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

const MobilePlans: React.FC = () => {
  const mobilePlans = [
    {
      data: "21",
      price: "39,90",
      featured: false,
      features: [
        "10GB + 6GB exclusivo para YouTube",
        "5GB de bônus na portabilidade",
        "1GB de bônus de recarga digital",
        "Ligações ilimitadas",
        "Telefonia celular",
      ],
    },
    {
      data: "26",
      price: "54,90",
      featured: true,
      features: [
        "20GB + 6GB exclusivo para YouTube",
        "5GB de bônus na portabilidade",
        "1GB de bônus de recarga digital",
        "Ligações ilimitadas",
        "Telefonia celular",
      ],
    },
    {
      data: "31",
      price: "64,90",
      featured: false,
      features: [
        "25GB + 6GB exclusivo para YouTube",
        "5GB de bônus na portabilidade",
        "1GB de bônus de recarga digital",
        "Ligações ilimitadas",
        "Telefonia celular",
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
    <MobilePlansSection id="mobile-plans">
      <Container>
        <ContentWrapper>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: "center" }}
          >
            <Badge5G>
              <Smartphone size={20} />
              AGORA É 5G!
            </Badge5G>
            <MobileTitle>Planos Móveis 5G</MobileTitle>
            <MobileSubtitle>
              Planos completos para você falar, navegar e economizar!
              <br />
              Ligações ilimitadas e muito mais internet.
            </MobileSubtitle>
          </motion.div>

          <PlansGrid>
            {mobilePlans.map((plan, index) => (
              <MobilePlanCard
                key={index}
                featured={plan.featured}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {plan.featured && <FeaturedBadge>MAIS POPULAR</FeaturedBadge>}

                <PlanHeader>
                  <DataAmount>
                    {plan.data}
                    <DataUnit>GB</DataUnit>
                  </DataAmount>
                  <PlanDescription>Telefonia Celular</PlanDescription>
                </PlanHeader>

                <PlanContent>
                  <PlanPrice>
                    <PriceContainer>
                      <Currency>R$</Currency>
                      <Price>
                        {plan.price.split(",")[0]}
                        <PriceDecimals>
                          ,{plan.price.split(",")[1]}
                        </PriceDecimals>
                      </Price>
                    </PriceContainer>
                  </PlanPrice>

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

                  <PlanButton onClick={scrollToContact}>
                    Assine Já
                    <ArrowRight size={18} />
                  </PlanButton>
                </PlanContent>
              </MobilePlanCard>
            ))}
          </PlansGrid>
        </ContentWrapper>
      </Container>
    </MobilePlansSection>
  );
};

export default MobilePlans;
