import { Button } from "./styled";
import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../../tasksSlice";

const DownloadButton = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Button onClick={() => dispatch(fetchExampleTasks())} margin>
        Download example tasks
      </Button>
    </div>
  );
};

export default DownloadButton;