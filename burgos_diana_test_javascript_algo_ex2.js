function verifyNumbers(table){
    let allAreNumbers = true;
     //I create a new array and verify that the numbers are uniques
     let seenNumbers = [];
    //I iterate through each element of the array
    for (let column = 0; column < table.length; column++){

        if(typeof table[column] !== 'number' || table[column] < 1 || table[column] > 9){
            allAreNumbers = false;
        }
        if((seenNumbers.includes(table[column]))){
            allAreNumbers = false;
        
        }
        seenNumbers.push(table[column]);
      
    }
    return allAreNumbers;
}

