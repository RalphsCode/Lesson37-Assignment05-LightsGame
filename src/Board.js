import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows, ncols, chanceLightStartsOn }) {
  const [board, setBoard] = useState(createBoard());

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    let initialBoard = [];
    /** return true or false randomly */
    function randomTrueFalse() {
      return Math.random() < 0.5;
    }
    // Loop for the number of rows 
    for (let i = 0; i < nrows; i++) {
        // Create a new row
        const newRow = [];
      
        for (let j=0; j<ncols; j++){
        // Fill the row's columns with random true/false 
        newRow.push(randomTrueFalse());
      }
      // Push the new row into the initialBoard array
      initialBoard.push(newRow);
    }

    console.log("In createBoard & Created board:", initialBoard);

    // TODO: create array-of-arrays of true/false values
    return initialBoard;
  }

  function hasWon() {
    // TODO: check the board in state to determine whether the player has won.
    for (let row of board) {
      for (let cell of row) {
        if (cell === false) {
          return false;
        };
      }
    }
      return true; 
  };


  function flipCellsAround(coord) {
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      // TODO: Make a (deep) copy of the oldBoard

      // TODO: in the copy, flip this cell and the cells around it

      // TODO: return the copy
    });
  }

  // if the game is won, just show a winning msg & render nothing else
  return (
    <div>
      {hasWon() ? (
        <div>
        <h2>RalphsCode: LIGHTS GAME</h2>
        <h3>Congratulations you won!</h3>
        </div>
      ) : (
        <div>
          <h2>RalphsCode: LIGHTS GAME</h2>
          <p>Board:</p>
          <table align="center" style={{ border: '1px solid black' }}>
            <tbody>
              {board.map((row, rowIndex) => (
                <tr key={rowIndex} style={{ border: '1px solid black' }}>
                  {row.map((cell, colIndex) => (
                    <td key={colIndex} style={{ border: '1px solid black' }}>
                      {cell ? 'O' : '-'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
  // TODO
}

export default Board;
