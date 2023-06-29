import { Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (

   <div>
      {tasks.length > 0 && (
         <>
            <Button onClick={toggleHideDone} margin>
               {hideDone ? "Show " : "Hide "} completed
            </Button>

            <Button
               onClick={setAllDone}
               disabled={tasks.every(({ done }) => done)}>Complete all
            </Button>
         </>
      )}
   </div>
);

export default Buttons;