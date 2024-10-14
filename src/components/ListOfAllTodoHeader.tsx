import { useRecoilValue } from "recoil";
import { TotalTodosSelector } from "../recoil/recoilSelector";

export const ListOfAllTodoHeader = () => {
  const totalNoOfTodos: number = useRecoilValue(TotalTodosSelector);
  return (
    <>
      <h3>List of all Todos</h3>
      <h5>you have {totalNoOfTodos} Todos</h5>
    </>
  );
};
