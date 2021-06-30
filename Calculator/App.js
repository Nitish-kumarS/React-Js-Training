import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {store, persistor } from './app/Store.js';
import Calculator from './features/Calculator/Calculator';
import {PersistGate} from 'redux-persist/es/integration/react'
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <div className="App">
        <Calculator></Calculator>
    </div>
    </PersistGate>
    </Provider>
  );
}

export default App;
