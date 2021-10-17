import React, { useCallback } from 'react';

import * as S from './styles';
import { OlxSelectItem } from '../../types';
import CheckIcon from '../../images/icons/check.svg';

type Props = {
  items: OlxSelectItem[];
  onChange: (value: string) => void;
  value: string;
};

const OlxSelect = ({ items, onChange, value }: Props): JSX.Element => {
  const handleChange = useCallback(
    (v: string): void => onChange(v),
    [onChange]
  );

  return (
    <S.Wrapper>
      {items.map(({ name, value: itemValue, icon, iconAlt }) => {
        const isSelected = itemValue === value;

        return (
          <S.Item key={itemValue} className={isSelected ? 'active' : ''}>
            {/* eslint-disable-next-line */}
            <a href="#" onClick={(event) => {
                event.preventDefault();
                handleChange(itemValue);
              }}
            >
              <span>
                <img src={isSelected ? iconAlt : icon} alt={name} />
              </span>
              {name}
              <span className="check">
                <img src={CheckIcon} alt="" />
              </span>
            </a>
          </S.Item>
        );
      })}
    </S.Wrapper>
  );
};

export default OlxSelect;
