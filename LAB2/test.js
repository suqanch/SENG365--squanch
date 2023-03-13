// let anotherperson = { firstname: 'Ben',
//     surname: 'Adams',
//     printfullname: function () {
//     console.log(this.firstname + ' ' + this.surname);
//     return this;
//     },
//     printfirstname: function () {
//     console.log(this.firstname);
//     return this;
//     },
//     printsurname: function () {
//     console.log(this.surname);
//     return this;
//     }
// }
// anotherperson.printfirstname().printfullname()

// const s = new Date().getSeconds();

// setTimeout(function() {
//   // 输出 "2"，表示回调函数并没有在 500 毫秒之后立即执行
//   console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
// }, 500);

// while(true) {
//   if(new Date().getSeconds() - s >= 2) {
//     console.log("Good, looped for 2 seconds");
//     break;
//   }
// }

setTimeout(() => console.log('first'), 0);
console.log('second')
