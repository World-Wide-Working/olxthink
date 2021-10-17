import styled from 'styled-components';

export const Group = styled.div`
  position: relative;
  clear: both;
  margin-top: 17px;
`;

export const Textarea = styled.textarea`
  overflow: visible;

  border-radius: 4px;
  background: #fff;
  border: 1px solid #d2d2d2;
  color: #4a4a4a;
  font-size: 16px;
  font-family: 'MuseoSans-300', 'Arial', 'Helvetica', sans-serif;
  padding: 10px 10px 10px 16px;

  line-height: 1.15;
  margin: 0;

  width: 100%;
  height: 117px;

  resize: vertical;

  &:focus,
  &:not(:empty) {
    box-shadow: 0 0 4px 0 rgb(0 0 0 / 40%);

    outline: none;
    padding-top: 24px;

    & ~ label {
      color: #9027b0;
      font-family: 'MuseoSans-700', 'Arial', 'Helvetica', sans-serif;
      font-size: 11px;
      top: 12px;
    }
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;

  font-family: 'MuseoSans-300', 'Arial', 'Helvetica', sans-serif;
  font-size: 16px;
  color: #999;
  position: absolute;
  pointer-events: none;
  left: 16px;
  top: 18px;
  transition: all 0.3s ease;
`;
