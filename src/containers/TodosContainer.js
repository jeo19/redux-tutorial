import { text } from "body-parser";
import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Todos from "../components/Todos";
import { addTodo, toggleTodo } from "../modules/todos";

function TodosContainer() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const onCreate = (text) => dispatch(addTodo(text));
  const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);
  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
}

export default TodosContainer;
