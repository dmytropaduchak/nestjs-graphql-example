export interface Character {
  url: string;
  name: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  homeworld: string;
}

export interface Planet {
  url: string;
  climate: string;
  gravity: string;
  name: string;
}

export interface Results<T> {
  count: number;
  results: T[];
}

