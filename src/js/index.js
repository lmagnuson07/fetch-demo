// const id = [1, 2, 3, 4];
// const studentId = [5, 6, 7, 8];

// const copyId = [...id];
// console.log(id, copyId)

// // map(), filter(), find(), reduce(), sort(), forEach()

// const updateId = id.map(function (id, index){
//     console.log(id, index)
//     return id + 10;
// });

// console.log(updateId)

// const user = {
//     name: "jit",
//     id: 1111
// }

// function User({name, id, ...props}){

// }
// User({ name: 1, age: 2, color: "red", active: false });

// const ids = [1, 2, 3];
// const newIds = [...ids];

// const [user1, user2] = ids;

// // form data
// const user12 = "name";
// const newid = 2134;
// const active = true;

// const newuser = {
//     user12,
//     newid,
//     active
// }
// console.log(newuser)
// console.log(user2)

// // react jsx
// const status = "inactive";
// const template = `
//     <p>The current user status is ${status}</p>
// `
// const refRoot = document.getElementById('root');
// refRoot.innerHTML = template;
// console.log(refRoot)

// fetching data
// async programming... 
// blocking is oposite of async (php)
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => console.log(res.json()))
// .then(data => console.log(data));

// server PHP C# flutter dart
// Node.js Express Server full stack

// function users(req, res){
//     // data fetching here for all users
//     res.send.json({users});
// }

// const thing = new Promise((resolve, reject) => {
//     return new Promise();
// })

// fetching data
// async programming...
async function getUserData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const userData = await res.json();
    return userData;
}

const res = await fetch('https://jsonplaceholder.typicode.com/users')
const userData = await res.json();
console.log(userData)

/******************************************************************************* */
// this code runs without errors. 
// const res = await fetch('../mock/users.json')
// const userData = await res.json();
// console.log(userData)
/******************************************************************************* */

if (userData){
    // build the ui
} else {
    // show a loading spinner
}

