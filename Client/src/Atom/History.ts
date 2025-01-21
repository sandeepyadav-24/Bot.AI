import { atom } from "recoil";

export const HistoryState = atom<string[]>({
  key: "HistoryState", // unique ID
  default: [], // default value (empty array)
});
