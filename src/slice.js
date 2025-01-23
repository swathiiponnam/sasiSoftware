const { createSlice } = require("@reduxjs/toolkit");

const scoreSlice = createSlice({
    name : "score",
    initialState : {
        teams: ["India","Australia","England"],
        toss : ["bat","bowl"],
        runs :[0,1,2,3,4,6],
        battingTeam : {
            batsman :"",
            runsScored : 0,
            out:false,
            totalScore :0
        },
        BowlingTeam : {
            bowlerName :"",
            runsGiven : 0,
            wicketsTaken:0,
            totalWickets:0
        }
    },
    reducers : {
        addRuns : (state)=>{
            state.battingTeam.runsScored += state.runs;
        },
        addWickets: (state)=>{
            state.BowlingTeam.wicketsTaken +=1;
        }
    }
})
export default scoreSlice;