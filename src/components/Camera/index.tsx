import React, { useRef, ChangeEvent, useState } from 'react';

import * as S from './styled';

type Props = {
  onSubmit: (image: string) => void;
  handleImage: (hasImage: boolean) => void;
};

const Camera = ({ onSubmit, handleImage }: Props): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (!event.target.files?.length) return;
    const value = URL.createObjectURL(event.target.files[0]);
    setPreview(value);
    handleImage(true);
  };

  return (
    <>
      <S.Button onClick={() => inputRef.current?.click()}>
        Anuncie com uma foto do produto
      </S.Button>
      <input
        type="file"
        accept="image/*"
        capture="environment"
        style={{ display: 'none' }}
        ref={inputRef}
        onChange={handleChange}
      />
      {preview && (
        <>
          <S.PreviewContainer>
            <S.ImageContainer>
              <S.Image src={preview} alt="preview" />
            </S.ImageContainer>
          </S.PreviewContainer>
          <S.ActionButtonOutline onClick={() => inputRef.current?.click()}>
            Tirar outra foto
          </S.ActionButtonOutline>
          <S.ActionButton onClick={() => onSubmit(preview as string)}>
            Continuar
          </S.ActionButton>
        </>
      )}
    </>
  );
};

export default Camera;
