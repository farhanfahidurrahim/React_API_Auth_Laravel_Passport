import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Head from './common/Head';
import reportWebVitals from './reportWebVitals';

//important
import axios from 'axios';
axios.defaults.baseURL='http://localhost/react_lv8/api/';

//Bearer Token save
axios.defaults.headers.common['Authorization']='Bearer '+localStorage.getItem('token')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Head />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
