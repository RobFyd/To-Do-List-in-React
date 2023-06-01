import { List, Item, Content, DoneButton, RemoveButton } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
   <List>
      {tasks.map(task => (
         <Item
            hidden={task.done && hideDone}
            key={task.id}
         >
            <DoneButton
               className="task__done task__done--active"
               onClick={() => toggleTaskDone(task.id)}
            >
               {task.done ? "✔" : ""}
            </DoneButton>

            <Content done={task.done}>
               {task.content}
            </Content>

            <RemoveButton
               className="task__remove task__remove--active"
               onClick={() => removeTask(task.id)}
            >🗑</RemoveButton>
         </Item>
      ))}
   </List >
);

export default Tasks;

//34 min