import styled from 'styled-components';

export const Wrapper = styled.ul`
  width: 100%;
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
  border-radius: 4px;
  border: 1px solid #d2d2d2;
  margin-bottom: 10px;
  position: relative;
  padding-left: 0;
`;

export const Item = styled.li`
  padding: 0 10px;

  align-items: center;
  border-bottom: 1px solid #d2d2d2;
  display: flex;
  font-family: 'MuseoSans-300', 'Arial', 'Helvetica', sans-serif;
  font-size: 14px;
  cursor: pointer;

  a {
    align-items: center;
    display: flex;
    height: 45px;
    position: relative;
    width: 100%;
    color: #4a4a4a;
    text-decoration: none;

    span {
      margin: 0 5px;
      vertical-align: middle;
      width: 25px !important;
    }
  }

  .check {
    position: absolute;
    right: 0;
    top: 17px;
    display: none;
  }

  &.active {
    background: #6e0ad6;
    color: #fff;

    a {
      color: #fff;
    }

    .check {
      display: block;
    }
  }
`;
