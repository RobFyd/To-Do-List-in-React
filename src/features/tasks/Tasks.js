import { useSelector } from "react-redux";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./SectionButtons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { useTasks } from "../../useTasks";
import { selectTasks } from "./tasksSlice";
import { useState } from "react";

function Tasks() {
  const { tasks } = useSelector(selectTasks);

  // const [hideDone, setHideDone] = useState(false);

  // const toggleHideDone = () => {
  //   setHideDone((hideDone) => !hideDone);
  // };

  const {
    // tasks,
    // hideDone,
    // toggleHideDone,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  } = useTasks();

  return (
    <Container>
      <Header title="Task list" />
      <Section title="Add a new task" body={<Form addNewTask={addNewTask} />} />
      <Section
        title="Your tasks"
        body={
          <TaskList
            tasks={tasks}
            // hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            // hideDone={hideDone}
            // toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
}

export default Tasks;
