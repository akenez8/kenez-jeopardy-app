import React from 'react';

function QuestionCards({cat1, cat2, cat3, cat4}){
    function testClick(){
        console.log(`cat1 : ${cat1[0,1]}`)
    }
    return(
        <div>
            <p>Big Stinky Smelly Fart</p>
            <button onClick={testClick}>test</button>
            </div>
        
    )
}

export default QuestionCards;