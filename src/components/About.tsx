import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Users, Award, Zap, Shield, MapPin, Clock } from "lucide-react";
import { Container, Section, Title, Subtitle } from "../styles/GlobalStyles";

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin: 5rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutText = styled.div`
  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--primary-blue);
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--gray);
    margin-bottom: 1.5rem;
  }
`;

const AboutImage = styled.div`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
`;

const AboutImg = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const StatCard = styled(motion.div)`
  background: var(--white);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-left: 4px solid var(--primary-orange);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StatIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary-blue), var(--light-blue));
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: var(--white);
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--primary-blue);
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: var(--gray);
  font-weight: 500;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ValueCard = styled(motion.div)`
  background: var(--white);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }

  h4 {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--primary-blue);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  p {
    color: var(--gray);
    line-height: 1.6;
  }
`;

const About: React.FC = () => {
  const stats = [
    {
      icon: <Users size={24} />,
      number: "2K+",
      label: "Clientes Atendidos",
    },
    {
      icon: <MapPin size={24} />,
      number: "2+",
      label: "Cidades Cobertas",
    },
    {
      icon: <Award size={24} />,
      number: "12",
      label: "Anos de Experiência",
    },
    {
      icon: <Clock size={24} />,
      number: "99.9%",
      label: "Uptime Garantido",
    },
  ];

  const values = [
    {
      icon: <Zap size={20} />,
      title: "Tecnologia de Ponta",
      description:
        "Utilizamos fibra óptica de última geração para garantir a melhor velocidade e estabilidade da conexão.",
    },
    {
      icon: <Shield size={20} />,
      title: "Segurança Total",
      description:
        "Sua conexão é protegida com os mais altos padrões de segurança digital e criptografia avançada.",
    },
    {
      icon: <Users size={20} />,
      title: "Suporte Especializado",
      description:
        "Nossa equipe técnica está disponível 24h por dia para garantir que você tenha a melhor experiência.",
    },
  ];

  return (
    <Section id="about">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Title>Sobre a NETVIP TELECOM</Title>
          <Subtitle>
            Há mais de 12 anos conectando pessoas e empresas com tecnologia de
            ponta
          </Subtitle>
        </motion.div>

        <AboutContent>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AboutText>
              <h3>Nossa Missão</h3>
              <p>
                A NETVIP TELECOM nasceu com o propósito de democratizar o acesso
                à internet de alta qualidade, oferecendo soluções inovadoras em
                telecomunicações para residências e empresas.
              </p>
              <p>
                Com uma infraestrutura robusta de fibra óptica e tecnologia de
                ponta, garantimos conexões ultrarrápidas, estáveis e seguras
                para todos os nossos clientes.
              </p>
              <p>
                Nossa equipe é formada por profissionais especializados que
                trabalham 24 horas por dia para manter a excelência em nossos
                serviços e o melhor atendimento ao cliente.
              </p>
            </AboutText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AboutImage>
              <AboutImg
                src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Equipe NETVIP TELECOM"
              />
            </AboutImage>
          </motion.div>
        </AboutContent>

        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <StatIcon>{stat.icon}</StatIcon>
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsGrid>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Title style={{ marginTop: "4rem", marginBottom: "1rem" }}>
            Nossos Diferenciais
          </Title>
          <Subtitle>
            O que nos torna únicos no mercado de telecomunicações
          </Subtitle>
        </motion.div>

        <ValuesGrid>
          {values.map((value, index) => (
            <ValueCard
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h4>
                {value.icon}
                {value.title}
              </h4>
              <p>{value.description}</p>
            </ValueCard>
          ))}
        </ValuesGrid>
      </Container>
    </Section>
  );
};

export default About;
