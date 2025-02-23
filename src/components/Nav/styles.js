import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  color: white;
  position: relative;

  div {
    display: flex;
    gap: 20px;

    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Image = styled.img`
  width: 250px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 150px;
  }
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 25px;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: #fff;
    font-size: 18px;
    text-decoration: none;

    font-size: 22px;
    font-weight: 500;

    padding: 10px;

    &:hover {
      color: rgb(69, 169, 250);
    }

    &:active {
      opacity: 0.4;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: ${({ isOpen }) => (isOpen ? "100vh" : "0")};
    background: rgba(0, 30, 91, 0.8); /* Azul escuro com opacidade */
    overflow: hidden;
    transition: height 0.4s ease-in-out;
    z-index: 1000;
  }
`;

export const Button = styled.button`
  width: 190px;
  height: 40px;

  background: rgb(249, 251, 252);

  padding: 10px 20px;
  border-radius: 5px;
  border: none;

  a {
    color: white;
    text-decoration: none;
  }

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.4;
  }

  a {
    color: rgb(31, 149, 247);
    text-decoration: none;
    font-size: 14px;
    font-weight: 900;
  }

  @media (max-width: 768px) {
    width: 150px;

    a {
    font-size: 9.7px;
  }
  }
`;
