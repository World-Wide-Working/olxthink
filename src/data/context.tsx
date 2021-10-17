import React, { createContext, ReactNode, useContext, useState } from 'react';
import Service from './service';

export type Form = {
  title: string;
  description: string;
  category: string;
  state: 'EXCELLENT' | 'VERY_GOOD' | 'GOOD' | 'MIXED';
  price: number;
};

export type User = {
  name: string;
  contact: string;
};

export type Quote = {
  max: number;
  min: number;
  average: number;
};

export type Suggestion = {
  quote: Quote;
  sustainability: Record<string, unknown>;
};

export type AIData = {
  form: Form;
  image: string;
  suggestion: {
    quote: {
      max: string;
      min: string;
      average: string;
    };
  };
};

type ProviderProps = { children: ReactNode };
type StateContexProps = {
  data: AIData | Record<string, unknown>;
  // eslint-disable-next-line
  setImage: (image: any) => void;
  user: User;
};

const StateContext = createContext<StateContexProps | undefined>(undefined);

function Provider({ children }: ProviderProps): JSX.Element {
  const service = new Service();
  const [data, setData] = useState({});

  // eslint-disable-next-line
  const setImage = (image: any) => {
    setData(service.getAIData(image));
  };

  const value = { data, setImage, user: service.getUser() };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
}

function useThink(): StateContexProps {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a Provider');
  }
  return context;
}

export { Provider, useThink };
