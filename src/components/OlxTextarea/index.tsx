import React, { useState, useCallback } from 'react';

import * as S from './styles';

type Props = {
  defaultValue?: string;
  label: string;
};

const OlxTextarea = ({ defaultValue, label }: Props): JSX.Element => {
  const [value, setValue] = useState(defaultValue || '');

  const handleChange = useCallback((event) => setValue(event.target.value), []);

  return (
    <S.Group>
      <S.Textarea value={value} onChange={handleChange} />
      <S.Label>{label}</S.Label>
    </S.Group>
  );
};

OlxTextarea.defaultProps = {
  defaultValue: undefined,
};

export default OlxTextarea;
