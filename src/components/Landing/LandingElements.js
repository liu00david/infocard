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
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
`;

const TypingContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  margin: auto;
  display: inline-block;
  animation: ${typingAnimation} 1s steps(40, end);
`;

const BlinkingUnderscore = styled.span`
  margin-left: 0px; /* Adjust spacing between the typed text and underscore */
  animation: ${blinkAnimation} 1s infinite 3s; /* Add a 3s delay before starting blinking */
`;

export const TypingComponent = ({ children }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    const words = children || ''; // Use the provided text or an empty string
    let currentIndex = -5;

    const typingInterval = setInterval(() => {
      setText(words.substring(1, currentIndex));
      currentIndex++;

      if (currentIndex > words.length) {
        clearInterval(typingInterval);
      }
    }, 200); // Adjust typing speed as needed

    const timeoutId = setTimeout(() => {
      setText('');
    }, 5000);

    return () => clearTimeout(timeoutId);
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
