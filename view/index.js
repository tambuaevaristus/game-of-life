let table = document.getElementById("table");

let cell = document.createTextNode("cell");


let board = Array.from(Array(50), () => new Array(50));


for(let i=0; i<board.length; i++){
    row = document.createElement("tr");
    table.appendChild(row);
    for(let j=0; j<board.length; j++){   
         tdata = document.createElement("td");
         tdata.appendChild(cell);

         row.appendChild(tdata);
        //  board[i][j]. = "0";

    }
   
}

``