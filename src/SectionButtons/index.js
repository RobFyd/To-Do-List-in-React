import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (

   <div className="section__buttons">
      {tasks.length > 0 && (
         <>
            <button onClick={toggleHideDone}
               className="button__hideCompleted">
               {hideDone ? "Show " : "Hide "} completed
            </button>

            <button
               onClick={setAllDone}
               className="button__completeAll"
               disabled={tasks.every(({ done }) => done)}>Complete all
            </button>
         </>
      )}
   </div>
);

export default Buttons;