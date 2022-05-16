// let table = document.getElementById("table");

// let cell = document.createTextNode("");


// let board = Array.from(Array(numOfRows), () => new Array(numOfRows));


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
//create array of iDs from 1 to numOfCells//___________________________________________________________________________________________
let id = 1;
let whileTrack = 0
let cellIds = []
let numOfRows = 50;
let numOfRowsCurr = numOfRows + 2;
let numOfCells = numOfRows**2
let numOfCellsCurr = numOfRowsCurr**2

for(let i = 0; i < numOfRows;i++){
    for(let j = 0; j < numOfRows; j++){
        cellIds.push(id);
        id++
    }
    
}
//Dynamicaly create numOfRows by numOfRows table
console.log(cellIds)
let cells = ""
for(let i = 0; i < numOfRows;i++){
    
   let tbody = document.getElementById("tbody")//to bve refactored
    tbody.innerHTML += "<tr>" + "<td></td>".repeat(numOfRows) + "</tr>"
}
let tbody = document.getElementById("tbody")
// let arr = body.children;
// console.log(arr)
function delay(time){
    return new Promise(resolve => setTimeout(resolve, time));
}
let tempid = 1;
for(let i = 0; i < numOfRows;i++){
    for(let j = 0; j < numOfRows;j++){
        let cell = tbody.children[i].children[j]
cell.style.backgroundColor = "green"
cell.setAttribute("id", tempid)//Assign ID dynamically from 1 to numOfCells

//create click even for each cell______________________________________________________________________________
const btn = document.getElementById(tempid);

btn.addEventListener('click', function onClick(event) {
  // 👇️ Change cell color switching between two colors
  if(cell.style.backgroundColor == 'yellow'){
    cell.style.backgroundColor = 'green'
  }else if(cell.style.backgroundColor == 'green'){
    cell.style.backgroundColor = 'yellow'
  }
});
//________________________________________________________
tempid++;
}
}

//Create Actions for start button______________________________________________________________________________
const start = document.getElementById("start_btn");

start.addEventListener('click', function onClick(event) {
    // let cellCurrStates = []
    // console.log("line 78 cell current state", cellCurrStates)
    // let cellNextStates = []
    
    // console.log("line 80 cell next state", cellNextStates)
    let num = 1;
    let counter = 1
    whileTrack = 0
   
    function automateClick(){setTimeout(function(){
        let cellCurrStates = []
    console.log("line 78 cell current state", cellCurrStates)
    let cellNextStates = []
    
    console.log("line 80 cell next state", cellNextStates)

// instantiate tracking arrays to track current and next states
    for(let i = 0; i < numOfCellsCurr; i++){
        cellCurrStates.push(0)
        cellNextStates.push(0)
    }


     for(let i = 1; i <= numOfCells;i++){
    
    let temp = document.getElementById(i)
    let trackCurrState = i + numOfRowsCurr + (Math.floor((i - 1)/numOfRows))*(2)
    if(temp.style.backgroundColor == "green"){
        cellCurrStates[trackCurrState] = 0
    }else{
        cellCurrStates[trackCurrState] = 1
    }
}
//_________________________________________tracking current states

//setting next states from current states following rules//_________________________________________

for(let i = 1; i <= numOfCells;i++){
    let temp = document.getElementById(i)
    //still to account for cell at the edges
    //originally off state____________________________________________________________________________________________

    let trackCurrState = i + numOfRowsCurr + (Math.floor((i - 1)/numOfRows))*(2)
    let surrCellState = (
        cellCurrStates[(trackCurrState) - (numOfRowsCurr + 1) ] + cellCurrStates[(trackCurrState) - numOfRowsCurr] + cellCurrStates[(trackCurrState)-(numOfRowsCurr - 1)] + cellCurrStates[(trackCurrState)-1] + 
        cellCurrStates[(trackCurrState)+1] + cellCurrStates[(trackCurrState)+(numOfRowsCurr - 1)] + cellCurrStates[(trackCurrState)+numOfRowsCurr] + cellCurrStates[(trackCurrState)+(numOfRowsCurr + 1)]
    )

    if(cellCurrStates[trackCurrState] == 0 && surrCellState == 3){
        cellNextStates[trackCurrState] = 1
    }
    //Any live cell with fewer than two live neighbours dies (referred to as underpopulation).//________________________________
    else if(cellCurrStates[trackCurrState] == 1 && surrCellState < 2){
        cellNextStates[trackCurrState] = 0
    }
    //Any live cell with more than three live neighbours dies (referred to as overpopulation).//________________________________
    else if(cellCurrStates[trackCurrState] == 1 && surrCellState > 3){
        cellNextStates[trackCurrState] = 0
    }
    //Any live cell with two or three live neighbours lives, unchanged, to the next generation.//______________________________
    //refactor the suming
    else if(cellCurrStates[trackCurrState] == 1 && surrCellState == 3){
        cellNextStates[trackCurrState] = 1
    }else if(cellCurrStates[trackCurrState] == 1 && surrCellState == 2){
        cellNextStates[trackCurrState] = 1
    }
    //__________________________________________________________________________________________________________________________
    else(
        cellNextStates[trackCurrState] = 0
    )
    //___________________________________________________________________________________________________________________
}
//using Next state to change collor(applying state)
for(let i = 1; i <= numOfCells;i++){
    let trackCurrState = i + numOfRowsCurr + (Math.floor((i - 1)/numOfRows))*(2)
    let temp = document.getElementById(i)
    if(cellNextStates[trackCurrState] == 1){
        temp.style.backgroundColor = "yellow"
    }else{
        temp.style.backgroundColor = "green"
    }
}

    // console.log(num)
    // num++
    // counter++
    // cellCurrStates = [...cellNextStates]
    console.log("line 156 cell curr state", cellCurrStates)
    console.log("line 156 cell next state", cellNextStates)
    if(whileTrack == 1){
        return 0
    }
    automateClick()
    }, 500)}
    automateClick()
});

