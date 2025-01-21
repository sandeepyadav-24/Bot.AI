import { atom } from "recoil";

export const SavedAnswersState = atom<string[]>({
  key: "SavedAnswersState", // unique ID
  default: [], // default value (empty array)
});
