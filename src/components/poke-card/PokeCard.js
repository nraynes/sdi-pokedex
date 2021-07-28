import './PokeCard.css';
import React from 'react';
import { Link } from 'react-router-dom';

function PokeCard(props) {
    const { pokemon } = props;
    let arrTypes = [];
    let strTypes = '';
    for (let i=0;i<pokemon.types.length;i++) {
        let curName = pokemon.types[i].type.name
        arrTypes.push(curName)
        strTypes += `${curName}, `
    }
    strTypes = strTypes.slice(0, strTypes.length-2)
    return (
        <div className='PokeCard' id={props.location.pathname === '/details' || props.location.pathname === '/details/environment' ? 'detailCard' : 'noDetail'} onClick={(e)=>{
            e.preventDefault()
            if (props.setCurCard) {
                props.setCurCard(pokemon)
            }
        }}>
            <Link to='/details'>
                <img src={pokemon.sprites.front_default} alt=''></img>
                <div id='cardStatBox'>
                    <label>Name:
                        <p>{pokemon.name}</p>
                    </label>
                    <label>Types:
                        <p>{strTypes}</p>
                    </label>
                </div>
            </Link>
        </div>
    );
};

export default PokeCard;