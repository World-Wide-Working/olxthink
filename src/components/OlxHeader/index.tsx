import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTER_PATHS } from '../../constants/router';
import { useThink } from '../../data/context';

import * as S from './styles';

const OlxHeader = (): JSX.Element => {
  const { user } = useThink();

  return (
    <S.Header>
      <S.Wrapper>
        <S.Logo>
          <Link to={ROUTER_PATHS.HOME}>
            <img src="/logo.svg" alt="OLX" />
          </Link>
        </S.Logo>
        <S.Account>
          <S.AccountMessage>
            <p>
              Olá, <span>{user.name}</span>!
            </p>
          </S.AccountMessage>
        </S.Account>
      </S.Wrapper>
    </S.Header>
  );
};

export default OlxHeader;
