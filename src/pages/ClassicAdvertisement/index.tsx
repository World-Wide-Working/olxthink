import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import OlxTitle from '../../components/OlxTitle';
import Camera from '../../components/Camera';
import { useThink } from '../../data/context';
import Form from '../../components/Form';
import Button from '../../components/Button';
import { ROUTER_PATHS } from '../../constants/router';

const Advertisement = (): JSX.Element => {
  const history = useHistory();
  const { setImage } = useThink();

  const [hasImage, setHasImage] = useState(false);

  const handleSubmit = useCallback(
    (image: string) => {
      setImage(image);
      history.push(ROUTER_PATHS.THINK);
    },
    [history, setImage]
  );

  const handleButtonClick = useCallback(
    () => history.push(ROUTER_PATHS.SUCCESS),
    [history]
  );

  return (
    <>
      <OlxTitle text="O que você está anunciando?" />
      <Camera onSubmit={handleSubmit} handleImage={setHasImage} />
      {!hasImage && (
        <>
          <Form />
          <Button onClick={handleButtonClick}>Enviar anúncio</Button>
        </>
      )}
    </>
  );
};

export default Advertisement;
