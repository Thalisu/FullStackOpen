import { Gender } from "../types";
import { error } from "./logger";

const isGender = (gender: string): gender is Gender => {
  return Object.values(Gender)
    .map((v) => v.toString())
    .includes(gender);
};

export const parseGender = (gender: unknown, id: string): Gender => {
  if (!gender || !isString(gender) || !isGender(gender)) {
    error(`Incorrect or missing gender: ${gender}, data id: ${id}`);
    throw new Error("Incorrect or missing gender: " + gender);
  }
  return gender;
};

export const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};
