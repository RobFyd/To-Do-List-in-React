import { TasksSection, Container, Header } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
   <TasksSection>
      <Container>
         <Header>{title}</Header>
         {extraHeaderContent}
      </Container>
      {body}
   </TasksSection>
);

export default Section;