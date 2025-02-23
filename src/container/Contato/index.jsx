import { useRef } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkedAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { Footer } from "../../components/Footer";
import { Header } from "../Header";
import { Button, Container, ContainerInfo, Input, Textarea } from "./styles";

import emailjs from "@emailjs/browser";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Telefone",
    description: "(81) 3299-7444",
    descriptio1: "",
  },
  {
    icon: <FaWhatsapp />,
    title: "Whatsapp",
    description: "(81)99403-0800 / (81)99789-5571",
    descriptio1: "",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "contato@netviptelecom.com.br",
    descriptio1: "",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Endereço",
    description: "Avenida da bandeira - 291 Carpina-PE",
    description1: "Rua Papa João XXII - 31 Lagoa de itaenga - PE",
    description2: "Rua Sete de Setenbro - Tracunhaem - PE",
  },
];

export function Contato() {
  const form = useRef(); // Referência para o formulário

  // Função para enviar o e-mail
  const sendEmail = (e) => {
    e.preventDefault(); // Evitar recarregamento da página

    emailjs
      .sendForm(
        "service_qyirb41", // Substitua pelo seu Service ID do EmailJS
        "template_lxeqkot", // Substitua pelo seu Template ID do EmailJS
        form.current, // Referência ao formulário
        "QGqRIKmHo0X_nYhkl" // Substitua pela sua Public Key do EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mensagem enviado com sucesso!");
          form.current.reset(); // Limpar o formulário após o envio
        },
        (error) => {
          console.log(error.text);
          alert("Erro ao enviar mensagem. Tente novamente mais tarde.");
        }
      );
  };

  return (
    <>
      <Header />
      <Container>
        <div className="container">
          <div className="div-form-1">
            {/* form */}
            <div className="div-form-2">
              <form className="div-form-3" ref={form} onSubmit={sendEmail}>
                <h3>Escolha o seu melhor plano</h3>
                <p>
                  A internet é o portal para o mundo digital. Para uma navegação
                  fluida, escolha um plano que combine velocidade,
                  confiabilidade e flexibilidade.
                </p>
                {/* input */}
                <div className="div-input grid grid-cols-1 md:grid-cols-2 gap-6 ">
                  <Input
                    type="text"
                    name="firstname"
                    placeholder="Nome"
                    required
                  />
                  <Input
                    type="text"
                    name="lastname"
                    placeholder="Sobrenome"
                    required
                  />
                  <Input
                    type="text"
                    name="text"
                    placeholder="Endereço"
                    required
                  />
                  <Input
                    type="numero"
                    name="numero"
                    placeholder="numero"
                    required
                  />
                  <Input
                    type="text"
                    name="bairro"
                    placeholder="Bairro"
                    required
                  />
                  <Input
                    type="text"
                    name="cidade"
                    placeholder="Cidade"
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Endereço de e-mail"
                    required
                  />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Numero de telefone"
                    required
                  />
                </div>
                {/* select */}
                <label
                  className="select"
                  value=""
                  placeholder="Escolha seu plano:"
                >
                  <select>
                    <option value="">Escolha seu plano:</option>
                    <option value="PLANO 100MB">PLANO 100MB</option>
                    <option value="PLANO 200MB">PLANO 200MB</option>
                    <option value="PLANO 300MB">PLANO 300MB</option>
                    <option value="PLANO 400MB">PLANO 400MB</option>
                    <option value="PLANO 600MB">PLANO 600MB</option>
                    <option value="PLANO 1G">PLANO 1GB</option>
                  </select>
                </label>
                {/* textarea */}
                <Textarea
                  name="message"
                  placeholder="Digite sua mensagem aqui."
                  required
                />
                {/* btn */}
                <Button type="submit">Enviar</Button>
              </form>
            </div>
            {/* info */}
            <ContainerInfo>
              <ul>
                {info.map((item, index) => {
                  return (
                    <li key={index}>
                      <div className="div-1">
                        <div className="div-2">{item.icon}</div>
                      </div>
                      <div className="div-3">
                        <p>{item.title}</p>
                        <h3 className="texto">
                          {item.description} <br />
                          <br />
                          {item.description1} <br />
                          <br />
                          {item.description2}
                        </h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </ContainerInfo>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
