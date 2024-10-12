import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [boardArray, populateBoard] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [count, setCount] = useState(0);
  const [winner, setWinner] = useState("none");
  const [text, setText] = useState("Tick Tack Toe");
  const toggle = (event, num) => {
    if (winner !== "none" || boardArray[num]) return;
    const newBoard = [...boardArray];
    if (count % 2 === 0) {
      newBoard[num] = "X";
    } else {
      newBoard[num] = "O";
    }
    populateBoard(newBoard);
    setCount(count + 1);
  };
  function checkXwon(boardArray) {
    if (
      (boardArray[0] === "X" && boardArray[1] === "X" && boardArray[2] === "X") ||
      (boardArray[3] === "X" && boardArray[4] === "X" && boardArray[5] === "X") ||
      (boardArray[6] === "X" && boardArray[7] === "X" && boardArray[8] === "X") ||
      (boardArray[0] === "X" && boardArray[3] === "X" && boardArray[6] === "X") ||
      (boardArray[1] === "X" && boardArray[4] === "X" && boardArray[7] === "X") ||
      (boardArray[2] === "X" && boardArray[5] === "X" && boardArray[8] === "X") ||
      (boardArray[0] === "X" && boardArray[4] === "X" && boardArray[8] === "X") ||
      (boardArray[2] === "X" && boardArray[4] === "X" && boardArray[6] === "X")
    ) {
      setWinner("X");
      setText("Player X Won!");
    }
  }
  function checkOwon() {
    if (
      (boardArray[0] === "O" && boardArray[1] === "O" && boardArray[2] === "O") ||
      (boardArray[3] === "O" && boardArray[4] === "O" && boardArray[5] === "O") ||
      (boardArray[6] === "O" && boardArray[7] === "O" && boardArray[8] === "O") ||
      (boardArray[0] === "O" && boardArray[3] === "O" && boardArray[6] === "O") ||
      (boardArray[1] === "O" && boardArray[4] === "O" && boardArray[7] === "O") ||
      (boardArray[2] === "O" && boardArray[5] === "O" && boardArray[8] === "O") ||
      (boardArray[0] === "O" && boardArray[4] === "O" && boardArray[8] === "O") ||
      (boardArray[2] === "O" && boardArray[4] === "O" && boardArray[6] === "O")
    ) {
      setWinner("O");
      setText("Player O won!");
    }
  }
  function checkTieGame(boardArray)
  {
    if(boardArray[0]&&boardArray[1]&&boardArray[2]&&boardArray[3]&&boardArray[4]&&boardArray[5]&&boardArray[6]&&boardArray[7]&&boardArray[8])
    {
      setWinner('none')
      setText("Tie Game !")
    }
  }
  useEffect(() => {
    checkTieGame(boardArray);
    checkXwon(boardArray);
    checkOwon(boardArray);
  }, [boardArray]);
  const resetGame = () => {
    setCount(0);
    populateBoard(["", "", "", "", "", "", "", "", ""]);
    setWinner("none");
    setText("Tick Tack Toe");
  };
  return (
    <div className="container">
      <h1>{text}</h1>
      <div className="board">
        <div className="row1" id="row">
          <div className="box" onClick={(event) => toggle(event, 0)}>
            {boardArray[0]}
          </div>
          <div className="box" onClick={(event) => toggle(event, 1)}>
            {" "}
            {boardArray[1]}
          </div>
          <div className="box" onClick={(event) => toggle(event, 2)}>
            {" "}
            {boardArray[2]}
          </div>
        </div>
        <div className="row1" id="row">
          <div className="box" onClick={(event) => toggle(event, 3)}>
            {" "}
            {boardArray[3]}
          </div>
          <div className="box" onClick={(event) => toggle(event, 4)}>
            {" "}
            {boardArray[4]}
          </div>
          <div className="box" onClick={(event) => toggle(event, 5)}>
            {" "}
            {boardArray[5]}
          </div>
        </div>
        <div className="row1" id="row">
          <div className="box" onClick={(event) => toggle(event, 6)}>
            {" "}
            {boardArray[6]}
          </div>
          <div className="box" onClick={(event) => toggle(event, 7)}>
            {" "}
            {boardArray[7]}
          </div>
          <div className="box" onClick={(event) => toggle(event, 8)}>
            {" "}
            {boardArray[8]}
          </div>
        </div>
      </div>
      <button onClick={resetGame}>Reset</button>
    </div>
  );
}

export default App;
