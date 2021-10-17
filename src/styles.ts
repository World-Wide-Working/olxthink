import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  @media (min-width: 576px) {
    max-width: 500px;
    max-height: 90vh;
    background-color: white;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 4px;
    overflow-y: auto;
  }
`;

export const ContentWrapper = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 0 30px;
  margin-bottom: 30px;
  position: relative;
`;
