class Calculator{
    add(numbers){
        
        if(numbers == ""){
            return 0;
        }

        if(numbers == 1){
            return parseInt(numbers)
        }


        if(numbers > numbers.split(",")){
            return numbers[0].split(",")
        }

    }
}

module.exports = Calculator