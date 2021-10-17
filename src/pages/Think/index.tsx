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
      <Button>Submit</Button>
    </>
  );
};

export default Think;
