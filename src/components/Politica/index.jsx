import { Container, Containerdiv, H1, H2, P } from "./styles";

export const Politica = () => {
  return (
    <Container>
      <Containerdiv>
        <H1>Política de Privacidade - Netvip Telecom</H1>
        <P>
          A Netvip Telecom valoriza sua privacidade e se compromete a proteger
          os dados pessoais de seus clientes. Esta politica de privacidade
          explica como coletamos, usamos e compartilhamos suas informações ao
          utilizar nosso aplicativo.
        </P>
        <H2>1. Informações Coletadas</H2>
        <P>
          Ao utilizar nosso aplicativo, podemos coletar as seguintes:
          <br />
          <br />
          Dados pessoais: Nome, endereço de e-mail, número de telefone e CPF.
          <br />
          <br />
          Dados do serviço: Plano de internet contratado, historio de ordens de
          serviços e boletos emitidos.
        </P>
        <H2>2. Uso das Informações</H2>
        <P>
          As informações coletadas podem ser utilizadas para:
          <br />
          <br />
          Disponibilizar acessos aos boletos, planos contratados e outras
          informações relacionadas ao serviço.
          <br />
          Facilitar o contato com a nossa central de atendimento.
          <br />
          Permitir a abertura de ordens de serviços pelo cliente.
          <br />
          Melhorar e personalizar a experiência do usuário no aplicativo.
          <br />
        </P>
        <H2>3. Compartilhamento de Informações</H2>
        <P>
          Seus dados não serão compartilhados com terceiros, exceto quando
          necessário para:
          <br />
          <br />
          Cumprir obrigações legais.
          <br />
          Garantira operação do aplicativo (ex: processamento de pagamentos).
        </P>
        <H2>4. Segurança das Informações</H2>
        <P>
          Implementamos medidas de segurança para proteger suas informações
          contra acesso não autorizado, uso indevido e alteração. No entanto,
          nenhuma tecnologia é 100% segura, e recomendamos que você também
          proteja suas credenciais de acesso .
        </P>
        <H2>5. Direitos do Usuário</H2>
        <P>
          De acordo com a LGPD (lei Geral de Proteção de Dados), você tem os
          seguintes direitos em relação aos seus dados pessoais:
          <br />
          <br />
          Solicitar a exclusão de seus dados pessoais.
          <br />
          Acessar ou corrigir as informações cadastradas.
          <br />
          Retirar consentimento para o uso de seus dados.
        </P>
        <H2>6. Contato</H2>
        <P>
          Se você tiver alguma dúvida ou preocupação sobre nossa política de
          privacidade ou o uso de seus dados pessoais, entre em contato conosco
          através do{" "}
          <span style={{ color: "black", fontWeight: "bold" }}>
            e-mail: contato@netviptelecom.com.br
          </span>
        </P>
      </Containerdiv>
    </Container>
  );
};
