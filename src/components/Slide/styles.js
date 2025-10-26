import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const ContianerSlide = styled.div`
  .slider-item {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (max-width: 768px) {
      height: 100%;
    }
  }
`;
