import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let arrProm = [];
for (let i=1;i <= 151;i++) {
  arrProm.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((data) => data.json())
    .then((response) => {
      if (response) {
        return response;
      }}))
}
Promise.all(arrProm)
  .then((res) => {ReactDOM.render(
      <React.StrictMode>
        <App initVal={res}/>
      </React.StrictMode>,
    document.getElementById('root')
  );})

