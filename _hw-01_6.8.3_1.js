
let arr = [0, null, 5, 8, 7, 6, 2, 5, 10, ''];

function isEven(arr) {
    let counterEven = 0;
    let counterOdd = 0;
    let counterNull = 0;

    for (let num of arr) {
        if (+num%2 == 0 && +num != 0) {
            counterEven++
        } else if (+num%2 != 0) {
            counterOdd++
        } else if (+num == 0) {
            counterNull++
        } 
    }

    console.log(counterEven);
    console.log(counterOdd);
    console.log(counterNull);
}

isEven(arr);