
// >>>>>>>>>>>>>>>>>1. 例子 关于this的演示

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


// >>>>>>>>>>>>>>>>>2. 例子 关于event loop的演示


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

// setTimeout(() => console.log('first'), 0);
// console.log('second')

// >>>>>>>>>>>>>>>>>3. 例子 关于promise的演示


// let userLeft = false
// let userWatchingCatMeme = false
// function watchTutorialCallback(callback, errorCallback) {


//   if (userLeft) {
//     errorCallback({
//       name: 'User Left', 
//       message: ':('
//     })
//   } else if (userWatchingCatMeme) {
//     errorCallback({
//       name: 'User Watching Cat Meme',
//       message: 'WebDevSimplified < Cat' 
//     })
//   } else {
//     callback('Thumbs up and Subscribe')
//   }
// }
// watchTutorialCallback(message => {
//   console.log(message)
// }, error => {
//   console.log(error.name + ' ' + error.message)
// })

// function watchTutorialPromise() {
//   // let userLeft = false
//   // let userWatchingCatMeme = false
//   return new Promise((resolve, reject) => {
//     if (userLeft) {
//       reject({
//         name: 'User Left', 
//         message: ':('
//       })
//     } else if (userWatchingCatMeme) {
//       reject({
//         name: 'User Watching Cat Meme',
//         message: 'WebDevSimplified < Cat' 
//       })
//     } else {
//       resolve('Thumbs up and Subscribe')
//     }
//   })
// }



// watchTutorialPromise().then(message => {
//   console.log(message)
// }).catch(error => {
//   console.log(error.name + ' ' + error.message)
// })

// const recordVideoOne = new Promise((resolve, reject) => {
//   resolve('Video 1 Recorded')
// })

// const result = {
//   "id":119,
//   "name":'77'
// }

// console.log(result[name]);

const asyncFunc = async () => {
	const response = await fetch(resource);
   	const data = await response.json();
}