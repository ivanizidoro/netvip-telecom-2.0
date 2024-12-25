import { Container, ContainerCarpina, ContainerLagoa, ContainerMap } from "./styles";

export function Localizacao() {
  return (
    <Container>
      <h2 className="localização">Nossa Localização</h2>
      <ContainerMap>
      <ContainerCarpina>
        <h2 className="cidade">Carpina -PE</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6546.213852543673!2d-35.25638422321926!3d-7.849866192171682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aba1e4278add25%3A0xbf498d0759c54990!2sNETVIP%20Provedor%20de%20Internet!5e1!3m2!1spt-BR!2sbr!4v1735130535202!5m2!1spt-BR!2sbr"></iframe>
      </ContainerCarpina>
      <ContainerLagoa>
        <h2 className="cidade">Lagoa de itaenga - PE</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1636.2210698527076!2d-35.29328813032378!3d-7.933826499505621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aba67aa4262a2f%3A0x4761ad9d4897a2eb!2sCOORDENADORIA%20DA%20MULHER!5e1!3m2!1spt-BR!2sbr!4v1735131183877!5m2!1spt-BR!2sbr"></iframe>
      </ContainerLagoa>
      </ContainerMap>
    </Container>
  );
}
