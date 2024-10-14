import { atom } from "recoil";

export const todosState = atom({
  key: "todosState",
  default: [], // default value (aka initial value)
});
