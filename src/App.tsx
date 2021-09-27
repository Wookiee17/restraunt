import React from 'react';
import { Provider } from 'react-redux'
import './App.css';
import store from './redux/store'
import Header from './Header';
import  ScrollableTabsButtonAuto from './ScrollableTabsButtonAuto';

function App() {
  return (
    <Provider store={store}>
    <div className="App">      
      <Header/>
      <ScrollableTabsButtonAuto/>
    </div>
    </Provider>
  );
}

export default App;
