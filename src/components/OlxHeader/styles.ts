import styled from 'styled-components';

export const Header = styled.header`
  background-color: #fff;
  border-bottom: 1px solid;
  border-color: #e5e5e5;
  min-width: 100%;
`;

export const Wrapper = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  min-height: 84px;
`;

export const Logo = styled.div`
  margin-right: auto;

  img {
    width: 40px;
  }
`;

export const Account = styled.div`
  color: #4a4a4a;
  font-size: 12px;
  line-height: 2.01;
  margin-left: auto;
  text-align: center;
`;

export const AccountMessage = styled.div`
  background-color: #f5ecff;
  border-radius: 100px;
  font-weight: 700;

  p {
    padding: 4px 13px;
    margin: 0;

    font-weight: 500;
  }

  span {
    font-family: 'MuseoSans-300', 'Arial', 'Helvetica', sans-serif;
    font-weight: 400;

    margin-right: 1px;
  }
`;
