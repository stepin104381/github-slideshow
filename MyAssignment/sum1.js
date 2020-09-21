function sum(arr){
    var result=0;
    for(let i in arr)
    result+=arr[i];
    console.log(result);
}

sum([10,20]);