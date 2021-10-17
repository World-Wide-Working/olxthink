import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import OlxTitle from '../../components/OlxTitle';
import Camera from '../../components/Camera';
import { useThink } from '../../data/context';
import Form from '../../components/Form';

const Advertisement = (): JSX.Element => {
  const history = useHistory();
  const { setImage } = useThink();

  const [hasImage, setHasImage] = useState(false);

  const handleSubmit = (image: string) => {
    setImage(image);
    history.push('/think');
  };

  return (
    <>
      <OlxTitle text="O que você está anunciando?" />
      <Camera onSubmit={handleSubmit} handleImage={setHasImage} />
      {!hasImage && <Form />}
    </>
  );
};

export default Advertisement;
