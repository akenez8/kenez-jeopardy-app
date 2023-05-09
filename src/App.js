import './App.css';
import { useState, useEffect } from 'react';
import Board from './Board';

function App() {
  let [cat1, setCat1] = useState("")
  let [cat2, setCat2] = useState("")
  let [cat3, setCat3] = useState("")
  let [cat4, setCat4] = useState("")
  let [team1Points,setTeam1Points] = useState(0); 
  let [team2Points,setTeam2Points] = useState(0);
  let [team3Points,setTeam3Points] = useState(0);
  let [team4Points,setTeam4Points] = useState(0);

  useEffect(() => {
  fetch("http://localhost:3001/Music")
  .then(res => res.json())
  .then(data => setCat1(data))
  },[])

  useEffect(() => {
    fetch("http://localhost:3001/Games")
    .then(res => res.json())
    .then(data => setCat2(data))
    },[])

    useEffect(() => {
      fetch("http://localhost:3001/Booze")
      .then(res => res.json())
      .then(data => setCat3(data))
      },[])

      useEffect(() => {
        fetch("http://localhost:3001/General")
        .then(res => res.json())
        .then(data => setCat4(data))
        },[])

  function addTeam1Points(){
   setTeam1Points(team1Points + 100);
  }

  function subtractTeam1Points(){
    setTeam1Points(team1Points - 100);
  }

  function addTeam2Points(){
    setTeam2Points(team2Points + 100);
   }
 
   function subtractTeam2Points(){
    setTeam2Points(team2Points - 100);
   }

   function addTeam3Points(){
    setTeam3Points(team3Points + 100);
   }
 
   function subtractTeam3Points(){
    setTeam3Points(team3Points - 100);
   }

   function addTeam4Points(){
    setTeam4Points(team4Points + 100);;
   }
 
   function subtractTeam4Points(){
    setTeam4Points(team3Points - 100);
   }
  return (
    <div className="App">
      <p className="title">
          KENEZ JEOPARDY
        </p>
        <div className="teamDiv">
           <p className="teamNames">The Beasts</p> 
           <p className="teamNames">Midnight Boxos</p> 
           <p className="teamNames">Aces</p> 
           <p className="teamNames">Losers</p> 
          </div>
          <div className="scoreDiv">
            <p className="teamScores">score: {team1Points}</p>
            <p className="teamScores">score: {team2Points}</p>
            <p className="teamScores">score: {team3Points}</p>
            <p className="teamScores">score: {team4Points}</p>
            
          </div>
          <div className= "scoreButtonsDiv">
          <button className="addButton" onClick={addTeam1Points}>+100</button> <button className="subtractButton" onClick={subtractTeam1Points}>-100</button>
          <button className="addButton" onClick={addTeam2Points}>+100</button> <button className="subtractButton" onClick={subtractTeam2Points}>-100</button>
          <button className="addButton" onClick={addTeam3Points}>+100</button> <button className="subtractButton" onClick={subtractTeam3Points}>-100</button>
          <button className="addButton" onClick={addTeam4Points}>+100</button> <button className="subtractButton" onClick={subtractTeam4Points}>-100</button>
          </div>
        <div className="boardDiv">
          <Board cat1={cat1} cat2={cat2} cat3={cat3} cat4={cat4}/>
        </div>
    </div>
  );
}

export default App;
