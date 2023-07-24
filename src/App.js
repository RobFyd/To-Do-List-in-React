import { HashRouter, Switch, Route, NavLink, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";

const App = () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/tasksList">
            Tasks
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/author">
            About author
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/tasksList/:id">
          <TaskPage />
        </Route>
        <Route path="/tasksList">
          <TasksPage />
        </Route>
        <Route path="/author">
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to="/tasksList" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);

export default App;
