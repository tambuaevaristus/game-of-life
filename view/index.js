let table = document.getElementById("table");
  
  // Create one dimensional array
  var board = new Array(10);
  
  document.write("Creating 2D array <br>");
    
  // Loop to create 2D array using 1D array
  for (var i = 0; i < board.length; i++) {
      board[i] = new Array(10);
  }
    
  var h = 0;
    
  // Loop to initialize 2D array elements.
  for (var i = 0; i < board.length; i++) {
      for (var j = 0; j < board.length; j++) {
          board[i][j] = 2;
      }
  }

  board[3][4]=5;

//   board[2][1]=0;

    
  // Loop to display the elements of 2D array. 
  for (var i = 0; i < board.length; i++) {
    let row = document.createElement("tr");
    table.appendChild(row);
      for (var j = 0; j < board.length; j++)    {
        //   document.write(board[i][j]);
        board[i][j] = document.createTextNode(board[i][j]);
        tdata = document.createElement("td");
        tdata.appendChild(board[i][j]);
        row.appendChild(tdata);
      }
  } 




                 
//   for(let i=0; i<rows; i++){
//     board[i] = [];
//     // let row = document.createElement("tr");
//     // table.appendChild(row);
//     for(let j=0; j<cols; j++){   
//         board[i][j] = document.createTextNode("c");
//          tdata = document.createElement("td");
//          tdata.appendChild(board[i][j]);
//          row.appendChild(tdata);
        
//     }

    
   
// }