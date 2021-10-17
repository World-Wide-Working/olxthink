import React from 'react';
import treeIcons from '../../images/icons/tree-icon.svg';
import * as S from './styles';

const Sustainability = (): JSX.Element => (
  <S.Box>
    <p>
      <span>
        Vendendo esse produto você ajuda a{' '}
        <strong>evitar o descarte desnecessário!</strong>
      </span>
    </p>
    <img src={treeIcons} alt="" />
  </S.Box>
);

export default Sustainability;
