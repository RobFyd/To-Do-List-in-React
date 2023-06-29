import { List, Item, Content, Button, DeleteButton } from "./styled";

const TaskList = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
   <List>
      {tasks.map(task => (
         <Item
            hidden={task.done && hideDone}
            key={task.id}
         >
            <Button
               onClick={() => toggleTaskDone(task.id)}
            >
               {task.done ? "✔" : ""}
            </Button>

            <Content done={task.done}>
               {task.content}
            </Content>

            <DeleteButton
               onClick={() => removeTask(task.id)}
            >🗑</DeleteButton>
         </Item>
      ))}
   </List >
);

export default TaskList;