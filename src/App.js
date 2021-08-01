import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Departments from './Departments';
import Dpto from './Dpto';
import Employee from './Employee';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Department list</Link>
            </li>
          </ul>
        </nav>
        
        <Switch>
          <Route path="/dpto">
            <Dpto />
          </Route>
          <Route path="/employee">
            <Employee />
          </Route>
          <Route path="/">
            <Departments />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}