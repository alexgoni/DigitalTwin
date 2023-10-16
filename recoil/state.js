import { atom } from "recoil";

export const growthDuration = atom({
  key: "growthDuration",
  default: 10000,
});

export const currentModelIndex = atom({
  key: "currentModelIndex",
  default: 0,
});

export const warningFlag = atom({
  key: "warningFlag",
  default: false,
});
