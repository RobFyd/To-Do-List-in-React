import { Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone } from "../tasksSlice";

const Buttons = ({ setAllDone }) => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    <div>
      {tasks.length > 0 && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())} margin>
            {hideDone ? "Show " : "Hide "} completed
          </Button>

          <Button
            onClick={setAllDone}
            disabled={tasks.every(({ done }) => done)}
          >
            Complete all
          </Button>
        </>
      )}
    </div>
  );
};

export default Buttons;
