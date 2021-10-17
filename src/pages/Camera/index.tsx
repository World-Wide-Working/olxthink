import React from 'react';

import OlxTitle from '../../components/OlxTitle';
import Form from '../../components/Form';

const fakeData = {
  form: {
    title: 'Livro Harry Potter e as Relíquias da Morte',
    description: 'Livro Harry Potter\nTipo de Capa: Dura\nEdição: #1',
    category: 'imoveis',
    categoryName: 'Imóveis',
    state: 'GOOD',
    price: 25.0,
  },
  image: 'https://img.olx.com.br/images/11/115185692186281.jpg',
  suggestion: {
    quote: {
      max: 30.0,
      min: 19.2,
      average: 25.0,
    },
    sustainability: {},
  },
};

const Camera = (): JSX.Element => (
  <>
    <OlxTitle text="O que você está anunciando?" />

    <Form data={fakeData} />
  </>
);

export default Camera;
