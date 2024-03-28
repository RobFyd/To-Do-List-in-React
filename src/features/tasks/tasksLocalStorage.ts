import { Task } from "./types";

const localStorageKey = "tasks";

export const saveTasksInLocalStorage = (tasks: Task) =>
  localStorage.setItem(localStorageKey, JSON.stringify(tasks));

export const getTasksFromLocalStorage = () => {
  const tasksString = localStorage.getItem(localStorageKey);
  if (tasksString === null) {
    return [];
  }
  return JSON.parse(tasksString);
};
