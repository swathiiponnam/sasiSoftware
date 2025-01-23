import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function LiveUpdator() {

    // const runs = useSelector((state)=>state.runs);
    // const dipatch = useDispatch()
    
  return (
    <div>
        <div>
            <label htmlFor=""> Team 1: </label>
            <input type="text" name="team1" />
            <label htmlFor="">Team 2 :</label>
            <input type="text" name="team2" /> <br /><br />
            <label htmlFor=""> Current Batsman: </label>
            <input type="text" name="currentBatsman" />
            <label htmlFor="">Current Bowler: </label> <br /><br />
            <input type="text" name="currentBowler" />
           
            <label>Runs</label> <br />
            <button >0</button> <br />
            <button>1</button><br />
            <button>2</button><br />
            <button>3</button><br />
            <button>4</button><br />
            <button>6</button><br />
            <label>Wicket: </label>
            <button>Out</button>
            <button>Not Out</button> <br /><br />
            <label>Extras: </label>
            <input type="number" name="extras"/> <br /><br />
            <label>Total score: </label>
            <input type="number" name="totalScore"/>
            <label>Overs:</label>
            <input type="number" name="overs"/>
            <label htmlFor="">Run Rate:</label>
            <input type="number" name="runrate" />
        </div>
    </div>
  )
}

export default LiveUpdator