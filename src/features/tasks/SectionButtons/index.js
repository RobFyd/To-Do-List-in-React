import { Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTasks,
  toggleHideDone,
  setAllDone,
  selectHideDone,
} from "../tasksSlice";

const Buttons = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <div>
      {tasks.length > 0 && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())} margin>
            {hideDone ? "Show " : "Hide "} completed
          </Button>

          <Button
            onClick={() => dispatch(setAllDone())}
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
