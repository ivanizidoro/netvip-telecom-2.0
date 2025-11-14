import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  padding: 1rem;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  @media (max-width: 768px) {
    padding: 0.5rem;
    align-items: center;
  }
`;

const ModalContent = styled(motion.div)`
  position: relative;
  max-width: 600px;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.5);
  margin: auto;

  @media (max-width: 768px) {
    max-width: 92%;
    width: 92%;
    border-radius: 12px;
    max-height: 90vh;
    overflow-y: auto;
  }

  @media (max-width: 480px) {
    max-width: 95%;
    width: 95%;
  }
`;

const PromoImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;

  @media (max-width: 768px) {
    max-height: 80vh;
    object-fit: contain;
  }
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  backdrop-filter: blur(10px);
  z-index: 10;
  transition: all 0.3s ease;
  touch-action: manipulation;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: rotate(90deg) scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
    top: 0.75rem;
    right: 0.75rem;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    top: 0.5rem;
    right: 0.5rem;
  }
`;

interface WelcomePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const WelcomePopup: React.FC<WelcomePopupProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <ModalContent
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <X size={24} color="white" />
            </CloseButton>

            <PromoImage
              src="https://cdn-static-lumi.artvibe.ai/c3/c32945504e128bc126471a2adbe05a85.webp"
              alt="Net VIP agora é 5G - Planos Móveis"
            />
          </ModalContent>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

export default WelcomePopup;
