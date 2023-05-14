export interface ViewCountry {
  name: string;
  cca2: string;
  population: number;
}

export interface APICountry {
  name: { common: unknown };
  cca2: unknown;
  population: unknown;
}
