import { List, Item, Content, DoneButton, RemoveButton } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
   <List>
      {tasks.map(task => (
         <Item
            hidden={task.done && hideDone}
            key={task.id}
         >
            <DoneButton
               onClick={() => toggleTaskDone(task.id)}
            >
               {task.done ? "✔" : ""}
            </DoneButton>

            <Content done={task.done}>
               {task.content}
            </Content>

            <RemoveButton
               onClick={() => removeTask(task.id)}
            >🗑</RemoveButton>
         </Item>
      ))}
   </List >
);

export default Tasks;

//34 min