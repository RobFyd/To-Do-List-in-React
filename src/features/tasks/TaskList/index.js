import { List, Item, Content, Button, DeleteButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone } from "../tasksSlice";

const TaskList = ({ removeTask }) => {
  const { tasks, hideDone } = useSelector(selectTasks);
const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item hidden={task.done && hideDone} key={task.id}>
          <Button onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </Button>

          <Content done={task.done}>{task.content}</Content>

          <DeleteButton onClick={() => removeTask(task.id)}>🗑</DeleteButton>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
