// let table = document.getElementById("table");

// let cell = document.createTextNode("");


// let board = Array.from(Array(50), () => new Array(50));


// for(let i=0; i<board.length; i++){
//     row = document.createElement("tr");
//     table.appendChild(row);
//     for(let j=0; j<board.length; j++){   
//          tdata = document.createElement("td");
//          tdata.appendChild(cell);

//          row.appendChild(tdata);
//         //  board[i][j]. = "0";

//     }
   
// }

// ``
let id = 1;
let cellIds = []

for(let i = 0; i < 50;i++){
    for(let j = 0; j < 50; j++){
        cellIds.push(id);
        id++
    }
    
}
console.log(cellIds)
let cells = ""
for(let i = 0; i < 50;i++){
   let tbody = document.getElementById("tbody")
    tbody.innerHTML += "<tr>" + "<td></td>".repeat(50) + "</tr>"
}
let body = document.getElementById("tbody")
let arr = body.children;
console.log(arr)
// arr[5].style
//tbody.children[0].children[8].style.backgroundColor = "green"
tbody.style.backgroundColor = "white" 
function delay(time){
    return new Promise(resolve => setTimeout(resolve, time));
}
let tempid = 1;
for(let i = 0; i < 50;i++){
    for(let j = 0; j < 50;j++){
        let cell = tbody.children[i].children[j]
cell.style.backgroundColor = "green"
cell.setAttribute("id", tempid)

//______________________________________________________________________________
const btn = document.getElementById(tempid);

btn.addEventListener('click', function onClick(event) {
  // 👇️ Change text color globally
  if(cell.style.backgroundColor == 'yellow'){
    cell.style.backgroundColor = 'green'
  }else if(cell.style.backgroundColor == 'green'){
    cell.style.backgroundColor = 'yellow'
  }

  // 👇️ Change text color for clicked element only
  // event.target.style.color = 'salmon';
});
//________________________________________________________
tempid++;
}
}

//______________________________________________________________________________
const start = document.getElementById("start_btn");

start.addEventListener('click', function onClick(event) {
    let cellCurrStates = []
let cellNextStates = []
//_________________________________________tracking states
for(let i = 1; i <= 2500;i++){
    let temp = document.getElementById(i)
    if(temp.style.backgroundColor == "green"){
        cellCurrStates.push(0)
    }else{
        cellCurrStates.push(1)
    }
}
//setting next states
for(let i = 1; i <= 2500;i++){
    let temp = document.getElementById(i)
    //still to account for cell at the edges
    //originally off state____________________________________________________________________________________________
    if(cellCurrStates[i-1] == 0 && (
        cellCurrStates[(i-1) - 51] + cellCurrStates[(i-1) - 50] + cellCurrStates[(i-1)-49] + cellCurrStates[(i-1)-1] + 
        cellCurrStates[(i-1)+1] + cellCurrStates[(i-1)+49] + cellCurrStates[(i-1)+50] + cellCurrStates[(i-1)+51]
    ) == 3){
        cellNextStates.push(1)
    }else if(cellCurrStates[i-1] == 1 && (
        cellCurrStates[(i-1) - 51] + cellCurrStates[(i-1) - 50] + cellCurrStates[(i-1)-49] + cellCurrStates[(i-1)-1] + 
        cellCurrStates[(i-1)+1] + cellCurrStates[(i-1)+49] + cellCurrStates[(i-1)+50] + cellCurrStates[(i-1)+51]
    ) < 2){
        cellNextStates.push(0)
    }else if(cellCurrStates[i-1] == 1 && (
        cellCurrStates[(i-1) - 51] + cellCurrStates[(i-1) - 50] + cellCurrStates[(i-1)-49] + cellCurrStates[(i-1)-1] + 
        cellCurrStates[(i-1)+1] + cellCurrStates[(i-1)+49] + cellCurrStates[(i-1)+50] + cellCurrStates[(i-1)+51]
    ) > 3){
        cellNextStates.push(0)
    }else if(cellCurrStates[i-1] == 1 && (
        cellCurrStates[(i-1) - 51] + cellCurrStates[(i-1) - 50] + cellCurrStates[(i-1)-49] + cellCurrStates[(i-1)-1] + 
        cellCurrStates[(i-1)+1] + cellCurrStates[(i-1)+49] + cellCurrStates[(i-1)+50] + cellCurrStates[(i-1)+51]
    ) == 3){
        cellNextStates.push(1)
    }else if(cellCurrStates[i-1] == 1 && (
        cellCurrStates[(i-1) - 51] + cellCurrStates[(i-1) - 50] + cellCurrStates[(i-1)-49] + cellCurrStates[(i-1)-1] + 
        cellCurrStates[(i-1)+1] + cellCurrStates[(i-1)+49] + cellCurrStates[(i-1)+50] + cellCurrStates[(i-1)+51]
    ) == 2){
        cellNextStates.push(1)
    }else(
        cellNextStates.push(0)
    )
    //___________________________________________________________________________________________________________________
}
//change colors
for(let i = 1; i <= 2500;i++){
    let temp = document.getElementById(i)
    if(cellNextStates[i-1] == 1){
        temp.style.backgroundColor = "yellow"
    }else{
        temp.style.backgroundColor = "green"
    }
}
    console.log(cellCurrStates)
});

//________________________________________________________