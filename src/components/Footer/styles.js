import styled from "styled-components";

export const Contianer = styled.div`
  background-color: rgb(0, 6, 92);
`;

export const ContainerFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  max-width: 1200px;
  margin: 0 auto;

  height: 100px;

  p {
    color: #fff;
    font-size: 15px;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 9px;
    }
  }
`;
