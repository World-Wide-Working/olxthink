import React from 'react';
import secureBadge from '../../images/icons/secure-badge.svg';
import * as S from './styles';

const SecureCard = (): JSX.Element => (
  <S.Box>
    <img src={secureBadge} alt="secureBadge" />
    <S.Text>
      <p className="secureText">
        <span>
          Não pedimos códigos por ligação, chat ou WhatsApp. Desconfie se alguém
          entrar em contato ou enviar comprovante de pagamento em noma da OLX.
        </span>
      </p>
    </S.Text>
  </S.Box>
);

export default SecureCard;
