import React from "react";
import { IToDo, toDoState } from "./atoms";
import { useSetRecoilState } from "recoil";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = e;
    console.log(name);
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          To Do
        </button>
      )}
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          Done
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          Doing
        </button>
      )}
    </li>
  );
}

export default ToDo;
