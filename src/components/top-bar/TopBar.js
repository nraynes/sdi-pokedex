import './TopBar.css';
import React from 'react';

function TopBar(props) {
    const arrTypes = ['Normal', 'Fire', 'Water', 'Grass', 'Flying', 'Fighting', 'Poison', 
    'Electric', 'Ground', 'Rock', 'Psychic', 'Ice', 'Bug', 'Ghost', 'Steel', 'Dragon', 'Dark', 'Fairy']
    const refType = React.useRef()
    function loadFilter() {
        if (props.pageState === 'main') {
            return (
                <form>
                    <label>Filter by Type:</label>
                    <select ref={refType}>
                        {arrTypes.map((strType, i)=>{return (<option key={i}>{strType}</option>)})}
                    </select>
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
                    }}>Filter</button>
                </form>
            );
        };
    };
    return (
        <div className='TopBar'>
            <h1 onClick={()=>{
                props.setPageState('main')
            }}>PokeDEX</h1>
            <p onClick={()=>{
                props.setPageState('about')
            }}>About</p>
            {loadFilter()}
        </div>
    );
};

export default TopBar;