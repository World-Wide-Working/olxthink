export type OlxSelectItem = {
  name: string;
  value: string;
  icon: string;
  iconAlt: string;
};

export type User = {
  name: string;
  contact: string;
};

export type Form = {
  title: string;
  description: string;
  category: string;
  categoryName: string;
  state: string;
  price: number;
};

export type Suggestion = {
  quote: {
    max: number;
    min: number;
    average: number;
  };
  sustainability: Record<string, string>;
};

export type Advertisement = {
  form: Form;
  image: string;
  suggestion: Suggestion;
};

export type Data = {
  user: User;
  advertisement: Advertisement[];
};
