const arr = [1,2,3,4]
arr.push(5)
arr.push(6)
arr.pop()
arr.push(7)
console.log(arr);

arr.shift()
console.log(arr);

arr.unshift(1)
console.log(arr);

let arr2 = arr.slice(1,4)
console.log(arr2);
console.log(arr);

let arr3 = arr.splice(0,2)
console.log(arr3);
console.log(arr)

console.log(arr.reverse());
console.log(arr.includes(7));
console.log(!arr.includes(7));
console.log(arr.indexOf(7));