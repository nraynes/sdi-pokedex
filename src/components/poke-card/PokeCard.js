import './PokeCard.css';
import React from 'react';

function PokeCard(props) {
    const { pokemon } = props;
    let arrTypes = [];
    let strTypes = '';
    let nameOfClass = '';
    for (let i=0;i<pokemon.types.length;i++) {
        let curName = pokemon.types[i].type.name
        arrTypes.push(curName)
        strTypes += `${curName}, `
    }
    strTypes = strTypes.slice(0, strTypes.length-2)
    return (
        <div className='PokeCard' id={props.pageState === 'detail' ? 'detailCard' : 'noDetail'} onClick={(e)=>{
            e.preventDefault()
            if (props.setCurCard && props.setPageState) {
                props.setCurCard(pokemon)
                props.setPageState('detail')
            }
        }}>
            <img src={pokemon.sprites.front_default} alt=''></img>
            <div id='cardStatBox'>
                <label>Name:
                    <p>{pokemon.name}</p>
                </label>
                <label>Types:
                    <p>{strTypes}</p>
                </label>
            </div>
        </div>
    );
};

export default PokeCard;