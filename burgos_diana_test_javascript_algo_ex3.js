function verifyRow(to_check) {
    let table = '<table>';
    for (let row = 0; row < to_check.length; row++) {
        
        if (verifyNumbers(to_check[row]) === false) {
            console.log('Error in line ' + row + ': '+ to_check[row]);

            table += '<tr>';
            table += '<td>' + 'Line '+(row+1)+' incorrect ' + '</td>';

            to_check[row].forEach(number => {
                table += '<td>' + number + '</td>';
            });

            table += '</tr>';
        } 
    }
    table += '</table>';
    var resultContainer = document.getElementById('rowResults');
    resultContainer.innerHTML = table;

}

function verifyColumn(to_check) {
    let table = '<table>';
    for (let column = 0; column < to_check[0].length; column++) {
        
        const columnNum = [];
        for (let row = 0; row < to_check.length; row++) {
            
            columnNum.push(to_check[row][column]);
        }
        if (verifyNumbers(columnNum) === false) {
            console.log('Error in column ' + column + ': '+ to_check[column]);
            table += '<tr>';
            table += '<td>' + 'Column '+(column+1)+' incorrect ' + '</td>';
            columnNum.forEach(number => {
                table += '<td>' + number + '</td>';
            });
            table += '</tr>';

        }
    }
    table += '</table>';
    var resultContainer = document.getElementById('columnResults');
    resultContainer.innerHTML = table;
}

function verifyRegion(to_check) {
    let table = '<table>';
    let regionNumber = 1;

    for (let regionRow = 0; regionRow < 3; regionRow++) {
        for (let regionColumn = 0; regionColumn < 3; regionColumn++) {
            const region = [];

            // Recorre cada celda dentro de la región (3x3)
            for (let row = regionRow * 3; row < regionRow * 3 + 3; row++) {
                for (let column = regionColumn * 3; column < regionColumn * 3 + 3; column++) {
                    region.push(to_check[row][column]);
                }
            }

            // Verifica la región y muestra errores si los hay
            if (!verifyNumbers(region)) {
                console.log('Error in region ' + regionNumber + ': '+ region);
                table += '<tr>';
                table += '<td>' + 'Region '+(regionNumber)+' incorrect ' + '</td>';
                region.forEach(regionNum => {
                    table += '<td>' + regionNum + '</td>';
                });
                table += '</tr>';
            }

            regionNumber++;
        }
    }

    table += '</table>';
    var resultContainer = document.getElementById('regionResults');
    resultContainer.innerHTML = table;
}




// Verify if the containers are empty
function checkContainers() {
    const rowResultsContainer = document.getElementById('rowResults');
    const columnResultsContainer = document.getElementById('columnResults');
    const regionResultsContainer = document.getElementById('regionResults');
    var emptyMessage = 'the table is correct';
    if (rowResultsContainer.innerHTML === '<table></table>' && columnResultsContainer.innerHTML === '<table></table>' && regionResultsContainer.innerHTML === '<table></table>') {
        var resultContainer = document.getElementById('result');
        resultContainer.innerHTML = emptyMessage;
        console.log('The container is empty');
        console.log(rowResultsContainer);
    }
    else{
        console.log('container is not empty');
        console.log(rowResultsContainer);
    }
}





