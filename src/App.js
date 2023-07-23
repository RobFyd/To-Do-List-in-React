import { HashRouter, Switch, Route, Link } from "react-router-dom";
import Tasks from "./features/tasks/Tasks";
import Author from "./features/author/Author";

// "react-router-dom/cjs/react-router-dom.min"

const App = () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <Link to="/tasksList">Tasks</Link>
        </li>
        <li>
          <Link to="/author">About author</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/tasksList">
          <Tasks />
        </Route>
        <Route path="/author">
          <Author />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);

export default App;
