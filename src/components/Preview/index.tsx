import React from 'react';

import * as S from './styled';

type Props = {
  handleReset: () => void;
  image: string;
};

const Preview = ({ image, handleReset }: Props) => {
  return (
    <>
      <S.PreviewContainer>
        <S.ImageContainer>
          <S.Image src={image} alt="preview" />
        </S.ImageContainer>
      </S.PreviewContainer>
      <S.ActionButtonOutline onClick={handleReset}>
        Tirar outra foto
      </S.ActionButtonOutline>
    </>
  );
};

export default Preview;
