// objects


// const key = "email";
// const person = {
//     name : "aniket",
//     age :2,
//     "person hobies" : ["sleep", "play", "code"]
// };
// console.log(person["person hobies"])
// person[key]= "goreaniket100@gmail.com";
// console.log(person)

// 

// const aniket = {
//     fullName : "aniket Saherao Gore",
//     contact : 9588428818,
//     email : "goreaniket100@gmail.com",
// }

// for(let i in aniket){
//     console.log(i + ":" + " " + aniket[i]);
// }

// computed properties
// const name  = "aniket";
// const age = "10";

// const val1 = "person";
// const val2 = "personage";

// const info = {
//     [val1] : name,
//     [val2] : age
// };

// console.log(info);




// assigning each arr1 val to arr2 val 
// {


// const n = ["aniket", "shrirang", "shantanu", "vishal", "kishore", "indrajit", "sanket"];
// const v2 = [12, 13,14,115,16,17,28];

// let j = 0;
// for(let i in n){
//         const info = {
//         [n[i]]   : v2[j]
//         }
//         j++;
//         console.log(info)
    
// }

// }


// const users = [
//         {userid: 1, firstName: 'aniket', gender : 'male'},
//         {userid: 2, firstName: 'vishal', gender : 'male'},
//         {userid: 3, firstName: 'kishore', gender: 'male'}
// ]
// for(let i of users){
//         console.log(i.firstName);
// }

// // nested destructuring

// const [{firstName : name}, , {gender: m}] = users;
// console.log(name, m);


// FUNCTION

// function wishme(a, b){
//         console.log("happy birthday to you");
//         console.log(a+b);
// }

// wishme(3,4);
// wishme(2,3);

// function iseven(num){
//      return num%2==0;
// }
// console.log(iseven(2));


// function str(s){
//         return s[0];
// }
// console.log(str("abcde"));


// const ret = function(arr, target){
//       for(let i=0; i<arr.length; i++){
//         if(arr[i] == target){
//                 return i;
//         }
//       }
//       return -1;
// }
// const arr = [1,2,3,4,5,6,7,8,9]
// console.log(ret(arr, 6));


// const iseven1 = function(a){
//         return a%2==0;
// }
// console.log(iseven1(3));

// ARROW FUNCTIONS 


// const sing = () => {
//         console.log("happy birthday");

// }

// sing();s
// document.querySelector("H1").innerHTML = "good bye";


// DOM document object model

//  document.getElementsByTagName()
// var a = Math.floor(Math.random() * 6 );
// var ran = "dice" + a + ".png";
// var randomsource = "images/" + ran ;
// var img1 = document.querySelectorAll("img")[0];
// img1.setAttribute("src", randomsource);

// const secondHand = document.querySelector('.second-hand');
//   const minsHand = document.querySelector('.min-hand');
//   const hourHand = document.querySelector('.hour-hand');

//   function setDate() {
//     const now = new Date();

//     const seconds = now.getSeconds();
//     const secondsDegrees = ((seconds / 60) * 360) + 90;
//     secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

//     const mins = now.getMinutes();
//     const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
//     minsHand.style.transform = `rotate(${minsDegrees}deg)`;

//     const hour = now.getHours();
//     const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
//     hourHand.style.transform = `rotate(${hourDegrees}deg)`;
//   }

  
//   setInterval(setDate, 1000);

//   setDate();



// aynchronous javascript : function running in parallel with other functions 
const dogimg = document.getElementById('dogimg');
const dbutton = document.getElementById('dogbutton');

const getnew = () => {
fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json())
  .then(json => {
  console.log(json.message)
  dogimg.innerHTML = `<img src='${json.message}' height=300 width=300/>`
})
}

dbutton.onclick = () => getnew();
console.log();