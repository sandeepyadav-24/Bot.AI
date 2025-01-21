import { atom } from "recoil";

interface Message {
  text: string;
  isUser: boolean;
  isLoading?: boolean;
}

export const SearchDataState = atom<Message[]>({
  key: "SearchDataState",
  default: [],
});
