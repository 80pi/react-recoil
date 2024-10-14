/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRecoilState } from "recoil";
import { todosState } from "../recoil/recoilAtom";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

const TodoForm = () => {
  const [todos, setTodos] = useRecoilState<any>(todosState);
  const [givenTodo, setGivenTodo] = useState<string>("");
  const [id, setId] = useState("");

  useEffect(() => {
    setId(nanoid());
  }, [todos]);

  const handleAddTodo = () => {
    setTodos((prev: any) => [
      ...prev,
      {
        id,
        todo: givenTodo,
      },
    ]);
    setGivenTodo("");
  };
  return (
    <>
      <h5>Todo Form</h5>
      <label htmlFor="todo-label">Add your Todo here </label>
      <input
        type="text"
        value={givenTodo}
        onChange={(e) => setGivenTodo(e?.target?.value)}
      />
      <button disabled={!givenTodo} onClick={handleAddTodo}>
        Add
      </button>
    </>
  );
};

export default TodoForm;
