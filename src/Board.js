import React from 'react';
import QuestionCards from './QuestionCards';

function Board({cat1, cat2, cat3, cat4}){
    return (
        <QuestionCards cat1={cat1} cat2={cat2} cat3={cat3} cat4={cat4} />
        
    )
}

export default Board;