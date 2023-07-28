import { List, Item, Content, Button, DeleteButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleTaskDone,
  removeTask,
  selectHideDone,
  selectTasksByQuery,
} from "../../tasksSlice";
import { Link, useLocation } from "react-router-dom";

const TaskList = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("search");

  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item hidden={task.done && hideDone} key={task.id}>
          <Button onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </Button>

          <Content done={task.done}>
            <Link to={`/tasksList/${task.id}`}>{task.content}</Link>
          </Content>

          <DeleteButton onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </DeleteButton>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
