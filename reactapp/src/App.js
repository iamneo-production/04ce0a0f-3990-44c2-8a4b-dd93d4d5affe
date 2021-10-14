import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Profile from "./Profile";

function App() {
  return (
    <Router>
    <div className="app">
      
      <Switch>
      <Route path="/login">          
         
      </Route>   
      <Route path="/checkout">   
          <Profile />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
