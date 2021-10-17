import React from 'react';

import * as S from './styles';

type Props = {
  text: string;
};

const Label = ({ text }: Props): JSX.Element => <S.Heading>{text}</S.Heading>;

export default Label;
