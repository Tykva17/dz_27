//N1
let arr = [1,'2',3,4,5,65,8,7,'name'];
let obj = {name : 'username'};

function mapping(arrParam, callback){
    let arrNew = [];
    if(Array.isArray(arrParam) === true){
        for (let x in arrParam) {
            arrNew.push(callback(x));
        }
    }else if(Array.isArray(arrParam) === false && typeof arrParam === 'object'){
        for (let x in arrParam) {
            arrNew.push(arrParam[x]);
        }
    }else {
        alert('Error : ' + arrParam + 'is not arr/obj')
    }
    return  arrNew;
}

let result = mapping(arr , x => x + ')');
let result1 = mapping(obj , (item)=>item.name);
console.log(result);
console.log(result1);


function filtering(arrParam, callback){
    let result = {};
    let right = [];
    let wrong = [];
    if(typeof arrParam == 'object'){
        for (let x of arrParam) {
            if(callback(x)){
                right.push(x);
            }else {
                wrong.push(x);
            }
        }
    }else {
        alert('Error : ' + arrParam + 'is not arr/obj')
    }
    result.right = right
    result.wrong = wrong
    return  result;
}

let arr2 = filtering(arr , x => x % 2 === 0);
console.log(arr2);
