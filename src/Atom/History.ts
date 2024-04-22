import { atom } from "recoil";
export const HistoryState = atom({
  key: "HistoryState", // unique ID (with respect to other atoms/selectors)
  default: [""], // default value (aka initial value)
});
