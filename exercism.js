function keep(arr){arr.map(el => { if (el % 2 == 0) { console.log(el);} }) } 
function discard(arr){ arr.map(el => { if (el % 2 != 0) { console.log(el);} })}  
function accumulate(arr) {arr.map(el => {console.log(el * el);})}
function check(callback, arr){callback(arr); }  
check(keep, [1,2,3,4,5]);
check(discard, [1,2,3,4,5]);
check(accumulate, [1,2,3,4,5]);