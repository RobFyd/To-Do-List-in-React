import { Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleHideDone,
  setAllDone,
  selectHideDone,
  selectAreTasksEmpty,
  selectIsEveryTaskDone,
} from "../../tasksSlice";

const Buttons = () => {
  const hideDone = useSelector(selectHideDone);
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);

  const dispatch = useDispatch();

  return (
    <div>
      {!areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())} margin="0px 15px 0px 0px">
            {hideDone ? "Show " : "Hide "} completed
          </Button>

          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={isEveryTaskDone}
          >
            Complete all
          </Button>
        </>
      )}
    </div>
  );
};

export default Buttons;

