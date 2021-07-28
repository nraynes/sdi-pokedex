import './PokeDetails.css';
import React from 'react';

function PokeDetails(props) {
    const [detailStatus, setDetailStatus] = React.useState('details')
    const [btnText, setBtnText] = React.useState('Show Environment')
    const [location, setLocation] = React.useState('Loading...')
    const { pokemon } = props;
    let pokeStats = []
    pokeStats.push(`Height: ${pokemon.height}`)
    pokeStats.push(`Weight: ${pokemon.weight}`)
    pokeStats.push(`Base Stats: ${pokemon.stats[0].base_stat}`)
    pokeStats.push(`Effort: ${pokemon.stats[0].effort}`)
    let pokeMoves = '';
    for (let i=0;i<pokemon.moves.length;i++) {
        pokeMoves += `${pokemon.moves[i].move.name}, `
    }
    pokeMoves = pokeMoves.slice(0, pokeMoves.length-2)
    pokeStats.push(`Pokemon Moves`)
    pokeStats.push(`${pokeMoves}`)

    let pokeAbilities = ''
    for (let i=0;i<pokemon.abilities.length;i++) {
        pokeAbilities += `${pokemon.abilities[i].ability.name}, `
    }
    pokeAbilities = pokeAbilities.slice(0, pokeAbilities.length-2)
    React.useEffect(()=>{
        if (detailStatus === 'env') {
            fetch(pokemon.location_area_encounters)
              .then((data) => data.json())
              .then((data) => {
                  let strEnvs = '';
                  for (let i=0;i<data.length;i++) {
                      strEnvs += `${data[i].location_area.name}, `
                  }
                  strEnvs = strEnvs.slice(0, strEnvs.length-2)
                  setLocation(strEnvs)
              })
        }
    }, [detailStatus, pokemon]);
    let getSheet = () => {
        switch(detailStatus) {
            case 'details':
                return (
                    <div id='detailsContainer'>
                        <h2>Details</h2>
                        <div id='statsBox'>
                            <h3>Stats</h3>
                            {pokeStats.map((curStat, index)=>{return (<p key={index}>{curStat}</p>)})}
                        </div>
                        <div id='abilitiesBox'>
                            <h3>Abilities</h3>
                            <p>{pokeAbilities}</p>
                        </div>
                    </div>
                );
            case 'env':
                return (
                    <div id='detailsContainer'>
                        <h2>Environment</h2>
                        <div id='envBox'>
                            <p>{`Hangout Locations: ${location ? location : 'not available'}`}</p>
                        </div>
                    </div>
                );
            default:
                alert('Error')
                break;
        }
    };

    return (
        <div className='PokeDetails'>
            <div id='btnContainer'>
                <button onClick={()=>{
                    props.setPageState('main')
                }}>Return</button>
                <button onClick={()=>{
                    if (detailStatus === 'details') {
                        setBtnText('Show Abilities')
                        setDetailStatus('env')
                    } else if (detailStatus === 'env') {
                        setBtnText('Show Environment')
                        setDetailStatus('details')
                    }
                }}>{btnText}</button>
            </div>
            {getSheet()}
        </div>
    );
};

export default PokeDetails;