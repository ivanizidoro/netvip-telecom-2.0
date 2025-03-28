import styled from "styled-components";

export const Container = styled.div`
  padding-top: 100px;
  margin: 0 auto;

  max-width: 1200px;
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
