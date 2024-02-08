import axios from "axios";
import { DiaryEntry, NewDiaryEntry } from "../types";

const baseUrl = "http://localhost:3000/api";

export const getAll = async () => {
  const response = await axios.get<DiaryEntry[]>(`${baseUrl}/diaries`);
  return response.data;
};

export const create = async (newObject: NewDiaryEntry) => {
  const response = await axios.post<DiaryEntry>(
    `${baseUrl}/diaries`,
    newObject
  );
  return response.data;
};
