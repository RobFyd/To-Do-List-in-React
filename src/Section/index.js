// import "./style.css";
import { Section1, Container, Header } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
   <Section1>
      <Container>
         <Header>{title}</Header>
         {extraHeaderContent}
      </Container>
      {body}
   </Section1>
);

export default Section;