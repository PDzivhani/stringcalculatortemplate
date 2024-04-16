class Calculator{
    add(numbers){
        if(numbers == ""){
            return 0;
        }

        if(numbers == 1){
            return parseInt(numbers);
        }

        let num = numbers.split(",")
        for (let index = 0; index < numbers.length; index++) {
            const element = parseInt.numbers[index];
            return element += parseInt(num[2])
            
        }
        
    }
}

module.exports = Calculator