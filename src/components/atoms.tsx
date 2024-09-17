import { atom } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  category: "DOING" | "DONE" | "TO_DO";
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export {};
