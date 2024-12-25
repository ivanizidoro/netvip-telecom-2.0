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

  gap: 100px;

  h1 {
    font-size: 100px;
    font-weight: 900;

    color: rgb(10, 30, 240);
  }

  p {
    font-size: 25px;
    font-weight: 900;

    text-align: justify;
    text-indent: 60px;

    color: rgb(11, 144, 233);
  }
`;
