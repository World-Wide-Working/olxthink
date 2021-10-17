import styled from 'styled-components';

export const Box = styled.div`
  padding: 0 20px;
  padding-bottom: 20px;
  background-color: #fffaf5;
  border: 2px solid #f78323;
  border-radius: 10px;
  word-break: keep-all;
  text-align: justify;
  display: flex;
  align-items: flex-start;

  img {
    width: 25px;
    height: 25px;
    margin-top: 20px;
  }
`;

export const Text = styled.div`
  margin-left: 15px;
  .secureText {
    color: #f78323;
    margin-bottom: 0;
  }
`;
