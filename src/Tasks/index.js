import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
   <ul className="tasks">
      {tasks.map(task => (
         <li
            className={`
                tasks__item ${task.done && hideDone
                  ? "tasks__item--hidden"
                  : ""}
                    `}
            key={task.id}
         >

            <button
               className="task__done task__done--active"
               onClick={() => toggleTaskDone(task.id)}
            >
               {task.done ? "✔" : ""}
            </button>

            <span className={
               `task__content${task.done ? " task__content--done" : ""}`
            }>
               {task.content}
            </span>

            <button
               className="task__remove task__remove--active"
               onClick={() => removeTask(task.id)}
            >🗑</button>
         </li>
      ))}
   </ul >
);

export default Tasks;