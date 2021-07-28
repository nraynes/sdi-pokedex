import './PokeCard.css';
import React from 'react';

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
        <div className='PokeCard' onClick={(e)=>{
            e.preventDefault()
            if (props.setCurCard && props.setPageState) {
                props.setCurCard(pokemon)
                props.setPageState('detail')
            }
        }}>
            <img src={pokemon.sprites.front_default} alt=''></img>
            <div id='cardStatBox'>
                <label>Name:</label>
                <p>{pokemon.name}</p>
                <label>Types:</label>
                <p>{strTypes}</p>
            </div>
        </div>
    );
};

export default PokeCard;