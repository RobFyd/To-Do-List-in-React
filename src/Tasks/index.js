import "./style.css";
import { List, Item, Content } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
   <List>
      {tasks.map(task => (
         <Item
            hidden={task.done && hideDone}
            key={task.id}
         >
            <button
               className="task__done task__done--active"
               onClick={() => toggleTaskDone(task.id)}
            >
               {task.done ? "✔" : ""}
            </button>
            <Content done={task.done}>
               {task.content}
            </Content>
            
            <button
               className="task__remove task__remove--active"
               onClick={() => removeTask(task.id)}
            >🗑</button>
         </Item>
      ))}
   </List >
);

export default Tasks;