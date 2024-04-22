import { atom } from "recoil";
export const SearchDataState = atom({
  key: "SearchDataState", // unique ID (with respect to other atoms/selectors)
  default: [""], // default value (aka initial value)
});
