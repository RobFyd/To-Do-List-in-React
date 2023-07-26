import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./SectionButtons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { useLocation } from "react-router-dom";

function TasksPage() {
  const location = useLocation();

  return (
    <Container>
      {location.search}
      <Header title="Task list" />
      <Section title="Add a new task" body={<Form />} />
      <Section
        title="Your tasks"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
