//write a function that recieves 3 numbers args and returns the largest number among them

let a=10;
let b=20;
let c=90;

function largestOfThree(a,b,c){
    if(a>b && b>c){
        console.log(a + " is the largest number");
    } else if(b>c){
        console.log(b + " is the largest number");
    }else{
        console.log(c + " is the largest number");
    }
}

largestOfThree(a,b,c);
