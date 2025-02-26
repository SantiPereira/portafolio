 import { useState } from 'react';
import './App.css';

import {TURNS , WINNER_COMBOS} from './constantes'; 

//Casillas del tablero: 
const Squares = ({children , isSelected , updateBoard , index}) => {

  const className = `square ${isSelected ? 'is-selected' : ''}` ;

  const handleClick = () => {
    updateBoard(index) ; 
  } 

  return (
    <div onClick={handleClick} className={className} >
      {children}
    </div>
  ) 
} 

function App() {

  //Nuestro Tablero: 
const [board , setBoard] = useState(Array(42).fill(null)) ; 

  //Estado, para saebr a quien le toca :
const [turn , setTurn] = useState(TURNS.p1) ; 

  //Estado para saber si hay un ganador :
  //TODO: null = no hay ganador , false = empate ; 
const [winner , setWinner] = useState(null) ;

const checkWinner = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a , b , c , d ] = combo ;
  //TODO : Revisamos todas las combinaciones pocibles
    if(boardToCheck[a] && 
      boardToCheck[a] === boardToCheck[b] && 
      boardToCheck[a] === boardToCheck[c] && 
      boardToCheck[a] === boardToCheck[d] ) {
        return boardToCheck[a] ;
      }
  }
  return null ; 
} 


  //Funcion para reiniciar el juego :
const resetGame = () => {
  setBoard(Array(42).fill(null)) ;
  setTurn(TURNS.p1) ; 
  setWinner(null) ;
}

const checkEndGame = (newBoard) => { 
  return newBoard.every((Squares) => Squares !== null );
} 

  //Funcion para actualizar el tablero (estados , turnos , ganadores , etc) :
const updateBoard = (index) => {
  
  //TODO: Evita que se combie el valor de la casilla si ya esta ocupada ;  
  if(board[index] || winner ) return ;

  const newBoard = [...board] ;
  newBoard[index] = turn ; 
  setBoard(newBoard) ;

  const newTurn = turn === TURNS.p1 ? TURNS.p2 : TURNS.p1 ; 
  setTurn(newTurn) ;
  
  //Revisamos si hay un ganador :
  const newWinner = checkWinner(newBoard) ;
  setWinner(newWinner) ;
    if (newWinner) { 
      //alert(newWinner) ;
      setWinner(newWinner) ;
    } else if (checkEndGame(newBoard)) {
      setWinner(false) ;
    }
}

  return (
      <main className='board'>
        <h1>CONECTA 4</h1>

        <button onClick={resetGame} > Reset Game </button>


        <section className='game' >
          {
            board.map(( _ , index) => {
              return (
                <Squares key = {index} index={index} updateBoard={updateBoard} >
                  {board[index]}
                </Squares>
              )
            })
          }
        </section>

        <section className='turn'> 
          <Squares isSelected ={turn === TURNS.p1}> {TURNS.p1} </Squares>
          <Squares isSelected ={turn === TURNS.p2}> {TURNS.p2} </Squares>
        </section>

        {
          winner !== null && (
            <section className='winner'>
              <div className='text'> 
                <h2> 
                  {
                    winner === false ? 'Empate' : 'Gano: '
                  }
                </h2>
                
                <header className='win'>
                  {winner && <Squares> {winner} </Squares>}
                </header>

                <footer>
                  <button onClick={resetGame} > new Game </button>
                </footer>

              </div>
            </section>
          )
        }



      </main>
  );
}

export default App;
