import styled from 'styled-components';

export const Box = styled.div`
  padding: 0 30px;
  padding-bottom: 30px;
  background-color: #f9f4ff;
  border: 2px solid #f1edf7;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .textOne {
    color: #6e18c8;
    font-weight: bold;
    font-size: 20px;
  }
`;

export const IconCategory = styled.div`
  margin-left: 0;
`;

export const IconArrow = styled.div`
  margin-left: 40px;
  span {
    cursor: pointer;
    transition: all 0.3s ease;

    img {
      transition: all 0.3s ease;
      transform: rotate(90deg);
    }

    &.rotation {
      img {
        transform: rotate(270deg);
      }
    }
  }
`;

export const TextCategory = styled.div`
  display: flex;
  margin-bottom: 0;
  margin-top: 0;
  align-items: center;
  color: #4d4e51;
  font-weight: 700;

  p {
    margin: 0;
  }

  img {
    margin-top: 4px;
  }
`;
