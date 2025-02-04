import {
  List,
  Item,
  Content,
  Button,
  DeleteButton,
  StyledLink,
  ClickMe,
} from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleTaskDone,
  removeTask,
  selectHideDone,
  selectTasksByQuery,
} from "../../tasksSlice";
import { useLocation } from "react-router-dom";
import { Task } from "../../types";

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("search");

  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task: Task) => (
        <Item hidden={task.done && hideDone} key={task.id}>
          <Button onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </Button>

          <Content done={task.done}>
            <StyledLink to={`/tasksList/${task.id}`}>
              <span>{task.content}</span> <ClickMe>DETAILS</ClickMe>
            </StyledLink>
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
