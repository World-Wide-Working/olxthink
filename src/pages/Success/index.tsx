import React from 'react';
import { Link } from 'react-router-dom';

import SuccessIcon from '../../images/icons/success.svg';
import Button from '../../components/Button';

import * as S from './styles';

const Success = (): JSX.Element => (
  <S.Wrapper>
    <S.Image src={SuccessIcon} alt="" />
    <S.Title>Anúncio em análise!</S.Title>
    <S.Description>
      O seu anúncio está em processo de publicação. Em breve nós te enviaremos
      um e-mail com o status do seu anúncio.
    </S.Description>
    <Link to="/">
      <Button color="#6e18c8">Criar um novo anúncio</Button>
    </Link>
  </S.Wrapper>
);

export default Success;
