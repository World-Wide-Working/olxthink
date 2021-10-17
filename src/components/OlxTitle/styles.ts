import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 32px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;

  &::after {
    content: ' ';
    display: block;
    clear: both;
  }
`;

export const Heading = styled.h2`
  font-family: 'MuseoSans-500', 'Arial', 'Helvetica', sans-serif;
  font-size: 25px;
  color: #4a4a4a;
  text-align: center;

  margin: 25px 0 4px;
`;
