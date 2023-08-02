import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import { MainNavigation, StyledNavLink } from "./styled";

const App = () => (
  <HashRouter>
    <nav>
      <MainNavigation>
        <li>
          <StyledNavLink to="/tasksList">Tasks</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/author">About author</StyledNavLink>
        </li>
      </MainNavigation>
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
