import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  background: #6e18c8;
  border-radius: 36.5px;
  padding: 1rem 1.5rem;
  border: none;
  color: #ffffff;
  font-weight: 600;
  width: 100%;
  z-index: 10;
  position: relative;
`;

export const ActionButtonOutline = styled.button`
  cursor: pointer;
  background: #ffffff;
  border-radius: 36.5px;
  padding: 1rem 1.5rem;
  border: none;
  color: #6e18c8;
  font-weight: 600;
  width: 100%;
  border: 1px solid #6e18c8;
  margin-bottom: 2rem;
`;

export const PreviewContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  width: 70%;
  height: 100%;
  overflow: hidden;
  padding-top: 10px;
  max-width: 100%;
  overflow-x: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: fit-content;
  border-radius: 5px;
  max-width: 100%;
  overflow-x: hidden;
`;
