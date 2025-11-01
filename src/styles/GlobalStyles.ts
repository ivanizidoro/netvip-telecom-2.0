
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-blue: #0A1D63;
    --primary-orange: #FF7A00;
    --light-blue: #4A90E2;
    --light-orange: #FFB366;
    --white: #FFFFFF;
    --light-gray: #F8F9FA;
    --gray: #6C757D;
    --dark-gray: #343A40;
    --gradient-primary: linear-gradient(135deg, #0A1D63 0%, #4A90E2 100%);
    --gradient-secondary: linear-gradient(135deg, #FF7A00 0%, #FFB366 100%);
    --shadow-light: 0 2px 10px rgba(0, 0, 0, 0.1);
    --shadow-medium: 0 8px 25px rgba(0, 0, 0, 0.15);
    --shadow-heavy: 0 15px 35px rgba(0, 0, 0, 0.2);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
    color: var(--dark-gray);
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  button {
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 2.5rem;
  }
`;

export const Section = styled.section`
  padding: 5rem 0;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-blue);
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.1rem;
  color: var(--gray);
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

export const Button = styled.button<{ variant?: 'primary' | 'secondary' | 'outline' }>`
  padding: 0.8rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  ${props => {
    switch (props.variant) {
      case 'secondary':
        return `
          background: var(--gradient-secondary);
          color: var(--white);
          border: 2px solid var(--primary-orange);
          
          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(255, 122, 0, 0.3);
            background: var(--primary-orange);
          }
        `;
      case 'outline':
        return `
          background: transparent;
          color: var(--white);
          border: 2px solid var(--white);
          
          &:hover {
            background: var(--white);
            color: var(--primary-blue);
            transform: translateY(-2px);
          }
        `;
      default:
        return `
          background: var(--gradient-primary);
          color: var(--white);
          border: 2px solid var(--primary-blue);
          
          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(10, 29, 99, 0.3);
            background: var(--primary-blue);
          }
        `;
    }
  }}

  &:active {
    transform: translateY(0);
  }
`;
