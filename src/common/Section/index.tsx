import { ReactNode } from "react";
import { TasksSection, Container, Header } from "./styled";

interface SectionProps {
   title: ReactNode;
   body: ReactNode;
   extraHeaderContent?: ReactNode;
}

const Section = ({ title, body, extraHeaderContent }: SectionProps) => (
   <TasksSection>
      <Container>
         <Header>{title}</Header>
         {extraHeaderContent}
      </Container>
      {body}
   </TasksSection>
);

export default Section;