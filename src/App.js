import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Tasks from "./features/tasks/Tasks";

// "react-router-dom/cjs/react-router-dom.min"

const App = () => (
  <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to="/tasksList">Tasks</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/tasksList">
          <Tasks />
        </Route>
      </Switch>
    </nav>
  </BrowserRouter>
);

export default App;
