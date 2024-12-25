import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 30px;

  background: rgb(0, 6, 36);
  background: linear-gradient(
    90deg,
    rgba(0, 6, 36, 0.8267682072829132) 0%,
    rgba(10, 61, 240, 1) 73%,
    rgba(5, 26, 242, 0.7259278711484594) 99%
  );

  .localização {
    font-size: 60px;
    color: rgb(0, 6, 92);

    @media (max-width: 768px) {
      font-size: 40px;

      margin-top: 20px;

      color: #fff;
    }
  }

  .cidade {
    font-size: 24px;
    font-weight: 900;

    color: #fff;

  }
`;

export const ContainerMap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 100px;

  @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
`;

export const ContainerCarpina = styled.div`
  iframe {
    width: 500px;
    height: 300px;

    @media (max-width: 768px) {
      width: 370px;
    }
  }
`;

export const ContainerLagoa = styled.div`
  iframe {
    width: 500px;
    height: 300px;

    @media (max-width: 768px) {
      width: 370px;
    }
  }
`;
