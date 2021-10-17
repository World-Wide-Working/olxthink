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

export const ActionButton = styled.button`
  cursor: pointer;
  background: #6e18c8;
  border-radius: 36.5px;
  padding: 1rem 1.5rem;
  border: none;
  color: #ffffff;
  font-weight: 600;
  width: 100%;
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
  margin-bottom: 1rem;
`;

export const PreviewContainer = styled.div`
  padding: 1rem;
  background: #6e18c8;
  transform: translate(0, -24px);
  position: relative;
  border-bottom-right-radius: 24.5px;
  border-bottom-left-radius: 24.5px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-top: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: fit-content;
  border-radius: 5px;
`;
