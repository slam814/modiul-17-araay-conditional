var fruits =["Apple", 'Banana', 'Orange'];

var firstProblemBananaOfIndex =fruits.indexOf('Banana');

console.log(firstProblemBananaOfIndex);
fruits[1] = 'Mango';
console.log(fruits);

var removeOrange = fruits.pop();
console.log(fruits);
fruits.push('Watermelon');
console.log(fruits);



// Secend Practise Probblem 2


var marksOfStudent = 39;



if(marksOfStudent >= 80){
    console.log('You Grade A+');
    
}
else if(marksOfStudent >= 60){
    console.log('You Grade B');

}
else if(marksOfStudent >= 50){
    console.log('You Grade C');

}
else if(marksOfStudent >= 40){
    console.log('You Grade D');

}
else if(marksOfStudent >= 39){
    console.log('You Grade F');

}




// -----------Prctice Problem ------------------------

var num1 = 77;
var num2 = 27;
var num3 = 450;

if(num1 >= num2 && num1 >= num3){
    console.log('The Largest Number is: num1');
} 
else if(num2 >= num1 && num2 >= num3){
    console.log('The Largest Number is: num2');
}
else{
    console.log('The Largest Number is: num3');

}
// -------------------other-Hend--------------------------

if(num1> num2){
    if(num1 >num3){
        console.log('The Largest Number is: num1');
        
    }
    else{
    console.log('The Largest Number is: num3');

    }
}
else{
    if(num2 > num3){
    console.log('The Largest Number is: num2');

    }
 }

// pactis problem -4

var sideA = 9;
var sideB = 8;
var sideC = 9;


if(sideA === sideB || sideA === sideC || sideB === sideC){
    console.log('It is an Isosceles Tringle')
}
else{
    console.log('It is Not an Isosceles Tringle')
}





// -------------Thank You so Much ChatGPT--------

