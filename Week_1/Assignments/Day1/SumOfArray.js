//Write a function that recieves an array as args and return their sum

let arr=[180,20,30,40,120];

function sumOfArray(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}

console.log(sumOfArray(arr));