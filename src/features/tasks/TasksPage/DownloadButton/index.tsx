import { Button } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";

const DownloadButton = () => {
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  return (
    <div>
      <Button onClick={() => dispatch(fetchExampleTasks())} disabled={loading}>
        {loading ? "Loading..." : "Download example tasks"}
      </Button>
    </div>
  );
};

export default DownloadButton;
