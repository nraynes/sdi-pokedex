import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
        <Router>
          <Route path='/' component={props => <App initVal={res} {...props} />} />
        </Router>
      </React.StrictMode>,
    document.getElementById('root')
  );})

