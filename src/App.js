import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import Caesar from './pages/caesar'
import Knuth from './pages/knuth'
import Newton from './pages/newton'

// @import url('https://fonts.googleapis.com/css2?family=Bungee+Outline&display=swap');
// mr robot style font for final page

function App() {
  return (
    <div id='main'>
      <Router>
       <Switch>
        <Route exact path='/'>
          <Caesar />
        </Route>
        <Route exact path='/knuth'>
          <Knuth />
        </Route>
        <Route exact path='/newton'>
          <Newton />
        </Route>
       </Switch>
    </Router>
    </div>
  )
}

export default App;