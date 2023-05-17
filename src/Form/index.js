import { useState } from 'react';
import "./style.css";

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
      <form className="form" onSubmit={onFormSubmit}>
         <input
            value={newTaskContent}
            className="form__field"
            required
            autoFocus
            placeholder="What needs to be done?"
            onChange={({ target }) => setNewTaskContent(target.value)}
         />
         <button className="form__button">Add a task</button>
      </form>
   )
};

export default Form;