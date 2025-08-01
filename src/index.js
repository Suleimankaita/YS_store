import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store';
// import { postslice } from './features/Logslice';
// store.dispatch(postslice.endpoints.getProduct.initiate());
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Provider store={store}>
  <Router>
    <Routes>
     <Route path={'/*'} element={ <App />}  />
    </Routes>
  </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
