function keep(arr){
    arr.map(el => {
        el%2 === 0 ? console.log("Even number is: " + el) : false;
    })
}

function discard(arr){
    arr.map(el => {
        el%2 !== 0 ? console.log("Odd number is: " + el) : false;
    })
}

function accumulate(arr){
    let results = [];
    arr.map(el => {
        results.push(el*el);
    })
    console.log(results)
}

function check(callback, arr){
    callback(arr);
}

check(keep, [1,2,3,4,5]);
check(discard, [1,2,3,4,5]);
check(accumulate, [1,2,3,4,5]);