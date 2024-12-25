import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    gap: 20px;

    justify-content: center;
    align-items: center;
  }

  
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
  }
`;

export const Image = styled.img`
  width: 250px;

  @media (max-width: 768px) {
    width: 150px;
  }
`;

export const NavContainer = styled.div`
  a {
    color: #fff;
    font-size: 18px;
    text-decoration: none;

    font-size: 22px;
    font-weight: 500;

    &:hover {
      color: rgb(69, 169, 250);
    }

    &:active {
      opacity: 0.4;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;

  background: rgb(249, 251, 252);

  border: none;
  border-radius: 10px;

  margin-left: 30px;

  cursor: pointer;

  font-size: 15px;
  font-weight: 700;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.4;
  }

  a {
    color: rgb(69, 169, 250);
    text-decoration: none;
  }

  
  @media (max-width: 768px) {
    width: 150px;
  }
`;
