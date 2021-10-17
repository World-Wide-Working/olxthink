import styled from 'styled-components';

export const Box = styled.div`
  padding: 5px 30px;
  padding-bottom: 30px;
  background-color: #f9f4ff;
  border: 2px solid #f1edf7;
  border-radius: 25px;

  img {
    width: 14px;
    height: 14px;
  }

  h2 {
    color: #4d4e51;
    margin-bottom: 0;
    text-align: center;
  }

  .prices {
    font-size: 15px;
    font-weight: bold;
    color: #a55aff;
    margin-bottom: 7px;
    margin-top: 0;
  }
`;

export const AveragePrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .textAverage {
    color: #a55aff;
    font-weight: bolder;
    align-self: center;
    margin-top: 0;
    font-size: 13px;
  }

  .starIcon {
    margin-right: 5px;
  }

  .averagePrice {
    font-weight: 500;
    font-size: 20px;
    color: #4d4e51;
    margin-top: 0;
    margin-bottom: 2px;
  }
`;

export const averageMediator = styled.div`
  width: 40px;
  position: relative;
  border: 1px solid #a55aff;

  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    background-color: #a55aff;
    top: 50%;
    right: 0;
    width: 7px;
    height: 7px;
    transform: translate(50%, -50%);
  }

  &::before {
    content: '';
    position: absolute;
    border-radius: 50%;
    background-color: #a55aff;
    top: 50%;
    left: 0;
    width: 7px;
    height: 7px;
    transform: translate(-50%, -50%);
  }
`;

export const PriceComparition = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 0;

  p {
    font-weight: 400;
    font-size: 15px;
    color: #4d4e51;
    text-align: justify;
  }

  .priceMin {
    margin-top: 0;
    margin-bottom: 0;

    &::before {
      content: 'Min';
      margin-right: 2px;
      font-size: 12px;
      font-weight: bold;
      color: #a55aff;
    }
  }

  .priceMax {
    margin-top: 0;
    margin-bottom: 0;

    &::before {
      content: 'Max';
      margin-right: 2px;
      font-size: 12px;
      font-weight: bold;
      color: #a55aff;
    }
  }
`;
