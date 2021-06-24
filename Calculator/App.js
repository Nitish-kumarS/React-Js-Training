import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './app/Store.js';
import Calculator from './features/Calculator';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
        <Calculator></Calculator>
    </div>
    </Provider>
  );
}

export default App;
