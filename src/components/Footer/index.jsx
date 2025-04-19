import { ContainerFooter, Contianer } from "./styles";
import Politica from "../../assets/politica.png";

export function Footer() {
  return (
    <Contianer>
      <ContainerFooter>
        <p>
          © COPYRIGHT 2024 NETVIP TELECOM - TODOS OS DIREITOS RESERVADOS
          <br />
          CRIADO POR IVAN IZIDORO.
        </p>
        <a src={Politica}>.</a>
      </ContainerFooter>
    </Contianer>
  );
}
