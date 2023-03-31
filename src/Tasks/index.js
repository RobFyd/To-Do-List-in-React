import "./style.css";

const Tasks = ({ tasks, hiddenDoneTasks }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li
                className={`tasks__item ${task.done && hiddenDoneTasks
                    ? "tasks__item--hidden"
                    : ""}`}
                key={task.id}>

                <button className="task__done task__done--active">
                    {task.done ? "✔" : ""}
                </button>

                <span className={
                    `task__content${task.done ? " task__content--done" : ""}`
                }>
                    {task.content}
                </span>

                <button className="task__remove task__remove--active">🗑</button>
            </li>
        ))}
    </ul >
);

export default Tasks;