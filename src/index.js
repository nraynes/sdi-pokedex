import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let arrProm = [];
for (let i=1;i <= 151;i++) {
  arrProm.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((data) => data.json())
    .then((response) => response))
}
Promise.all(arrProm)
  .then((res) => {window.initVal = res})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);