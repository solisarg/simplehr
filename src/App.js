import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Departments from './Departments';
import Dpto from './Dpto';
import Employee from './Employee';
import { createContext, useState } from "react";

export  const BaseContext = createContext();

export default function App() {
  const [baseUrl, setBaseUrl] = useState("/simplehr/back/");

  return (
    <Router>
      <BaseContext.Provider value={{baseUrl,setBaseUrl}}>
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
      </BaseContext.Provider>
    </Router>
  );
}