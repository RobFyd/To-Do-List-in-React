import "./style.css";

const Buttons = ({ tasks, hiddenDoneTasks }) => (

   <div className="section__buttons">
      {tasks.length > 0 && (
         <>
            <button
               className="button__hideCompleted">{hiddenDoneTasks ? "Show " : "Hide "}
               completed
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