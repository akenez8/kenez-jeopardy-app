import React, {useState} from "react";

function Cat4Cards({cat4}){
    let [c1Clicked, setc1Clicked] = useState(0);
    let [c2Clicked, setc2Clicked] = useState(0);
    let [c3Clicked, setc3Clicked] = useState(0);
    let [c4Clicked, setc4Clicked] = useState(0);
    let [c5Clicked, setc5Clicked] = useState(0);

    function c1Click(){
        if(c1Clicked > 2 ){
            setc1Clicked(0)
            
        }
        else{
            setc1Clicked(c1Clicked++)
        }
    }

    function c2Click(){
            if(c2Clicked > 2 ){
                setc2Clicked(0)
                
            }
            else{
                setc2Clicked(c2Clicked++)
            }
        }

    function c3Click(){
                if(c3Clicked > 2 ){
                    setc3Clicked(0)
                    
                }
                else{
                    setc3Clicked(c3Clicked++)
                }
        }

        function c4Click(){
            if(c4Clicked > 2 ){
                setc4Clicked(0)
                
            }
            else{
                setc4Clicked(c4Clicked++)
            }
        }

        function c5Click(){
            if(c5Clicked > 2 ){
                setc5Clicked(0)
                
            }
            else{
                setc5Clicked(c5Clicked++)
            }
        }

    function testClick(){
        
    }
    return(
        <div className="QuestionsDiv">
            <p></p>
            {c1Clicked === 0 ? <p className="questionCard" onClick={c1Click}>100</p> 
            : c1Clicked === 1 ? <p className="questionCard" onClick={c1Click}>Q: {cat4[0].question}</p> 
            : <p className="questionCard" onClick={c1Click}>A: {cat4[0].answer}</p>}
            {c2Clicked === 0 ? <p className="questionCard" onClick={c2Click}>200</p> 
            : c2Clicked === 1 ? <p className="questionCard" onClick={c2Click}>Q: {cat4[1].question}</p> 
            : <p className="questionCard" onClick={c2Click}>A: {cat4[1].answer}</p>}
            {c3Clicked === 0 ? <p className="questionCard" onClick={c3Click}>300</p> 
            : c3Clicked === 1 ? <p className="questionCard" onClick={c3Click}>Q: {cat4[2].question}</p> 
            : <p className="questionCard" onClick={c3Click}>A: {cat4[2].answer}</p>}
            {c4Clicked === 0 ? <p className="questionCard" onClick={c4Click}>400</p> 
            : c4Clicked === 1 ? <p className="questionCard" onClick={c4Click}>Q: {cat4[3].question}</p> 
            : <p className="questionCard" onClick={c4Click}>A: {cat4[3].answer}</p>}
            {c5Clicked === 0 ? <p className="questionCard" onClick={c5Click}>500</p> 
            : c5Clicked === 1 ? <p className="questionCard" onClick={c5Click}>Q: {cat4[4].question}</p> 
            : <p className="questionCard" onClick={c5Click}>A: {cat4[4].answer}</p>}
            <button onClick={testClick}>test</button>
            </div>
        
    )
}

export default Cat4Cards;