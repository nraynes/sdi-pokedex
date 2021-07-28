import './App.css';
import React, { useState } from 'react';
import TopBar from './components/top-bar/TopBar';
import PokeCard from './components/poke-card/PokeCard'
import About from './components/about/About';
import PokeDetails from './components/poke-details/PokeDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(props) {
  const iVal = props.initVal;
  const [ arrPokemon, setArrPokemon ] = useState(iVal)
  const [ curCard, setCurCard ] = useState({})

  return (
    <Router>
      <div className='App'>
        <Route path='/' component={props => (<TopBar initVal={iVal} arrPokemon={iVal} setArrPokemon={(newArr) => {setArrPokemon(newArr)}} {...props} />)} />
        <Switch>
          <Route exact path='/' component={props => (
            <div id='main'>
              {arrPokemon.map((obj, index) => {return (<PokeCard key={index} pokemon={obj} setCurCard={(card)=>{setCurCard(card)}} {...props} />)})}
            </div>
          )} />
          <Route path='/details' component={props => (
            <div id='detail'>
              <PokeCard pokemon={curCard} {...props} />
              <PokeDetails initVal={iVal} pokemon={curCard} setArrPokemon={(newArr) => {setArrPokemon(newArr)}} {...props} />
            </div>
          )} />
          <Route path='/about' component={props => (
            <div id='about'>
              <About {...props} />
            </div>
          )} />
        </Switch>
      </div>
    </Router>
  );
};


export default App;