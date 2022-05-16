let table = document.getElementById("table");
// document.getElementById("random_btn").onclick = random();

// Create one dimensional array
let board = new Array(50);

// Loop to create 2D array using 1D array
for (var i = 0; i < board.length; i++) {
  board[i] = new Array(50);
}

// Loop to initialize 2D array elements.

// function random(){
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length; j++) {
      board[i][j] = Math.floor(Math.random() * 2);
    }
  }

  console.log("random");
  // PrintBoard();
// }


let state = Math.floor(Math.random() * 2);


function PrintBoard() {
  var id = 0;
  for (var i = 0; i < board.length; i++) {
    let row = document.createElement("tr");
    table.appendChild(row);
    for (var j = 0; j < board.length; j++) {
      // id += id;
      //   document.write(board[i][j]);
      let state = board[i][j];
      board[i][j] = document.createTextNode(board[i][j]);
      tdata = document.createElement("td");
      tdata.setAttribute("id", id++);
      tdata.setAttribute("data-state", state);
      tdata.addEventListener('click',cellClick);            

      row.appendChild(tdata);
      if (table.children[i].children[j].getAttribute("data-state") == "1") {
        table.children[i].children[j].style.backgroundColor = "yellow";
      } else {
        table.children[i].children[j].style.backgroundColor = "green";
      }
    }
  }
}

// table.children[7].children[5].style.backgroundColor = "red";

function cellClick() {
  
  
  if (table.children[i].children[j]== '1'){
    // table.children[i].children[j].getAttribute("data-state") = "0";
    console.log("true")
  }
  // else{
  //   table.children[i].children[j].getAttribute("data-state") = "1";

  // }



}


PrintBoard();


