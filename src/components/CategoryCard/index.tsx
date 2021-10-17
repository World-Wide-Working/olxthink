/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';

import * as S from './styles';

import { Advertisement } from '../../types';

type Props = {
  data: Advertisement;
};

const CategoryCard = ({ data }: Props): JSX.Element => (
  <S.Box>
    <p className="textOne">
      <span>Categoria identificada</span>
    </p>
    <S.TextCategory>
      <p>
        <span>{data.form.categoryName}</span>
      </p>
    </S.TextCategory>
  </S.Box>
);

export default CategoryCard;
