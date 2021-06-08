import './App.css';
import Navbar from './Navbar';   //importing navbar in app
import Home from './Home';
import { Component } from 'react';
import Lifecycle from './Lifecycle';
import EvenetHandling from './EventHandling';
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
       <Lifecycle></Lifecycle>
       <EvenetHandling></EvenetHandling>
    </div>
  
  );
}

//Class Component with Component Lifecycle methode


export default App;
