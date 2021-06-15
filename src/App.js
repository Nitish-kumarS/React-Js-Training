import './App.css';
import Navbar from './Navbar';   //importing navbar in app
import Home from './Home';
import { Component } from 'react';
import Lifecycle from './Lifecycle';
import EvenetHandling from './EventHandling';
import Form from './Forms';
import LiftingupParent from './LiftingupParent';
import Containment from './Containment';
import Signup from './Signup';
import Clickcounter from './Clickcounter';
import TPromise from './TPromise';
import Binds from './Binds';
import AsyncAndWait from './AsyncAndWait';
import Refhandling from './Refhandling';
import FRparent from './FRparent';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Foodlist from './Foodlist';
import Errorhandling from './Errorhandling';
import ErrorSample from './ErrorSample';
import Apis from './Apis';

//import { Component } from 'react';
function App() {
  //const title ="welcome to the flames page";
  //const food={name:"panipoori",cost:20}; //object can be used in jsx
  //const glink="http://www.google.com";
  return (
  
    <div className="App">
      {/* <Navbar></Navbar>
     
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route  exact path="/Foodlist">
        <Foodlist/>
        </Route>
        <Route exact path="/FRparent"><FRparent/></Route>
        <Route exact path="/Form"><Form></Form></Route>
      </Switch>
       <Lifecycle></Lifecycle>
       <EvenetHandling></EvenetHandling>
      
        <Form></Form>
      
     <LiftingupParent></LiftingupParent>
     <Containment><h1>hello this is Containment.</h1></Containment>
      <Signup/>
      <Clickcounter/>
    <TPromise/>
      <Binds/>
    <AsyncAndWait/>
    
     <Refhandling/>
    
    
     </div>
  </Router>
    
     <Errorhandling>
        <ErrorSample name={"leo"} />
        <ErrorSample name={"ish"}/>
      </Errorhandling>
          */}
          <Apis/>
      </div>

  );
}

//Class Component with Component Lifecycle methode


export default App;
