import React from 'react';
import "./style.css";

const Buttons = ({ tasks, hideDone }) => (

   <div className="section__buttons">
      {tasks.length > 0 && (
         <>
            <button
               className="button__hideCompleted">
               {hideDone ? "Show " : "Hide "} completed
            </button>

            <button
               className="button__completeAll"
               disabled={tasks.every(({ done }) => done)}>Complete all
            </button>
         </>
      )}
   </div>
);

export default Buttons;