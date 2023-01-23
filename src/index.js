import React from 'react';
import ReactDOM from 'react-dom/client';

//Import de l' application
import { App } from './App';

//Import des feuilles de style
import "./Style/CSS/normalize.css";
import "./Style/CSS/style-rule.css";


//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
