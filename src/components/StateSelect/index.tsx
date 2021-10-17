import React, { useCallback } from 'react';

import * as S from './styles';

type Item = {
  name: string;
  value: string;
  description: string;
};

type Props = {
  onChange: (value: string) => void;
  value: string;
};

const items: Item[] = [
  {
    name: 'Excelente',
    value: 'EXCELLENT',
    description:
      'Poucos sinais de uso, como pequenos arranhões; sem acessórios; garantia de 90 dias.',
  },
  {
    name: 'Muito bom',
    value: 'VERY_GOOD',
    description:
      'Alguns sinais de uso, porém leves. Podem ser arranhões, riscos e/ou amassados; sem acessórios; garantia de 90 dias.',
  },
  {
    name: 'Bom',
    value: 'GOOD',
    description:
      'Diversos sinais de uso mais nítidos, com arranhões, riscos e amassados; sem acessórios; garantia de 90 dias.',
  },
  {
    name: 'Bom com restrições',
    value: 'MIXED',
    description:
      'Diversos sinais de uso mais nítidos, com arranhões, riscos e amassados; sem acessórios.',
  },
];

const StateSelect = ({ onChange, value }: Props): JSX.Element => {
  const handleChange = useCallback(
    (v: string): void => onChange(v),
    [onChange]
  );

  return (
    <S.Grid>
      {items.map(({ name, value: currentValue, description }) => {
        const isSelected = currentValue === value;

        return (
          <S.Item
            key={currentValue}
            onClick={() => handleChange(currentValue)}
            className={isSelected ? 'active' : ''}
          >
            <S.Header>
              <S.Dot className={isSelected ? 'active' : ''} />
              <S.Title>{name}</S.Title>
            </S.Header>
            <S.Description>{description}</S.Description>
          </S.Item>
        );
      })}
    </S.Grid>
  );
};

export default StateSelect;
