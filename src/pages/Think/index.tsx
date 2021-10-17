import React from 'react';
import { useHistory } from 'react-router-dom';

import OlxTitle from '../../components/OlxTitle';
import Quotation from '../../components/Quotation';
import SecureCard from '../../components/SecureCard';
import Sustainability from '../../components/Sustainability';
import CategoryCard from '../../components/CategoryCard';
import Preview from '../../components/Preview';
import Form from '../../components/Form';
import { useThink } from '../../data/context';
import { Advertisement } from '../../types';
import OlxPayInfo from '../../components/OlxPayInfo';
import Button from '../../components/Button';
import { ROUTER_PATHS } from '../../constants/router';
import * as S from './styles';

const Think = (): JSX.Element | null => {
  const { data } = useThink();
  const history = useHistory();

  const handleReset = () => {
    history.push(ROUTER_PATHS.HOME);
  };

  if (!data) {
    history.push(ROUTER_PATHS.HOME);
    return null;
  }

  return (
    <>
      <OlxTitle text="Hora de completar o anúncio" />
      <Preview image={data.image as string} handleReset={handleReset} />
      <br />
      <OlxPayInfo />
      <br />
      <Quotation data={data as Advertisement} />
      <br />
      <Sustainability />
      <br />
      <CategoryCard data={data as Advertisement} />
      <br />
      <Form data={data as Advertisement} />
      <br />
      <br />
      <SecureCard />
      <br />
      <S.Text>
        <p>
          Ao publicar você concorda e aceita nossos{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ajuda.olx.com.br/s/article/termos-e-condicoes-de-uso"
          >
            Termos de Uso
          </a>
          e{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ajuda.olx.com.br/s/article/politica-de-privacidade"
          >
            Privacidade
          </a>
        </p>
      </S.Text>
      <Button>Enviar anúncio</Button>
    </>
  );
};

export default Think;
