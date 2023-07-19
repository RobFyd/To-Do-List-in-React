import { all } from "redux-saga/effects";
import { watchFetchExampleTasks } from "./features/tasks/tasksSaga";

export default function* rootSaga() {
    yield all([
        watchFetchExampleTasks(),
    ]);
}