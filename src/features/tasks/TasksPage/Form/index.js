import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { TasksForm, Button } from "./styled";
import { addTask } from "../../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";
import Input from "../../Input";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (newTaskContent.trim() !== "") {
      dispatch(
        addTask({
          content: newTaskContent,
          done: false,
          id: nanoid(),
        })
      );

      setNewTaskContent("");
      inputRef.current.focus();
    }
  };

  return (
    <TasksForm onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        required
        placeholder="What needs to be done?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button>Add a task</Button>
    </TasksForm>
  );
};

export default Form;
