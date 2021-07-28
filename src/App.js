import './App.css';
import React, { useEffect } from 'react';
import TopBar from './components/top-bar/TopBar';
import PokeCard from './components/poke-card/PokeCard'
import About from './components/about/About';
import PokeDetails from './components/poke-details/PokeDetails';

function App() {
  const [ arrPokemon, setArrPokemon ] = React.useState([])
  const [ pageState, setPageState] = React.useState('main')
  const [ curCard, setCurCard ] = React.useState({})
  let arrFilter;
  if (window.initVal) {
    arrFilter = window.initVal
  } else {
    arrFilter = [{}];
  }
  useEffect(() => {
    let arrProm = [];
    for (let i=1;i <= 151;i++) {
      arrProm.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((data) => data.json())
        .then((response) => response))
    }
    Promise.all(arrProm)
      .then((res) => {setArrPokemon(res)})
  }, [])
  switch(pageState) {
    case 'main':
      return (
        <div className='App'>
          <TopBar arrPokemon={arrFilter} setArrPokemon={(newArr) => {setArrPokemon(newArr)}} pageState={pageState} setPageState={(newState) => {setPageState(newState)}} />
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