import { useState } from 'react';
import { TasksForm, Field, Button } from "./styled"

const Form = ({ addNewTask }) => {
   const [newTaskContent, setNewTaskContent] = useState("");

   const onFormSubmit = (event) => {
      event.preventDefault();
      if (newTaskContent.trim() !== "") {
         addNewTask(newTaskContent);
         setNewTaskContent("");
      }
   };

   return (
      <TasksForm onSubmit={onFormSubmit}>
         <Field
            value={newTaskContent}
            className="form__field"
            required
            autoFocus
            placeholder="What needs to be done?"
            onChange={({ target }) => setNewTaskContent(target.value)}
         />
         <Button>Add a task</Button>
      </TasksForm>
   )
};

export default Form;