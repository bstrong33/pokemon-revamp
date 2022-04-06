import React, { useState, useEffect }from "react";
import axios from 'axios';
import PokemonList from "./PokemonList";
import TeamName from "./TeamName";
import TeamStats from "./TeamStats";
import './PokemonTeam.css'

function PokemonTeam() {

    const [pokemonTeam, setPokemonTeam] = useState([])

    useEffect(() => {
        axios.get('/api/pokemon')
            .then(res => {
                setPokemonTeam([...res.data])
            })
    }, [])

    function addPokemonToTeam( name, img, id, hp, attack, defense, spAtk, spDef, speed ){
        if (pokemonTeam.length < 6){
            axios.post('/api/pokemon', { name, img, id, hp, attack, defense, spAtk, spDef, speed }).then(res => {
            setPokemonTeam([...res.data])
            })
        } else {alert('You can only have 6 pokemon on your team!')}
    }

    function deletePokemonFromTeam( id ){
        axios.delete(`/api/pokemon/${id}`)
            .then(res => {
                setPokemonTeam([...res.data])
            })
    }

    const mappedPokemonTeam = pokemonTeam.map(teamMember => {
        return (
            <div className='individualTeamMember' key={teamMember.uniqueId}>
                <img alt={teamMember.name} src={teamMember.img} />
                <span>{teamMember.name}</span>
                <button onClick={() => deletePokemonFromTeam( teamMember.id )}>Delete</button>
            </div>
        )
    })

    return (
        <div className="pokemonTeamComponent">
            <PokemonList addPokemonFn={addPokemonToTeam} />
            <div className="teamAndName">
                <TeamName />
                <div className="wholeTeam">
                    {mappedPokemonTeam}
                </div>
                <TeamStats wholeTeam={pokemonTeam} />
            </div>
        </div>
    )
}

export default PokemonTeam;