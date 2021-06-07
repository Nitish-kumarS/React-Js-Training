import './App.css';
import Navbar from './Navbar';   //importing navbar in app
import Home from './Home';
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
    </div>
  
  );
}
/*class App extends Component{
  render(){
    return (
      <div>
        <h1>hello</h1>
      </div>
    )
  }
}
*/
export default App;