//________________________________________________________

//Math.floor(Math.random() * (max - min) + min);
//random Action//_________________________________________________
const random = document.getElementById("random_btn");

random.addEventListener('click', function onClick(event) {
let cellCurrStates = []
let cellNextStates = []
for(let i = 1; i <= numOfCells;i++){
    let trackCurrState = i + numOfRowsCurr + (Math.floor((i - 1)/numOfRows))*(2)
    cellNextStates[trackCurrState] = (Math.floor(Math.random() * (3 - 0) + 0))
}
//using Next state to change collor(applying state)
for(let i = 1; i <= numOfCells;i++){
    let temp = document.getElementById(i)
    let trackCurrState = i + numOfRowsCurr + (Math.floor((i - 1)/numOfRows))*(2)
    if(cellNextStates[trackCurrState] == 1){
        temp.style.backgroundColor = "yellow"
    }else{
        temp.style.backgroundColor = "green"
    }
}
    //console.log(cellCurrStates)
});

//reset Actions//________________________________________________
const reset = document.getElementById("reset_btn");

reset.addEventListener('click', function onClick(event) {
let cellCurrStates = []
let cellNextStates = []
for(let i = 1; i <= numOfCells;i++){
    let trackCurrState = i + numOfRowsCurr + (Math.floor((i - 1)/numOfRows))*(2)
    cellNextStates[trackCurrState] = 0
}
//using Next state to change collor(applying state)
for(let i = 1; i <= numOfCells;i++){
    let trackCurrState = i + numOfRowsCurr + (Math.floor((i - 1)/numOfRows))*(2)
    let temp = document.getElementById(i)
    if(cellNextStates[trackCurrState] == 1){
        temp.style.backgroundColor = "yellow"
    }else{
        temp.style.backgroundColor = "green"
    }
}
    //console.log(cellCurrStates)
    whileTrack = 1
});
const stopB = document.getElementById("stop_btn");

stopB.addEventListener('click', function onClick(event) {
// let cellCurrStates = []
// let cellNextStates = []
// for(let i = 1; i <= numOfCells;i++){
//     let trackCurrState = i + numOfRowsCurr + (Math.floor((i - 1)/numOfRows))*(2)
//     cellNextStates[trackCurrState] = 0
// }
//using Next state to change collor(applying state)
// for(let i = 1; i <= numOfCells;i++){
//     let trackCurrState = i + numOfRowsCurr + (Math.floor((i - 1)/numOfRows))*(2)
//     let temp = document.getElementById(i)
//     if(cellNextStates[trackCurrState] == 1){
//         temp.style.backgroundColor = "yellow"
//     }else{
//         temp.style.backgroundColor = "green"
//     }
// }
    //console.log(cellCurrStates)
    whileTrack = 1
});