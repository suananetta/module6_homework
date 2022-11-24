    
function sum(firstNum) {

    return function(secondNum) {
        return firstNum + secondNum;
    }

}

let result = sum(8);

console.log(result(9));
