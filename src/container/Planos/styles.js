import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 20px;


  p{
    color: rgb(69, 169, 250);
    font-size: 24px;

    @media (max-width: 768px) {
      font-size: 24px;
      margin: 20px;
      text-align: center;
    }
  }
`;

export const H2 = styled.h2`
  font-size: 60px;

  color: rgb(69, 169, 250);

  margin-top: 80px;

  @media (max-width: 768px) {
      font-size: 50px;
    }

`;

export const ContainerPlanos = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  margin-top: 50px;


  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    text-align: center;
    align-items: center;

    margin-bottom: 60px;
  }

  img {
    width: 350px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 190px;
    height: 40px;

    margin-top: 20px;

    border: none;
    border-radius: 10px;

    background: rgb(69, 169, 250);
    color: #fff;
    
    font-size: 23px;
    font-weight: 700;

    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }

    &:active {
      opacity: 0.4;
    }

  }
`;

export const Button = styled.button``;
