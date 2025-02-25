import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
`;

export const ContainerRedesSociais = styled.div`
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 20px;

  background:rgb(228, 123, 48);

  a{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    font-size: 17px;

    text-decoration: none;
    cursor: pointer;

    &:hover{
      opacity: 0.8;
    }

    &:active{
      color: #161678;
    }


    color: #ffff;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 9px;
      font-weight: 400;
      gap: 3px;
    }
  }
`;

export const ContainerDiv = styled.div`
  height: 100px;

  background: #161678;

  @media (max-width: 768px) {
    height: 70px;
  }
`;
