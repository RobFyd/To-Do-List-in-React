import { takeEvery, call, put } from "redux-saga/effects";
import { fetchExampleTasks, setTasks } from "./getExampleTasks";
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks } from "./tasksSlice";

function* fetchExampmeTasksHandler() {
  try {
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
  } catch (error) {
    yield call(alert, "Something went wrong!");
  }
}

function* watchExampleTasks() {
  yield takeEvery(fetchExampleTasks.type, fetchExampmeTasksHandler);
}
