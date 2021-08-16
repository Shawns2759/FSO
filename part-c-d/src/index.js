import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'

let counter = 1
counter += 7

const refresh = () => {
  ReactDOM.render(<App counter={counter} />,
  document.getElementById('root'))
}
refresh()


  


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

