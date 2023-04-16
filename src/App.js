import React from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./SectionButtons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
   { id: 1, content: "react starting", done: false },
   { id: 2, content: "finish breakfast", done: true },
];

const hideDone = false;

function App() {
   return (

      <Container>

         <Header title="Task list" />

         <Section
            title="Add a new task"
            body={<Form />}
         />

         <Section
            title="Your tasks"
            body={
               <Tasks tasks={tasks} hideDone={hideDone} />
            }
            extraHeaderContent={
               <Buttons tasks={tasks} hideDone={hideDone} />
            }
         />

      </Container>
   );
}

export default App;
