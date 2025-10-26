import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircleDashed as MessageCircle,
  Send,
  User,
  MessageSquare,
} from "lucide-react";
import {
  Container,
  Section,
  Title,
  Subtitle,
  Button,
} from "../styles/GlobalStyles";

const ContactSection = styled(Section)`
  background: var(--white);
  position: relative;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 3rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled.div`
  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--primary-blue);
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: var(--gray);
    margin-bottom: 2rem;
  }
`;

const ContactCards = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const ContactCard = styled(motion.div)`
  background: var(--white);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: var(--shadow-light);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-medium);
    border-color: var(--primary-orange);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const CardIcon = styled.div<{ color: string }>`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
`;

const CardTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--primary-blue);
`;

const CardContent = styled.div`
  font-size: 1rem;
  color: var(--gray);
  line-height: 1.6;

  strong {
    color: var(--primary-blue);
    font-weight: 600;
  }
`;

const FormContainer = styled(motion.div)`
  background: var(--light-gray);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: var(--shadow-light);
`;

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: var(--primary-blue);
  font-size: 0.95rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
  background: var(--white);

  &:focus {
    outline: none;
    border-color: var(--primary-orange);
    box-shadow: 0 0 0 3px rgba(255, 122, 0, 0.1);
    transform: translateY(-1px);
  }

  &::placeholder {
    color: var(--gray);
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;
  background: var(--white);

  &:focus {
    outline: none;
    border-color: var(--primary-orange);
    box-shadow: 0 0 0 3px rgba(255, 122, 0, 0.1);
    transform: translateY(-1px);
  }

  &::placeholder {
    color: var(--gray);
  }
`;

const SubmitButton = styled(Button)`
  justify-self: start;
  font-weight: 700;
  padding: 1rem 2rem;
  font-size: 1.1rem;
`;

const WhatsAppSection = styled(motion.div)`
  background: var(--gradient-primary);
  color: var(--white);
  padding: 3rem 2rem;
  border-radius: 20px;
  text-align: center;
  margin-top: 3rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="80" r="1.5" fill="rgba(255,255,255,0.1)"/></svg>')
      repeat;
    opacity: 0.3;
  }

  h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    position: relative;
    z-index: 2;
  }

  p {
    font-size: 1.1rem;
    opacity: 0.9;
    margin-bottom: 2rem;
    position: relative;
    z-index: 2;
  }
`;

const WhatsAppButton = styled(Button)`
  background: #25d366;
  border-color: #25d366;
  font-size: 1.1rem;
  padding: 1rem 2.5rem;
  position: relative;
  z-index: 2;

  &:hover {
    background: #1faa52;
    box-shadow: 0 15px 35px rgba(37, 211, 102, 0.4);
    transform: translateY(-3px) scale(1.05);
  }
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode integrar com um serviço de email ou API
    console.log("Form submitted:", formData);
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de conhecer os planos da NETVIP TELECOM."
    );
    window.open(`https://wa.me/5581994030800?text=${message}`, "_blank");
  };

  const contactCards = [
    {
      icon: <Phone size={24} />,
      title: "Telefones",
      content: (
        <div>
          <strong>Vendas:</strong> (81) 99403-0800
          <br />
          <strong>Suporte:</strong> (81) 99789-5547
          <br />
          <strong>Central:</strong> (81) 3499-7444
        </div>
      ),
      color: "var(--gradient-primary)",
    },
    {
      icon: <Mail size={24} />,
      title: "E-mail",
      content: (
        <div>
          <strong>Comercial:</strong> comercial@netviptelecom.com.br
          <br />
          <strong>Suporte:</strong> suporte@netviptelecom.com.br
          <br />
          <strong>Contato:</strong> contato@netviptelecom.com.br
        </div>
      ),
      color: "var(--gradient-secondary)",
    },
    {
      icon: <MapPin size={24} />,
      title: "Sede Principal",
      content: (
        <div>
          <strong>Endereço:</strong>
          <br />
          Avenida da Bandeira, 291
          <br />
          Carpina - PE
        </div>
      ),
      color: "var(--light-blue)",
    },
    {
      icon: <MapPin size={24} />,
      title: "Filiais",
      content: (
        <div>
          <strong>Lagoa de Itaenga:</strong>
          <br />
          Rua Papa João XXII, 31
          <br />
          <br />
          <strong>Tracunhaém:</strong>
          <br />
          Rua Sete de Setembro
        </div>
      ),
      color: "linear-gradient(135deg, #4A90E2, #0A1D63)",
    },
    {
      icon: <Clock size={24} />,
      title: "Horário de Atendimento",
      content: (
        <div>
          <strong>Segunda a Sexta:</strong> 8h às 17:30h
          <br />
          <strong>Sábado:</strong> 8h às 17h
          <br />
          <strong>Suporte Técnico:</strong> 24h
        </div>
      ),
      color: "linear-gradient(135deg, #FF7A00, #FFB366)",
    },
  ];

  return (
    <ContactSection id="contact">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Title>Entre em Contato</Title>
          <Subtitle>
            Estamos prontos para atendê-lo! Entre em contato conosco e descubra
            como a NETVIP TELECOM pode transformar sua experiência digital.
          </Subtitle>
        </motion.div>

        <ContactContent>
          <ContactInfo>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Fale Conosco
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Nossa equipe especializada está sempre disponível para esclarecer
              suas dúvidas, apresentar nossos planos e oferecer o melhor
              atendimento da região.
            </motion.p>

            <ContactCards>
              {contactCards.map((card, index) => (
                <ContactCard
                  key={`${card.title}-${index}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <CardHeader>
                    <CardIcon color={card.color}>{card.icon}</CardIcon>
                    <CardTitle>{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>{card.content}</CardContent>
                </ContactCard>
              ))}
            </ContactCards>
          </ContactInfo>

          <FormContainer
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3
              style={{
                fontSize: "1.8rem",
                fontWeight: "700",
                color: "var(--primary-blue)",
                marginBottom: "1.5rem",
                textAlign: "center",
              }}
            >
              Envie sua Mensagem
            </h3>

            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">
                  <User
                    size={16}
                    style={{ display: "inline", marginRight: "0.5rem" }}
                  />
                  Nome Completo
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Seu nome completo"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">
                  <Mail
                    size={16}
                    style={{ display: "inline", marginRight: "0.5rem" }}
                  />
                  E-mail
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="phone">
                  <Phone
                    size={16}
                    style={{ display: "inline", marginRight: "0.5rem" }}
                  />
                  Telefone
                </Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(81) 99999-9999"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">
                  <MessageSquare
                    size={16}
                    style={{ display: "inline", marginRight: "0.5rem" }}
                  />
                  Mensagem
                </Label>
                <TextArea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Como podemos ajudá-lo?"
                  required
                />
              </FormGroup>

              <SubmitButton type="submit" variant="secondary">
                <Send size={16} />
                Enviar Mensagem
              </SubmitButton>
            </Form>
          </FormContainer>
        </ContactContent>

        <WhatsAppSection
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Atendimento Instantâneo</h3>
          <p>
            Precisa de ajuda imediata? Fale conosco pelo WhatsApp e receba
            atendimento personalizado em tempo real!
          </p>
          <WhatsAppButton onClick={openWhatsApp}>
            <MessageCircle size={20} />
            Chamar no WhatsApp
          </WhatsAppButton>
        </WhatsAppSection>
      </Container>
    </ContactSection>
  );
};

export default Contact;
