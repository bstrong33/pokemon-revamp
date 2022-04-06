import axios from "axios";
import React, { useState, useEffect } from "react";
import './TeamName.css'

function TeamName() {

    const [nameOfTeam, setNameOfTeam] = useState({
        teamName: '',
        edit: false,
        userInput: ''
    })

    useEffect(() => {
        axios.get('/api/teamname')
            .then(res => {
                setNameOfTeam(prevState => ({...prevState, teamName: res.data}))
            })
    }, [])

    function editTeamName( newName ){
        axios.put('/api/teamname', { newName })
            .then(res => {
                setNameOfTeam(prevState => ({...prevState, teamName: res.data, edit: false}))
            })
    }

    function toggleEdit(){
        setNameOfTeam(prevState => ({...prevState, edit: true}))
    }

    function handleUserInput( event ){
        const {name, value} = event.target
        setNameOfTeam(prevState => ({...prevState, [name]: value}))
    }

    return (
        <div className='teamNameDiv'>

            {nameOfTeam.edit ? 
            <div className="teamNameDiv">
                <input 
                    onChange={handleUserInput}
                    type="text"
                    placeholder="New Name"
                    name='userInput'
                    value={nameOfTeam.userInput}
                ></input>
                <button onClick={() => editTeamName(nameOfTeam.userInput)}>Create Change</button>
            </div> :
            
            <div className="teamNameDiv">
                <span className="teamName">{nameOfTeam.teamName}</span>
                <button onClick={() => toggleEdit()}>Change Team Name</button>
            </div>}
         </div>
    )
}

// node src/server/server.js

export default TeamName;