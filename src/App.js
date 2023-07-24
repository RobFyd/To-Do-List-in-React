import { HashRouter, Switch, Route, NavLink, Redirect } from "react-router-dom";
import Tasks from "./features/tasks/TasksPage";
import Author from "./features/author/Author";

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
        <Route path="/tasksList">
          <Tasks />
        </Route>
        <Route path="/author">
          <Author />
        </Route>
        <Route path="/">
          <Redirect to="/tasksList" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);

export default App;
