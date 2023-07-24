import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { useParams } from "react-router-dom";

function TaskPage() {
  const { id } = useParams();
  return (
    <Container>
      <Header title="Task details" />
      <Section title={id} body={<>???</>} />
    </Container>
  );
}

export default TaskPage;
