import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  padding: 0 20px;
`;

export const Image = styled.img`
  width: 100px;

  margin-top: 60px;
`;

export const Title = styled.h2`
  color: #4a4a4a;
  font-weight: 600;

  margin-bottom: 0;
`;

export const Description = styled.p`
  color: #4a4a4a;
  text-align: center;

  margin-top: 10px;
  margin-bottom: 0;
`;
