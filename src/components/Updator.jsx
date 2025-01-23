import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';

function Updator() {

  

    const [team,setTeam] = useState({
        india : false,
        australia:false,
        england:false
    })

    const handleChange = (e)=>{
        console.log(e)
        if(team.india===false ){
            setTeam({
                india : false,
                australia :true,
                england : true
            })
        }
        else if(team.australia ===false){
            setTeam({
                india : true,
                australia :false,
                england : true
            })
        }
        else if(team.england === false){
            setTeam({
                india : true,
                australia :true,
                england : false
            })
        }
    }
  return (
    <div>
        <header>
            <h1>Updator View </h1>
        </header>
        <div>
            <form action="">
                <label htmlFor="">Please select any 2 Teams</label>
                <br /><br />
                <label >India</label>
                <input type="checkbox" name="india" value={team.india} onChange={handleChange}/>
                <label htmlFor="">Australia</label>
                <input type="checkbox" name="australia" value={team.australia} onChange={handleChange}/>
                <label htmlFor="">England</label>
                <input type="checkbox" name="england" value={team.england} onChange={handleChange}/>
            </form>
        </div>
        <div>
            <h1>Live Updates</h1> <br /><br />
            <h2>Toss Time</h2>
            <p>Team chooses to Bat first</p>
        </div>
        <div>
            <h1>Overs Update: </h1>
            <h2>over1: </h2>

        </div>
    </div>
  )
}

export default Updator