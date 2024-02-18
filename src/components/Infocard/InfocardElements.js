import styled from 'styled-components'

export const InfocardContainer = styled.div`
  height: 100vh;
  background: linear-gradient(
    to bottom,
    #121452 0%,
    #210939 50%,
    #350A3F 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  position: relative;

  @media (max-height: 800px) {
    height: auto; /* Adjust the height based on content if viewport height is less than 800px */
  }

  @media (max-width: 850px) {
    height: auto; /* Adjust the height based on content if viewport width is less than 850px */
  }
`;
