interface IOrigin {
  name: string;
  url?: string;
}

interface ILocation {
  name: string;
  url?: string;
}

export interface ICharacter {
  readonly id: number;
  readonly name: string;
  readonly status: string;
  readonly species: string;
  readonly gender: string;
  readonly origin?: {
    [key: string]: IOrigin;
  };
  readonly location?: {
    [key: string]: ILocation;
  };
  readonly image: string;
  readonly url: string;
  readonly created?: string;
}