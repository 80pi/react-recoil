/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRecoilState, useResetRecoilState } from "recoil";
import DeleteIcon from "@mui/icons-material/Delete";
import { todosState } from "../recoil/recoilAtom";
import { ListOfAllTodoHeader } from "./ListOfAllTodoHeader";
import { EditTodoPanel } from "./EditTodoPanel";

interface todosProps {
  id: string;
  todo: string;
}

export const ListAllTodos = () => {
  const [todos, setTodos] = useRecoilState<any>(todosState);
  const resetTodo = useResetRecoilState(todosState); // used to reset the state of recoil to initial
  const handleDeleteTodo = (selectedId: string) => {
    const filteredTodos = todos.filter(({ id }: any) => id !== selectedId);
    setTodos(filteredTodos);
  };

  const handleRestTodos = () => {
    return resetTodo();
  };

  return (
    <>
      <ListOfAllTodoHeader />
      {todos.length > 0 && (
        <>
          <button onClick={handleRestTodos}>Clear all Todos</button>
          {todos.map(({ id, todo }: todosProps) => {
            return (
              <div
                key={id}
                style={{
                  backgroundColor: "lightsteelblue",
                  height: "2rem",
                  display: "flex",
                  margin: "0.5rem",
                }}
              >
                <p style={{ margin: "0.28rem" }}>{todo}</p>
                <EditTodoPanel currentTodo={todo} selectId={id} />
                <button
                  style={{ marginLeft: "0.25rem" }}
                  onClick={() => handleDeleteTodo(id)}
                >
                  <DeleteIcon style={{ cursor: "pointer" }} />
                </button>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};
