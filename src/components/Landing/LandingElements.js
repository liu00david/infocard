import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

export const LandingContainer = styled.div`
  height: 100vh;
  background: linear-gradient(
    to bottom,
    #350A3F 0%,
    #210939 50%,
    #121452 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
`;

// TypingComponent.js
const typingAnimation = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blinkAnimation = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const TypingContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  margin: 0 0;
  display: inline-block;
  animation: ${typingAnimation} 2s steps(11, end);
`;

const BlinkingUnderscore = styled.span`
  /* border-right: 0.15em solid orange; /* Adjust the color and size as needed */
  margin-left: 0px; /* Adjust spacing between the typed text and underscore */
  animation: ${blinkAnimation} 1s infinite 3s; /* Add a 3s delay before starting blinking */
`;

export const TypingComponent = ({ children }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    const words = children || ''; // Use the provided text or an empty string
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      setText(words.substring(0, currentIndex));
      currentIndex++;

      if (currentIndex > words.length) {
        clearInterval(typingInterval);
      }
    }, 0); // Adjust typing speed as needed

    return () => clearInterval(typingInterval);
  }, [children]);

  return (
    <div>
      <TypingContainer>
        {text}
      </TypingContainer>
      <BlinkingUnderscore>_</BlinkingUnderscore>
    </div>
  );
};
