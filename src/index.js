import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from './context/AuthContext';

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <React.StrictMode>
      <AuthContextProvider>

      <App />
      </AuthContextProvider>
    
    </React.StrictMode>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


