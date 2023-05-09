import React from 'react';
import Cat1Cards from './Cat1Cards';
import Cat2Cards from './Cat2Cards';
import Cat3Cards from './Cat3Cards';
import Cat4Cards from './Cat4Cards';

function Board({cat1, cat2, cat3, cat4}){
    return (
        <div className="categoriesDiv">
        <Cat1Cards cat1={cat1}/>
        <Cat2Cards cat2={cat2}/>
        <Cat3Cards cat3={cat3}/>
        <Cat4Cards cat4={cat4}/>
        </div>
        
        
    )
}

export default Board;