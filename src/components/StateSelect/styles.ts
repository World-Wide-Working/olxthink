import styled from 'styled-components';

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 17px;
`;

export const Item = styled.div`
  cursor: pointer;
  width: 100%;

  max-width: calc(50% - 10px);

  display: flex;
  flex-direction: column;

  padding: 18px 18px 36px;
  background-color: #fcfcfc;
  color: #727272;
  border-radius: 20px;

  transition: all 0.3s ease-in-out;

  &.active {
    background-color: #6e18c8;
    color: white;
    filter: drop-shadow(0px 4px 4px rgba(247, 131, 35, 0.64));
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const Dot = styled.div`
  width: 22px;
  height: 22px;

  background: transparent;
  border: 2px solid #727272;
  border-radius: 50%;
  position: relative;

  margin-right: 8px;

  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    background-color: #727272;
    width: 13px;
    height: 13px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: all 0.3s ease-in-out;
  }

  &.active {
    border-color: #ffb829;

    &::after {
      background-color: #ffb829;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

export const Title = styled.h4`
  flex: 1;
  font-size: 15px;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 10px;
  margin-top: 17px;
  margin-bottom: 0;
`;
