import { selector } from "recoil";
import { todosState } from "./recoilAtom";

export const TotalTodosSelector = selector({
  key: "TotalTodosSelector",
  get: ({ get }) => {
    return get(todosState).length;
  },
});
// export const deleteSelectedTodoSelector = selector({
//   key: "deleteSelectedTodoSelector",
//   get: ({ get }) => {
//     const allTodos = get(todosState);
//     // return allTodos.filter((todo)=>todo.id)
//   },
// });
