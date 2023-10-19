export interface IFormInputs {
  city: string;
  brand: string;
  model: string;
  yearFrom: string;
  yearTo: string;
  priceFrom: string;
  priceTo: string;
}

export type Fields = keyof IFormInputs;

export type Option = {
  value: string;
  label: string;
};
