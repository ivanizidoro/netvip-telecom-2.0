import { BsInstagram, BsTelephone, BsWhatsapp } from "react-icons/bs";
import { Nav } from "../../components/Nav";
import { Container, ContainerDiv, ContainerRedesSociais } from "./styles";
import { FaEnvelope } from "react-icons/fa";

export function Header() {
  return (
    <Container>
      <ContainerRedesSociais>
        <a href="https://www.instagram.com/netvipprovedor" target="_blank">
          <BsInstagram />
          <p>@nnetvipprovedor</p>
        </a>
        <a href="https://api.whatsapp.com/send?phone=558199400800" target="_blank">
          <BsWhatsapp />
          <p>(81)99403-0800 / (81)99789-5571</p>
        </a>
        <a href="tel:8132997444" target="_blank">
          <BsTelephone />
          <p>(81) 3299-7444</p>
        </a>
        <a href="mailto:contato@netviptelecom.com.br" target="_blank"> 
          <FaEnvelope />
          <p>contato@netviptelecom.com.br</p>
        </a>
      </ContainerRedesSociais>
      <ContainerDiv>
        <Nav />
      </ContainerDiv>
    </Container>
  );
}
