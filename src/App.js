import React from 'react';
import './App.css';
import store from './store'
import Landing from './component/Landing'
import { Provider } from 'react-redux';
import Statelist from './component/Statelist';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <div className = "bg-warning"> <h1>COVID19 LIVE UPDATES</h1></div>
      <Landing/>
      <Statelist/>
    </div>
    </Provider>
  );
}

export default App;
