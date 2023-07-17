export const getExampleTasks = async () => {
  const response = await fetch("/To-Do-List-in-React/exampleTasks.json");

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};
