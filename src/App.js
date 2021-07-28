import './App.css';
import React, { useState, useContext} from 'react';
import TopBar from './components/top-bar/TopBar';
import PokeCard from './components/poke-card/PokeCard'
import About from './components/about/About';
import PokeDetails from './components/poke-details/PokeDetails';
import { arrPokeInit } from './index';

function App() {
  const initVal = useContext(arrPokeInit)
  const [ arrPokemon, setArrPokemon ] = useState(initVal)
  const [ pageState, setPageState] = useState('main')
  const [ curCard, setCurCard ] = useState({})
  switch(pageState) {
    case 'main':
      return (
        <div className='App'>
          <TopBar arrPokemon={initVal} setArrPokemon={(newArr) => {setArrPokemon(newArr)}} pageState={pageState} setPageState={(newState) => {setPageState(newState)}} />
          <div id={pageState}>
            {arrPokemon.map((obj, index) => {return (<PokeCard key={index} pokemon={obj} setCurCard={(card)=>{setCurCard(card)}} setPageState={(newState) => {setPageState(newState)}} />)})}
          </div>
        </div>
      )
    case 'detail':
      return (
        <div className='App'>
          <TopBar pageState={pageState} setPageState={(newState) => {setPageState(newState)}} />
          <div id={pageState}>
            <PokeCard pageState={pageState} pokemon={curCard} />
            <PokeDetails pokemon={curCard} setPageState={(newState) => {setPageState(newState)}} />
          </div>
        </div>
      );
    case 'about':
      return (
        <div className='App'>
          <TopBar pageState={pageState} setPageState={(newState) => {setPageState(newState)}} />
          <div id={pageState}>
            <About />
          </div>
        </div>
      );
    default:
      alert('Error')
      break;
  }
}


export default App;