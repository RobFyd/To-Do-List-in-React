import React from 'react';
import "./style.css";

const Form = () => (
    <form className="form">
            <input className="form__field" required placeholder="What needs to be done?" />
            <button className="form__button">Add a task</button>
          </form>
);

export default Form;