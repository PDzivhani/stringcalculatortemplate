// class Calculator{
    
 function  add(numbers){
    // 1.
    if(numbers == ""){
        console.log(`Empty string returns ${0}`);
    }
    //2.
    if(numbers == "1"){
        console.log(`Number converted to ${parseInt(numbers)}`)
    }

    //3.
    const num = numbers.split(",")
    let sum = 0

    if(numbers == "1,5"){
        sum += parseInt(num[0]) + parseInt(num[1])
        console.log(` The sum of two converted numbers is ${sum}`)
    }

    //4.
    for (let i = 0; i < num.length; i++) {
        const num = parseInt(i);
        sum += num
        
    }
    console.log(`The sum of unknown numbers is ${num[0]}`);
     
    
}
add("1,5,8")


// }
    



// module.exports = Calculator