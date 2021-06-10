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
//import { Component } from 'react';
function App() {
  //const title ="welcome to the flames page";
  //const food={name:"panipoori",cost:20}; //object can be used in jsx
  //const glink="http://www.google.com";
  return (
    <div  className="App">
      <Navbar></Navbar>
      <div className="content">
          <Home></Home>
       </div>
      {/* <Lifecycle></Lifecycle>
       <EvenetHandling></EvenetHandling>
      
        <Form></Form>
      
     <LiftingupParent></LiftingupParent>
     <Containment><h1>hello this is Containment.</h1></Containment>
      
      <Signup></Signup>
      */}
      <Clickcounter></Clickcounter>

       </div>
  
  );
}

//Class Component with Component Lifecycle methode


export default App;
