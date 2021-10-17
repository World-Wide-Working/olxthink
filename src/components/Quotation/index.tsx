import React from 'react';

import starIcon from '../../images/icons/star-icon.png';
import { Advertisement } from '../../types';

import * as S from './styles';

type Props = {
  data: Advertisement;
};

const Quotation = ({ data }: Props): JSX.Element => (
  <S.Box>
    <h2>Preço Sugerido</h2>
    <S.AveragePrice>
      <p className="averagePrice">
        <span>
          R${' '}
          {new Intl.NumberFormat('pt-BR', {
            maximumSignificantDigits: 2,
          }).format(data.suggestion.quote.average)}
        </span>
      </p>
      <p className="textAverage">
        <img className="starIcon" src={starIcon} alt="star-icon" />
        <span>média de preço</span>
      </p>
    </S.AveragePrice>
    <p className="prices">Média de Preço</p>
    <S.PriceComparition>
      <p className="priceMin">
        <span>
          R${' '}
          {new Intl.NumberFormat('pt-BR', {
            maximumSignificantDigits: 2,
          }).format(data.suggestion.quote.min)}
        </span>
      </p>
      <p className="priceMax">
        <span>
          R${' '}
          {new Intl.NumberFormat('pt-BR', {
            maximumSignificantDigits: 2,
          }).format(data.suggestion.quote.max)}
        </span>
      </p>
    </S.PriceComparition>
  </S.Box>
);

export default Quotation;
