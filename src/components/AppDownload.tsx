import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {Smartphone, Download, Zap, CreditCard, BarChart3, Bell} from 'lucide-react';
import { Container } from '../styles/GlobalStyles';

const AppSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, #0A1D63 0%, #1a3a8a 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>');
    opacity: 0.5;
  }
`;

const AppContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
`;

const AppText = styled.div`
  color: var(--white);
`;

const AppBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 122, 0, 0.2);
  color: var(--light-orange);
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 122, 0, 0.3);
`;

const AppTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 900;
  line-height: 1.2;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  .highlight {
    background: var(--gradient-secondary);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const AppDescription = styled(motion.p)`
  font-size: 1.15rem;
  line-height: 1.7;
  opacity: 0.9;
  margin-bottom: 2rem;
`;

const AppFeatures = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    color: var(--primary-orange);
    flex-shrink: 0;
  }

  div {
    text-align: left;
  }

  strong {
    display: block;
    font-size: 0.95rem;
    margin-bottom: 0.2rem;
  }

  span {
    font-size: 0.85rem;
    opacity: 0.8;
  }
`;

const DownloadButtons = styled(motion.div)`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StoreButton = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  color: var(--white);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  cursor: pointer;

  &:hover {
    background: var(--primary-orange);
    border-color: var(--primary-orange);
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(255, 122, 0, 0.4);
  }

  svg {
    width: 32px;
    height: 32px;
  }

  div {
    text-align: left;
  }

  small {
    display: block;
    font-size: 0.75rem;
    opacity: 0.8;
    font-weight: 400;
  }

  strong {
    display: block;
    font-size: 1.1rem;
  }
`;

const PhoneMockup = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PhoneFrame = styled(motion.div)`
  width: 300px;
  height: 600px;
  background: linear-gradient(145deg, #1a1a1a, #2d2d2d);
  border-radius: 40px;
  padding: 15px;
  box-shadow: 
    0 50px 100px rgba(0, 0, 0, 0.5),
    0 0 0 10px rgba(255, 255, 255, 0.1),
    inset 0 0 50px rgba(255, 255, 255, 0.05);
  position: relative;

  @media (max-width: 768px) {
    width: 250px;
    height: 500px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 25px;
    background: #000;
    border-radius: 0 0 20px 20px;
    z-index: 10;
  }
`;

const PhoneScreen = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  position: relative;
  overflow: hidden;
  background: #0000FF;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;



const FloatingIcon = styled(motion.div)`
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  padding: 1rem;
  color: var(--white);

  &.icon-1 {
    top: 10%;
    right: -20px;
  }

  &.icon-2 {
    bottom: 20%;
    left: -20px;
  }

  &.icon-3 {
    top: 50%;
    right: -30px;
  }
`;

const AppDownload: React.FC = () => {
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.netvipcompany.netviptelecom";

  return (
    <AppSection id="app-download">
      <Container>
        <AppContent>
          <AppText>
            <AppBadge
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Download size={16} />
              Baixe Agora
            </AppBadge>

            <AppTitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Gerencie tudo pelo <span className="highlight">App NETVIP</span>
            </AppTitle>

            <AppDescription
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Baixe o aplicativo oficial da NETVIP TELECOM e tenha total controle 
              da sua internet na palma da mão. Consulte faturas, altere planos, 
              solicite suporte e muito mais!
            </AppDescription>

            <AppFeatures
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Feature>
                <Zap size={24} />
                <div>
                  <strong>Teste de Velocidade</strong>
                  <span>Meça sua conexão</span>
                </div>
              </Feature>
              <Feature>
                <CreditCard size={24} />
                <div>
                  <strong>2ª Via de Boleto</strong>
                  <span>Acesso rápido</span>
                </div>
              </Feature>
              <Feature>
                <BarChart3 size={24} />
                <div>
                  <strong>Consumo em Tempo Real</strong>
                  <span>Monitore seu uso</span>
                </div>
              </Feature>
              <Feature>
                <Bell size={24} />
                <div>
                  <strong>Notificações</strong>
                  <span>Fique sempre informado</span>
                </div>
              </Feature>
            </AppFeatures>

            <DownloadButtons
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <StoreButton href={playStoreUrl} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div>
                  <small>Disponível na</small>
                  <strong>Google Play</strong>
                </div>
              </StoreButton>

              <StoreButton href="#" style={{ opacity: 0.6, pointerEvents: 'none' }}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                <div>
                  <small>Em breve na</small>
                  <strong>App Store</strong>
                </div>
              </StoreButton>
            </DownloadButtons>
          </AppText>

          <PhoneMockup
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <PhoneFrame
              whileHover={{ rotateY: 10, rotateX: 5 }}
              transition={{ duration: 0.3 }}
            >
              <PhoneScreen>
                <img 
                  src="https://static.lumi.new/aa/aa34624fa60ae89034e17d0b1c980086.webp" 
                  alt="NETVIP TELECOM App Interface"
                />
              </PhoneScreen>
            </PhoneFrame>

            <FloatingIcon
              className="icon-1"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Zap size={24} />
            </FloatingIcon>

            <FloatingIcon
              className="icon-2"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Smartphone size={24} />
            </FloatingIcon>

            <FloatingIcon
              className="icon-3"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Download size={24} />
            </FloatingIcon>
          </PhoneMockup>
        </AppContent>
      </Container>
    </AppSection>
  );
};

export default AppDownload;