import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Tester from './Tester';
import Navbar from './components/Navbar';
import Path from './Path';
import { createStore } from 'redux';
import FirstReducer from './reducers/FirstReducer';
import { Provider } from 'react-redux';
import FinalItemReducer from './reducers/FinalItemReducer';



// this is for the store
const store = createStore(FinalItemReducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  <Provider store={store}>

    {/* <App /> */}
    {/* <Navbar/> */}
    {/* <Tester/> */}
    <Path/>

    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
