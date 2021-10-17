import React, { useState } from 'react';

import OlxSelect from '../OlxSelect';
import Label from '../Label';
import OlxInput from '../OlxInput';
import OlxTextarea from '../OlxTextarea';
import StateSelect from '../StateSelect';
import { Advertisement } from '../../types';

import { categories } from '../../data/categories';
import PhoneIcon from '../../images/icons/phone.svg';

import * as S from './styles';

type Props = {
  data?: Advertisement;
};

const Form = ({ data }: Props): JSX.Element => {
  const [category, setCategory] = useState(data?.form?.category || '');
  const [state, setState] = useState(data?.form?.state || '');

  const defaultPostCode = '48602-000';

  const defaultPhoneNumber = '(75) 3281-3040';

  return (
    <>
      <OlxInput label="Título" defaultValue={data?.form?.title} />

      <OlxTextarea label="Descrição" defaultValue={data?.form?.description} />

      <Label text="Categorias*" />
      <OlxSelect
        items={categories}
        value={category}
        onChange={(value) => setCategory(value)}
      />

      {data && (
        <>
          <Label text="Estado do produto" />
          <StateSelect onChange={(value) => setState(value)} value={state} />
        </>
      )}

      <Label text="Localização" />
      <OlxInput label="CEP*" width="196px" defaultValue={defaultPostCode} />

      <Label text="Contato" />
      <S.Contact>
        <img src={PhoneIcon} alt="" />
        {defaultPhoneNumber}
      </S.Contact>

      <S.Notice>As informações com (*) são obrigatórias</S.Notice>
    </>
  );
};

Form.defaultProps = {
  data: undefined,
};

export default Form;
