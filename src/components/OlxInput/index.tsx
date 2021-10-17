import React, { useState, useCallback } from 'react';

import * as S from './styles';

type Props = {
  defaultValue?: string;
  label: string;
  width?: string;
};

const OlxInput = ({ defaultValue, label, width }: Props): JSX.Element => {
  const [value, setValue] = useState(defaultValue || '');

  const handleChange = useCallback((event) => setValue(event.target.value), []);

  return (
    <S.Group>
      <S.Input
        type="text"
        value={value}
        onChange={handleChange}
        width={width}
      />
      <S.Label>{label}</S.Label>
    </S.Group>
  );
};

OlxInput.defaultProps = {
  defaultValue: undefined,
  width: '100%',
};

export default OlxInput;
