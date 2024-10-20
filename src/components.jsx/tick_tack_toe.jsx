import React, { useState, useEffect } from "react";
export default function TickTackToe() {
  const [boxArray, updateArray] = useState("", "", "", "", "", "", "", "", "");
  const [count, setCount] = useState(0);
  const [winner, setWinner] = useState("none");
  const [text, updateText] = useState("Tick Tack Toe");
  const toggle = (event, num) => {
    if (winner !== "none" || boxArray[num]) return;
    const newArray = [...boxArray];
    if (count % 2 === 0) {
      newArray[num] = "X";
    } else {
      newArray[num] = "O";
    }
    updateArray(newArray);
    setCount(count + 1);
  };
  function checkXWon(boxArray) {
    if (
      (boxArray[0] === "X" &&
        boxArray[1] === "X" &&
        boxArray[2] === "X") ||
      (boxArray[3] === "X" &&
        boxArray[4] === "X" &&
        boxArray[5] === "X") ||
      (boxArray[6] === "X" &&
        boxArray[7] === "X" &&
        boxArray[8] === "X") ||
      (boxArray[0] === "X" &&
        boxArray[3] === "X" &&
        boxArray[6] === "X") ||
      (boxArray[1] === "X" &&
        boxArray[4] === "X" &&
        boxArray[7] === "X") ||
      (boxArray[2] === "X" &&
        boxArray[5] === "X" &&
        boxArray[8] === "X") ||
      (boxArray[0] === "X" &&
        boxArray[4] === "X" &&
        boxArray[8] === "X") ||
      (boxArray[2] === "X" && boxArray[4] === "X" && boxArray[6] === "X")
    ) {
      setWinner("X");
      updateText("Player X Won !");
    }
  }
  function checkOWon(boxArray) {
    if (
      (boxArray[0] === "O" &&
        boxArray[1] === "O" &&
        boxArray[2] === "O") ||
      (boxArray[3] === "O" &&
        boxArray[4] === "O" &&
        boxArray[5] === "O") ||
      (boxArray[6] === "O" &&
        boxArray[7] === "O" &&
        boxArray[8] === "O") ||
      (boxArray[0] === "O" &&
        boxArray[3] === "O" &&
        boxArray[6] === "O") ||
      (boxArray[1] === "O" &&
        boxArray[4] === "O" &&
        boxArray[7] === "O") ||
      (boxArray[2] === "O" &&
        boxArray[5] === "O" &&
        boxArray[8] === "O") ||
      (boxArray[0] === "O" &&
        boxArray[4] === "O" &&
        boxArray[8] === "O") ||
      (boxArray[2] === "O" && boxArray[4] === "O" && boxArray[6] === "O")
    ) {
      setWinner("O");
      updateText("Player O Won !");
    }
  }
  function checkTieGame(boxArray) {
    if (
      boxArray[0] &&
      boxArray[1] &&
      boxArray[2] &&
      boxArray[3] &&
      boxArray[4] &&
      boxArray[5] &&
      boxArray[6] &&
      boxArray[7] &&
      boxArray[8]
    ) {
      setWinner("none");
      updateText("Tie Game !");
    }
  }
  useEffect(()=>{
checkTieGame(boxArray)
checkOWon(boxArray);
checkXWon(boxArray);
},[boxArray])
const reset=()=>
{
    setCount(0);
    updateArray("", "", "", "", "", "", "", "", "")
    setWinner('none')
    updateText('Tick Tack Toe');
}
  return (
    <div className="container">
      <h1>{text}</h1>
      <div className="board">
        <div className="row1" id="row">


        <div className="box" onClick={(e) => toggle(e, 0)}>
          {boxArray[0]}
        </div>
        <div className="box" onClick={(e) => toggle(e, 1)}>
          {boxArray[1]}
        </div>
        <div className="box" onClick={(e) => toggle(e, 2)}>
          {boxArray[2]}
        </div>
        </div>

        <div className="row2" id="row">

        <div className="box" onClick={(e) => toggle(e, 3)}>
          {boxArray[3]}
        </div>
        <div className="box" onClick={(e) => toggle(e, 4)}>
          {boxArray[4]}
        </div>
        <div className="box" onClick={(e) => toggle(e, 5)}>
          {boxArray[5]}
        </div>
        </div>

        <div className="row3" id="row">


        <div className="box" onClick={(e) => toggle(e, 6)}>
          {boxArray[6]}
        </div>
        <div className="box" onClick={(e) => toggle(e, 7)}>
          {boxArray[7]}
        </div>
        <div className="box" onClick={(e) => toggle(e, 8)}>
          {boxArray[8]}
        </div>
        </div>
      </div>
      <button onClick={reset}>Resest</button>
    </div>
  );
}
