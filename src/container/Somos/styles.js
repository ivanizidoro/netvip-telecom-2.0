import styled from "styled-components";


export const Container = styled.div`
  height: 100vh;
  
`;

export const ContainerDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 50px;

  h1 {
    font-size: 100px;
    font-weight: 900;

    color: rgb(67, 81, 243);

    @media (max-width: 768px) {
      font-size: 40px;

      padding-top: 200px;
    }
  }

  p {
    font-size: 25px;
    font-weight: 900;

    text-align: justify;
    text-indent: 60px;

    color: rgb(11, 144, 233);

    @media (max-width: 768px) {
      weight: 100px;
      font-size: 15px;
      justify-content: center;
      text-align: justify;

      margin: 0 20px;
    }
  }
`;
