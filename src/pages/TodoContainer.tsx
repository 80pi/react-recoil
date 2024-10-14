import { ListAllTodos } from "../components/ListAllTodos";
import TodoForm from "../components/TodoForm";

const TodoContainer = () => {
  return (
    <>
      <TodoForm />
      <ListAllTodos />
    </>
  );
};
export default TodoContainer;
