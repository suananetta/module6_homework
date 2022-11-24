    
    let min = 0;
    let max = 1111;

    let numRandom = Math.floor(Math.random() * (max - min)) + min;
    
    function simpleNum(num) {
               
        let result = 'Число простое';

        if (num > 1000 || num == 0 || num == 1) {       
            result = 'Данные неверны';
        } else {
            for (let i = 2; i <= num**1/2; i++) {
                if(num%i == 0) {
                    result = 'Число не является простым';
                }
            }
        }

        return result;

        /*согласно википедии 0 - ненатуральное число, а простые числа - натуральные, 
        1 же не является ни простым, ни составным числом */
    }

    console.log(numRandom);
    console.log(simpleNum(numRandom));
    // console.log(simpleNum(139));
    // console.log(simpleNum(905));
    // console.log(simpleNum(1001));
    // console.log(simpleNum(1));
    // console.log(simpleNum(0));