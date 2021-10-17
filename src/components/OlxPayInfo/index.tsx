import React from 'react';
import * as S from './styles';

import compraSeguraBadge from '../../images/icons/compra-segura.svg';

const OlxPayInfo = (): JSX.Element => (
  <div>
    <img src={compraSeguraBadge} alt="Compra Segura" />
    <S.InfoParagraph>
      Identificamos o seu produto e fizemos algumas sugestões para o seu
      anúncio. Sinta-se a vontade para editar caso necessário.
    </S.InfoParagraph>
  </div>
);

export default OlxPayInfo;
