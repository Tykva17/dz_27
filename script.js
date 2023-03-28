//N1
let arr = [1,'2',3,4,5,65,8,7,'name'];
let obj = {name : 'username'};

let arrParam = null

let callback = (item) => {};

console.log('123 =>', Array.isArray(arrParam) , mapping(arrParam, callback))

function mapping(arrParam, callback){
    let arrNew = [];
    let objNew = {};
    if(Array.isArray(arrParam)){
        for (let x of arrParam) {
            arrNew.push(callback(x));
        }
    }else if(Array.isArray(arrParam) === false && arrParam === null){
        alert('Error : ' + arrParam + ' is not arr/obj')
    }else if(Array.isArray(arrParam) === false && typeof arrParam === 'object'){
        for (let x in arrParam) {
            objNew.x =  arrParam[x]
        }
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
