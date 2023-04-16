import React, { useState } from 'react';
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

function App() {
   const [hideDone, setHideDone] = useState(false);

   const toggleHideDone = () => {
      setHideDone(hideDone => !hideDone);
   }

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
               <Buttons
                  tasks={tasks}
                  hideDone={hideDone}
                  toggleHideDone={toggleHideDone}
               />
            }
         />

      </Container>
   );
}

export default App;
