import styled from "styled-components";

export const Contianer = styled.div`
  max-width: 1200px;
  margin: 100px auto;


  @media (max-width: 768px) {
      margin: 20px 20px;
    }
`;

export const ContianerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 50px;

  h1 {
    font-size: 60px;
    font-weight: 800;

    color: rgb(0, 6, 92);

    @media (max-width: 768px) {
      font-size: 50px;
    }
  }

  p {
    text-indent: 40px;

    font-size: 20px;
    text-align: justify;

    color: rgb(0, 6, 92);

    @media (max-width: 768px) {
      font-size: 15px;

      margin-top: -30px;
    }
  }
`;
