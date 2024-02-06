export type param = Record<string, unknown>;

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}

export interface diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export interface patients {
  id: string;
  name: string;
  occupation: string;
  gender: Gender;
  ssn?: string;
  dateOfBirth?: string;
}
