import React, { useState, useEffect } from 'react';
import './TeamStats.css';

function TeamStats(props) {

    const [totalStats, setTotalStats] = useState({
        hp: 0,
        attack: 0,
        defense: 0,
        spAtk: 0,
        spDef: 0,
        speed: 0,
        total: 0
    })

    useEffect(() => {
        let accumulatedHp = props.wholeTeam.map(element => {
            for (let key in element){
                if(key === 'hp'){
                    return element.hp;
                }
            }  
        })

        let accumulatedAttack = props.wholeTeam.map(element => {
            for (let key in element){
                if(key === 'attack'){
                    return element.attack;
                }
            }  
        })

        let accumulatedDefense = props.wholeTeam.map(element => {
            for (let key in element){
                if(key === 'defense'){
                    return element.defense;
                }
            }  
        })

        let accumulatedSpAtk = props.wholeTeam.map(element => {
            for (let key in element){
                if(key === 'spAtk'){
                    return element.spAtk;
                }
            }  
        })

        let accumulatedSpDef = props.wholeTeam.map(element => {
            for (let key in element){
                if(key === 'spDef'){
                return element.spDef;
                }
            }  
        })

        let accumulatedSpeed = props.wholeTeam.map(element => {
            for (let key in element){
                if(key === 'speed'){
                return element.speed;
                }
            }  
        })

        let totalHp = accumulatedHp.reduce((acc, index) => {return acc + index}, 0)
        let totalAttack = accumulatedAttack.reduce((acc, index) => {return acc + index}, 0)
        let totalDefense = accumulatedDefense.reduce((acc, index) => {return acc + index}, 0)
        let totalSpAtk = accumulatedSpAtk.reduce((acc, index) => {return acc + index}, 0)
        let totalSpDef = accumulatedSpDef.reduce((acc, index) => {return acc + index}, 0)
        let totalSpeed = accumulatedSpeed.reduce((acc, index) => {return acc + index}, 0)
        let totalStats = totalHp + totalAttack + totalDefense + totalSpAtk + totalSpDef + totalSpeed

        setTotalStats({hp: totalHp, attack: totalAttack, defense: totalDefense, spAtk: totalSpAtk, spDef: totalSpDef, speed: totalSpeed, total: totalStats})
    }, [props])

    return (
        <div className='wholeStats'>
            <div className='allStats'>
                <div className='individualStat'>
                    <h4>Total Stats</h4>
                    {totalStats.total}
                </div>
                <div className='individualStat'>
                    <h4>Total HP</h4>
                    {totalStats.hp}
                </div>
                <div className='individualStat'>
                    <h4>Total Attack</h4>
                    {totalStats.attack}
                </div>
                <div className='individualStat'>
                    <h4>Total Defense</h4>
                    {totalStats.defense}
                </div>
                <div className='individualStat'>
                    <h4>Total Sp Attack</h4>
                    {totalStats.spAtk}
                </div>
                <div className='individualStat'>
                    <h4>Total Sp Defense</h4>
                    {totalStats.spDef}
                </div>
                <div className='individualStat'>
                    <h4>Total Speed</h4>
                    {totalStats.speed}
                </div>
            </div>
        </div>
    )
}

export default TeamStats;