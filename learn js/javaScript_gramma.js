//.............. java beginner


// console.log('hello world');
// const can't change anymore
const age  = 30;
let name = 'Miles';
// age = 31;
// console.log(age);
 
// type of parameter
// console.log(typeof age);
// let a;
// console.log(a);

// string concatenation(template string)

const hello = `My name is ${name}, I am ${age}.`;
// console.log(hello.length);

const fruits = ['apples', 'banana', 'pears', 10, true];
// ?python append
fruits.push('mangos');
// console.log(fruits);

const  person = {
    firstname: 'miles',
    lastname: 'he',
    hobbie:['1','books','gym']
};
const todos = [1,2,3,4,5];
person.email = 'zhes7';
// console.log(typeof person);
// console.log(person.firstname,person.hobbie[1]);
// object
// miles books

// for(let i = 0; i < 10; i++){
//     console.log(`loop times: ${i}`);
// }
// for(let i of todos){
//     console.log(i);
// }


// let i = 0;
// while(i<10) {
//     console.log(`while times: ${i}`);
// }

// const x = '10';
// if (x == 10) {
//     console.log('wuhu~~');
// }



// forEach,map,filter
// todos.forEach(function(todo){
//     console.log(todo);
// });

const todoText = todos.map(function(todo){
    return todo; 
});
// console.log(todoText);

// javaScript function
function addNum(num1 = 0, num2 = 0) {
    console.log(num1+num2);
}
addNum();

// const addNum1 = (num1,num2) => {return num1 + num2};
const addNum1 = (num1,num2) => num1 + num2;

console.log(addNum1(4,5));