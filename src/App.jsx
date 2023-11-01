import React, { useState } from 'react';
import "./style/App.css";

function Button({value, onClick}) {
  return(
    <button className='square' onClick={onClick}>{value}</button>
  )
}
function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [ xIsNext, setXIsNext] = useState(true);

    function handleButton(i) {
      if(squares[i] || calculateWinner(squares) ){
        return;
      }
      const balSquare = squares.slice();
      if(xIsNext){
        balSquare[i]="X";
      }else {
        balSquare[i]="O";
      }
      setSquares(balSquare);
      setXIsNext(!xIsNext)

    }
    function calculateWinner(squares) {
      const line = [
        [0,1,2], [3,4,5], [6,7,8,], [0,4,8], [2,4,6], [0,3,6], [1,4,7], [2,5,8]
      ];
      
      for (let i=0; i<line.length; i++){
        const [a,b,c] = line[i];
        if(squares[a] && squares[a] == squares[b] && squares[a] == squares[c]){
          return(squares[a])
        }
      }
      return null;
    }

    let winnervalue = calculateWinner(squares)
    let status;

    if (winnervalue){
      status = "The winner is" + winnervalue
    }else {
      status = "The next player is " + (xIsNext ? "X" : "O")
    }

  return (

    <div>
      <div>Status : {status}</div>
      <div className='row'>
      <Button value={squares[0]} onClick={()=>handleButton(0)}/>
      <Button value={squares[1]} onClick={()=>handleButton(1)}/>
      <Button value={squares[2]} onClick={()=>handleButton(2)}/>
      </div>
      <div className='row'>
      <Button value={squares[3]} onClick={()=>handleButton(3)}/>
      <Button value={squares[4]} onClick={()=>handleButton(4)}/>
      <Button value={squares[5]} onClick={()=>handleButton(5)}/>
      </div>
      <div className='row'>
      <Button value={squares[6]} onClick={()=>handleButton(6)}/>
      <Button value={squares[7]} onClick={()=>handleButton(7)}/>
      <Button value={squares[8]} onClick={()=>handleButton(8)}/>
      </div>
    </div>
  )
}

export default App