import AOS from 'aos';
import 'aos/dist/aos.css';
import "animate.css"

import './App.css';
import Home from "./home";
import {BrowserRouter as Router,Route ,Switch} from 'react-router-dom'
import Portal from "./portal";

function App() {
  AOS.init({
    offset: 250,
    duration : 550
  });

  return (
   <Router>
      <div className="App">
        {/* MAIN RENDERING */}
        <Switch>
          <Route exact path = '/'>
            <Home/>
          </Route>

          <Route exact path = '/portal'>
            <Portal/>
          </Route>

        </Switch>
      </div>
   </Router>
  );
}

export default App;
