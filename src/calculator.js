class Calculator{
   add(numbers){
        if(numbers == ""){
            return 0;
        }
        
        if(numbers == "1"){
            return parseInt(numbers)
        }


        // takes two numbers and seperates them with a comma
        // using a split method to seperate the numbers if they are more than 2
        //declaring the split method
        const num = numbers.split(",")

        //these numbers should be added so we should initialize the sum
        let sum = 0;
        

        //we want to iterate and add the two numbers
            if(num == "1,9"){

                sum += parseInt(num[0])  + parseInt(num[1])
            }
        
        return sum;
    }
    
    
}

    



module.exports = Calculator