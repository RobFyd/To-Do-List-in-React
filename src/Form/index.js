import { useState, useRef } from "react";
import { TasksForm, Field, Button } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim() !== "") {
      addNewTask(newTaskContent);
      setNewTaskContent("");
      inputRef.current.focus();
    }
  };

  return (
    <TasksForm onSubmit={onFormSubmit}>
      <Field
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
