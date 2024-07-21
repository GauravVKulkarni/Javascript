const obj = {}

obj.name = "Gaurav"
obj.age = 20
obj.occupation = "Software Engineer"

console.log(obj.name)
console.log(obj[`name`])



const key1 = Symbol(`description-this is key1`)

const obj2 = {
    name : "anonymous",
    age : 50,
    occupation : "Software Engineer",
    [key1] : "this is a symbol key", 
    greeting : function(){
        console.log(`Hello ${this.name}`)
    }
}

console.log(obj2.greeting());

console.log(obj2[key1]);
console.log(obj2["name"]);
console.log(obj2);

Object.seal(obj2) //no keys can be added or removed
Object.freeze(obj2) //totally uneditable

const objcopy = Object.assign({},obj2)
console.log(objcopy);