import './TopBar.css';
import React from 'react';
import { Link } from 'react-router-dom';

function TopBar(props) {
    const arrTypes = ['Normal', 'Fire', 'Water', 'Grass', 'Flying', 'Fighting', 'Poison', 
    'Electric', 'Ground', 'Rock', 'Psychic', 'Ice', 'Bug', 'Ghost', 'Steel', 'Dragon', 'Dark', 'Fairy']
    const refType = React.useRef()
    function loadFilter() {
        if (props.location.pathname === '/') {
            return (
                <form>
                    <label>Filter by Type:
                        <select ref={refType}>
                            {arrTypes.map((strType, i)=>{return (<option key={i}>{strType}</option>)})}
                        </select>
                    </label>
                    <button onClick={(e) => {
                        e.preventDefault()
                        let input = (refType.current.value).toLowerCase()
                        let newArr = [];
                        for (let i=0;i<props.arrPokemon.length;i++) {
                            let doesMatch = false;
                            for (let j=0;j<props.arrPokemon[i].types.length;j++) {
                                if (input === props.arrPokemon[i].types[j].type.name) {
                                    doesMatch = true;
                                }
                            }
                            if (doesMatch) {
                                newArr.push(props.arrPokemon[i])
                            }
                        }
                        props.setArrPokemon(newArr);
                    }}><strong>Filter</strong></button>
                </form>
            );
        };
    };
    return (
        <div className='TopBar'>
            <div>
                <Link to='/'><h1 onClick={()=>{
                    props.setArrPokemon(props.initVal)
                }}>PokeDEX</h1></Link>
                <Link to='/about'>About</Link>
            </div>
            {loadFilter()}
        </div>
    );
};

export default TopBar;