import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  TrendingUp,
  Heart,
  Upload,
  Send,
  CheckCircle,
} from "lucide-react";
import { Container } from "../styles/GlobalStyles";

const CareersSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="10" cy="10" r="1" fill="rgba(10,29,99,0.03)"/><circle cx="90" cy="30" r="1" fill="rgba(255,122,0,0.03)"/><circle cx="30" cy="90" r="1" fill="rgba(10,29,99,0.03)"/></svg>')
      repeat;
    opacity: 0.5;
  }
`;

const CareersHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  z-index: 2;
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 900;
  color: var(--primary-blue);
  margin-bottom: 1rem;

  span {
    color: var(--primary-orange);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  position: relative;
  z-index: 2;
`;

const BenefitCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(255, 122, 0, 0.15);
  }
`;

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, var(--primary-orange), #ff9d42);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
`;

const BenefitTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--primary-blue);
  margin-bottom: 0.8rem;
`;

const BenefitDescription = styled.p`
  color: #666;
  line-height: 1.7;
  font-size: 0.95rem;
`;

const FormSection = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 30px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const FormTitle = styled.h3`
  font-size: 2rem;
  font-weight: 800;
  color: var(--primary-blue);
  margin-bottom: 0.5rem;
  text-align: center;
`;

const FormSubtitle = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 2.5rem;
  font-size: 1.05rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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
  padding: 1rem 1.2rem;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #f8f9fa;

  &:focus {
    outline: none;
    border-color: var(--primary-orange);
    background: white;
    box-shadow: 0 5px 15px rgba(255, 122, 0, 0.1);
  }
`;

const Select = styled.select`
  padding: 1rem 1.2rem;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #f8f9fa;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: var(--primary-orange);
    background: white;
    box-shadow: 0 5px 15px rgba(255, 122, 0, 0.1);
  }
`;

const TextArea = styled.textarea`
  padding: 1rem 1.2rem;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;
  background: #f8f9fa;

  &:focus {
    outline: none;
    border-color: var(--primary-orange);
    background: white;
    box-shadow: 0 5px 15px rgba(255, 122, 0, 0.1);
  }
`;

const FileUploadWrapper = styled.div`
  position: relative;
`;

const FileInput = styled.input`
  display: none;
`;

const FileLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1.5rem;
  border: 2px dashed #e0e0e0;
  border-radius: 12px;
  background: #f8f9fa;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #666;
  font-weight: 600;

  &:hover {
    border-color: var(--primary-orange);
    background: rgba(255, 122, 0, 0.05);
    color: var(--primary-orange);
  }

  &.has-file {
    border-color: #4caf50;
    background: rgba(76, 175, 80, 0.05);
    color: #4caf50;
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(135deg, var(--primary-orange), #ff9d42);
  color: white;
  border: none;
  padding: 1.2rem 3rem;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 1rem;
  box-shadow: 0 10px 25px rgba(255, 122, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 35px rgba(255, 122, 0, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled(motion.div)`
  background: linear-gradient(135deg, #4caf50, #66bb6a);
  color: white;
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 10px 30px rgba(76, 175, 80, 0.3);

  h3 {
    font-size: 1.8rem;
    font-weight: 800;
    margin: 0;
  }

  p {
    font-size: 1.1rem;
    margin: 0;
    opacity: 0.95;
  }
`;

const Careers: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
    resume: null as File | null,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const benefits = [
    {
      icon: <Briefcase size={30} />,
      title: "Carreira Sólida",
      description:
        "Plano de carreira estruturado com oportunidades reais de crescimento profissional",
    },
    {
      icon: <Users size={30} />,
      title: "Equipe Incrível",
      description:
        "Trabalhe com profissionais qualificados em um ambiente colaborativo e dinâmico",
    },
    {
      icon: <TrendingUp size={30} />,
      title: "Desenvolvimento",
      description:
        "Treinamentos constantes e investimento no seu desenvolvimento profissional",
    },
    {
      icon: <Heart size={30} />,
      title: "Qualidade de Vida",
      description:
        "Benefícios competitivos e ambiente de trabalho que valoriza o bem-estar",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        message: "",
        resume: null,
      });
    }, 5000);
  };

  return (
    <CareersSection id="careers">
      <Container>
        <CareersHeader>
          <Title
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Trabalhe <span>Conosco</span>
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Faça parte da equipe NETVIP TELECOM e construa sua carreira em uma
            das empresas mais inovadoras do setor de telecomunicações!
          </Subtitle>
        </CareersHeader>

        <BenefitsGrid>
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <IconWrapper>{benefit.icon}</IconWrapper>
              <BenefitTitle>{benefit.title}</BenefitTitle>
              <BenefitDescription>{benefit.description}</BenefitDescription>
            </BenefitCard>
          ))}
        </BenefitsGrid>

        <FormSection>
          {!isSubmitted ? (
            <>
              <FormTitle>Candidate-se Agora</FormTitle>
              <FormSubtitle>
                Preencha o formulário abaixo e envie seu currículo. Entraremos
                em contato em breve!
              </FormSubtitle>

              <Form onSubmit={handleSubmit}>
                <FormRow>
                  <FormGroup>
                    <Label htmlFor="name">Nome Completo *</Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Seu nome completo"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="seu@email.com"
                    />
                  </FormGroup>
                </FormRow>

                <FormRow>
                  <FormGroup>
                    <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="(11) 99999-9999"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="position">Área de Interesse *</Label>
                    <Select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Selecione uma área</option>
                      <option value="tecnico">Técnico de Instalação</option>
                      <option value="suporte">Suporte Técnico</option>
                      <option value="vendas">Vendas/Comercial</option>
                      <option value="atendimento">
                        Atendimento ao Cliente
                      </option>
                      <option value="ti">Tecnologia da Informação</option>
                      <option value="administrativo">Administrativo</option>
                      <option value="outros">Outras Áreas</option>
                    </Select>
                  </FormGroup>
                </FormRow>

                <FormGroup>
                  <Label htmlFor="experience">Experiência Profissional</Label>
                  <Select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                  >
                    <option value="">Selecione seu nível de experiência</option>
                    <option value="sem-experiencia">Sem experiência</option>
                    <option value="menos-1-ano">Menos de 1 ano</option>
                    <option value="1-3-anos">1 a 3 anos</option>
                    <option value="3-5-anos">3 a 5 anos</option>
                    <option value="mais-5-anos">Mais de 5 anos</option>
                  </Select>
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="message">Mensagem (opcional)</Label>
                  <TextArea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Conte-nos um pouco sobre você e por que gostaria de trabalhar na NETVIP..."
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="resume">Currículo (PDF ou DOC) *</Label>
                  <FileUploadWrapper>
                    <FileInput
                      type="file"
                      id="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      required
                    />
                    <FileLabel
                      htmlFor="resume"
                      className={formData.resume ? "has-file" : ""}
                    >
                      {formData.resume ? (
                        <>
                          <CheckCircle size={20} />
                          <span>{formData.resume.name}</span>
                        </>
                      ) : (
                        <>
                          <Upload size={20} />
                          <span>Clique para fazer upload do currículo</span>
                        </>
                      )}
                    </FileLabel>
                  </FileUploadWrapper>
                </FormGroup>

                <SubmitButton
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  Enviar Candidatura
                </SubmitButton>
              </Form>
            </>
          ) : (
            <SuccessMessage
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircle size={60} />
              <h3>Candidatura Enviada!</h3>
              <p>
                Recebemos seu currículo com sucesso. Nossa equipe de RH
                analisará sua candidatura e entraremos em contato em breve.
                Obrigado pelo interesse em fazer parte da NETVIP!
              </p>
            </SuccessMessage>
          )}
        </FormSection>
      </Container>
    </CareersSection>
  );
};

export default Careers;
