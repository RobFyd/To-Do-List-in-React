import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./SectionButtons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import Search from "./Search";
import DownloadButton from "./DownloadButton";

function TasksPage() {
  return (
    <Container>
      <Header title="Task list" />
      <Section
        title="Add a new task"
        extraHeaderContent={<DownloadButton />}
        body={<Form />}
      />

      <Section title="Searcher" body={<Search />} />

      <Section
        title="Your tasks"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
