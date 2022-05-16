var i = 1;                  

function myLoop() {         
  setTimeout(function() {   
    console.log('hello');   
    i++;                    
    if (i < 10) {           //  if the counter < 10, call the loop function
      myLoop();              
    }                       
  }, 3000)
}

myLoop(); 