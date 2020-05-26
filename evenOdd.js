function keep(arr){
    arr.map(el => {
        el%2 === 0 ? console.log(el) : false;
    })
}

function discard(arr){
    arr.map(el => {
        el%2 !== 0 ? console.log(el) : false;
    })
}

function check(callback, arr){
    callback(arr);
}

check(keep, [1,2,3,4,5]);
check(discard, [1,2,3,4,5]);