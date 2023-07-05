import { List, Item, Content, Button, DeleteButton } from "./styled";
import { useSelector } from "react-redux";
import { selectTasks } from "../tasksSlice";

const TaskList = ({ removeTask, toggleTaskDone }) => {
  const { tasks, hideDone } = useSelector(selectTasks);
  return (
    <List>
      {tasks.map((task) => (
        <Item hidden={task.done && hideDone} key={task.id}>
          <Button onClick={() => toggleTaskDone(task.id)}>
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
