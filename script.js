//N1
let arr = [1,'2',3,4,5,65,8,7,'name'];
let obj = {name : 'username'};

function mapping(arrParam, callback){
    let arrNew = [];
    if(Array.isArray(arrParam)){
        for (let x of arrParam) {
            arrNew.push(callback(x));
        }

    }else if(Array.isArray(arrParam) === false && typeof arrParam === 'object'){
        for (let x in arrParam) {
            // console.log(arrParam[x]);
            arrNew.push(arrParam[x])
        }

    }else if(Array.isArray(arrParam) === false || arrParam === null || arrParam === undefined){
        alert('Error : ' + arrParam + ' is not arr/obj')
    }
    return  arrNew;
}

let result = mapping(arr , x => x + ')');
let result1 = mapping(obj , (item)=>item.name);
let result2 = mapping("string", (item)=>item);
let result3 = mapping(undefined, (item)=>item);
console.log(result);
console.log(result1);
console.log('res with error' , result2);
console.log('res with error' , result3);


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
