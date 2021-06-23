
import './App.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Home from './Components/Home';
import Navbar from './Components/Header';
import Search from './Components/Search';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Filter from './Components/Filter';
function App() {
  return (
    <div className="App">
        <Router>
         <Navbar/>
          <Switch>
            <Route exact path="/Home"><Home/></Route>
            <Route exact path="/Search"><Search/></Route>
            <Route exact path="/Filter"><Filter/></Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
