import styled, { keyframes } from 'styled-components';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  place-content: center;

  height: 100vh;
  align-items: stretch;

  animation: ${appearFromLeft} 5s;
`;
