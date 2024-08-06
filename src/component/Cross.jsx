import "./CrossStyle.css";
import cross from "../img/cross/cross.png";
import zero from "../img/cross/zero.png";
import React, { useState } from "react";

function Cross() {
  const [step, setStep] = useState(0);
  const [box, setBox] = useState(Array(9).fill(null));
  const [lock, setLock] = useState(false);


const handleClick = (ind)=>{

if(box[ind] || winnerPlayer(box) || lock) return;

const newBox = [...box];
newBox[ind] = step % 2 === 0?"X":"0";
setBox(newBox);
setStep(step+1);
setLock(false);
};

const winnerPlayer = (box) =>{
 const winnerCombi = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
 ];

 for(let combi of winnerCombi){
    const [a,b,c] = combi;

    if(box[a]  && box[a]===box[b] && box[a] === box[c]){
        return box[a];
    }
 }
 return null;
}
let winner = winnerPlayer(box);

const resetBox = ()=>{
  setBox(Array(9).fill(null));
  setStep(0);
  setLock(false)
}
  return (
    <div className="container">
      <h1 className="title">Tic Tac Toe Game</h1>
      <div className="grid-block">
        {box.map((boxElem, ind) => (
          <div key={ind} className="block" onClick={()=>handleClick(ind)}>
            {boxElem && (
              <img src={boxElem === "X" ? cross : zero} alt={boxElem} />
            )}
          </div>
        ))}
      </div>
      {winner && <p>Winner:{winner}</p>}
      <button className="btn" onClick={resetBox}>Reset?</button>
    </div>
  );
}

export default Cross;

// import React,{ useState } from 'react';
// import cross from '../img/cross/cross.png';
// import zero from '../img/cross/zero.png';
// import './CrossStyle.css';

// function Cross (){

// const [step,setStep ] = useState(0);
// const [board,setBoard] = useState(Array(9).fill(null));
// const [lock,setLock] = useState(false);

// function resetGame(){
//     setBoard(Array(9).fill(null));
//     setLock(false);
//     setStep(0);
// }
// const handleGame = (ind)=>{

//     if(board[ind] || winnerGame(board)|| lock) return;

//     const newBoard = [...board];
//     newBoard[ind] = step %2 === 0?"X":"0";
//     setBoard(newBoard);
//     setStep(step+1);

//     if(winnerGame(board)){
//         setLock(true)
//     }
// }

// const winnerGame = (board)=>{

//     const combinationWon =  [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [2, 4, 6],
//         [0, 4, 8]
//     ]

//     for(let combi of combinationWon){

//         const [a,b,c] = combi;
//         if(board[a] && board[a] === board[b] && board[a] === board[c]){
//             return board[a];
//         }

//     }
//     return null;
// }

// let winner = winnerGame(board);

//    return(
//     <div className='container'>
//         <h1>Tic Tac Toe Game:</h1>
//         <div className='grid_block'>
// {
//     board.map((bord,ind)=>(
//         <div key={ind}className='block' onClick={()=>handleGame(ind)}>
//             {
//                 bord &&(
//                     <img src={bord === "X"?cross:zero} alt={bord}/>
//                 )
//             }
//         </div>
//     ))
// }
//         </div>
//         {winner && <p className='winner'>Winner:{winner}</p>}
//         <button className='btn' onClick={resetGame}>Reset?</button>
//     </div>
//    )
// }

// export default Cross;
