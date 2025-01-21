import { atom } from "recoil";

export interface Message {
  text: string;
  isUser: boolean;
}

export const SearchDataState = atom<Message[]>({
  key: "SearchDataState", // unique ID
  default: [], // default value (empty array)
});
