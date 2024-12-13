
    /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
    function createBoard() {
      let initialBoard = [];
  
      function randomTrueFalse() {
        return Math.random() < 0.5;
      }
  
      for (let i = 0; i < 4; i++) {
          const newRow = [];
        
          for (let j=0; j<4; j++){
  
          newRow.push(randomTrueFalse());
        }
        initialBoard.push(newRow);
      }
  
  
    console.log(initialBoard);
    
      // TODO: create array-of-arrays of true/false values
      return initialBoard;
    }
    createBoard();