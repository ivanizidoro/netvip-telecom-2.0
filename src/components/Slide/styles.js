import styled from "styled-components";

export const Container = styled.div`
  padding-top: 100px;
`;

export const ContianerSlide = styled.div`
  .slider-item {
    width: 100%;
    height: 800px;
    object-fit: cover;

    @media (max-width: 768px) {
      height: 250px;
    }
  }
`;
