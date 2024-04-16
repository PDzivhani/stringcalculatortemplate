class Calculator{
    add(numbers){
        if(numbers == ""){
            return 0;
        }
        
        if(numbers == "1"){
            return parseInt(numbers)
        }

        let num = numbers[2].split(",")
        for (let index = 0; index < numbers.length; index++) {
            const element = numbers[index];
            
        }
        console.log(element += num)
        
        
    }
}

module.exports = Calculator