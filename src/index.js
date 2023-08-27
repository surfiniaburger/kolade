import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <meta name="description" content="A cool restaurant in Chicago, that serves mostly Italian dishes"/>
    <meta name="og:title" content="Little Lemon restaurant"/>
    <meta name="og:description" content="A cool restaurant in Chicago, that serves mostly Italian dishes"/>
    <meta name="og:image" content="Mario and Adrian A.png"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
