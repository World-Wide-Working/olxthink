import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  background: ${({ color }) => color || '#f78323'};
  border-radius: 36.5px;
  padding: 1rem 1.5rem;
  margin-top: 20px;
  border: none;
  color: #ffffff;
  font-weight: 600;
  width: 100%;
`;

export default Button;
