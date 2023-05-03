
import './App.css';
import { useState } from 'react';

function App() {
  // fetch("http://localhost:3001/music")
  // .then(res => res.json())
  // .then(musicObj => renderCategory(musicObj))

  const[name1,setName1]=useState("")
  const[name2,setName2]=useState("")
  const[name3,setName3]=useState("")
  const[name4,setName4]=useState("")
  const[points1,setPoints1]=useState("")
  const[points2,setPoints2]=useState("")
  const[points3,setPoints3]=useState("")
  const[points4,setPoints4]=useState("")

  function sumTotal(x,y){
    return x + y;
  }
  return (
    <div className="App">
      <p className="title">
          KENEZ JEOPARDY
        </p>
        <div clasName="players">
          players go here. THIS IS A TEST
          </div>
        <div className="boardDiv">
          THE JEOPARDY BOARD WILL GO HERE
        </div>
    </div>
  );
}

export default App;
