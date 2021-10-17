import React from 'react';

import * as S from './styles';

type Props = {
  text: string;
};

const OlxTitle = ({ text }: Props): JSX.Element => (
  <S.Wrapper>
    <S.Heading>{text}</S.Heading>
  </S.Wrapper>
);

export default OlxTitle;
