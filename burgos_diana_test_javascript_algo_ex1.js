// part 1: JAVASCRIPT table of 9 boxes out of 9
// I'm creating a 2D empty array
var to_verify = new Array(9);
for (let i = 0; i < 9; i++) {
  to_verify[i] = new Array(9);
}

//Function that reads the array given and puts the content into the new array to_verify
function readAndTransfer() {
    for (let i = 0; i < 9; i++) {
        //I use the split method to separate every number using the space as separator
        to_verify[i] = array_number[i].split(' ').map(Number);
    }
    //printing on the console just to verify
    console.log(to_verify);
}

//Creating a table in the html, I use loops to automate the process
function displayTable() {
    let table = '<table>';
    for (let i = 0; i < 9; i++) {
        table += '<tr>';
      for (let j = 0; j < 9; j++) {
        table += '<td>' + to_verify[i][j] + '</td>';
      }
      table += '</tr>';
    }
    table += '</table>';
  
    //linking sudokuContainer with the element in the html
    var sudokuContainer = document.getElementById('sudoku');

    sudokuContainer.innerHTML = table;
}

// setTimeout(function() {
//     readAndTransfer();
//     displayTable();
// }, 500);


