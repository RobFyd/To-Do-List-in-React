import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import { TaskDetails } from "./styled";

interface TaskPageProps {
  id: string;
}

function TaskPage() {
  const { id } = useParams<TaskPageProps>();
  const task = useSelector((state) => getTaskById(state, id));

  return (
    <Container>
      <Header title="Task details" />
      <Section
        title={task ? task.content : "Task not found 🫥"}
        body={
          task ? (
            <TaskDetails>
              <strong>Done:</strong> {task.done ? "Yes" : "No"}
            </TaskDetails>
          ) : null
        }
      />
    </Container>
  );
}

export default TaskPage;
