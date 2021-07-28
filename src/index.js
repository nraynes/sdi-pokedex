import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export const arrPokeInit = React.createContext()

let arrProm = [];
for (let i=1;i <= 151;i++) {
  arrProm.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((data) => data.json())
    .then((response) => response))
}
Promise.all(arrProm)
  .then((res) => {ReactDOM.render(
    <arrPokeInit.Provider value={res}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </arrPokeInit.Provider>,
    document.getElementById('root')
  );})

