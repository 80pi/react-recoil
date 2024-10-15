/* eslint-disable @typescript-eslint/no-explicit-any */
import Popover from "@mui/material/Popover";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { useRecoilState } from "recoil";
import { todosState } from "../recoil/recoilAtom";
import { produce } from "immer";
type EditPanelProps = {
  selectId: string;
  currentTodo: string;
};

export const EditTodoPanel = ({ selectId, currentTodo }: EditPanelProps) => {
  // const allTodos=useRecoilValue(todosState)
  // const setEditTodo = useSetRecoilState(todosState);
  // above 2 will be replaced withe the below one
  const [todos, setTodos] = useRecoilState<any>(todosState);
  const [newTodo, setNewTodo] = useState<string>(currentTodo);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEditTodo = () => {
    const nextTodoState = produce(todos, (draftState: any) => {
      draftState.forEach((item: any) => {
        if (item.id === selectId) item.todo = newTodo;
      });
    });
    setTodos(nextTodoState);
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <button aria-describedby={id} onClick={handleClick}>
        <EditIcon />
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <>
          <label htmlFor="todo-edit-label">Edit todo</label>
          <input
            type="text"
            onChange={(e: any) => setNewTodo(e.target.value)}
            value={newTodo}
          />

          <button onClick={handleEditTodo}>Save</button>
          <button onClick={handleClose}>Close</button>
        </>
      </Popover>
    </div>
  );
};
