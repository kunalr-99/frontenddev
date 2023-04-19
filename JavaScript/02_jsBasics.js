/*
Topics covered today:
Functions
Array methods -> map, filter, concat, indexOf, includes
Spread Operator
Objects
Fake database (Api) navigation, etc

*/

// // -x-x-x-x-x-x-x-x-x-x-x-x-x-x--x

// // Topic 1: Functions
// let data_num1 = 5;
// let data_num2 = 65;

// // General function declaration
// // let sum = function (num1, num2) {
// //   return num1 + num2;
// // };

// // Arrow function declaration
// let sum = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(sum(data_num1, data_num2));

// // -x-x-x-x-x-x-x-x-x-x-x-x-x-x

// // Topic 2: Array Methods

// const data = ["Kunal", "Vidya", "Aniket", "Pradnya"];
// console.log(data);

// // 2.1: length will give you the size of array
// console.log(data.length);

// // 2.2: unshift & shift -> To add or remove elem from start of array
// // 2.3: push & pop -> To addd or remove elem from end of array
// data.unshift("hello");
// data.push("xyz");
// console.log(data);
// data.shift();
// data.pop();
// console.log(data);

// // 2.4: includes will tell whether given elem is available in array
// console.log(data.includes("Pradnya"));

// // 2.5: indexOf will given the index of elem in array
// console.log(data.indexOf("Pradnya"));

// // 2.6: concat will merge two arrays
// console.log(data.concat(["Hemant", "Abdu"]));

// // -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x

// // Topic 3: Advance array methods

// const data1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(data1);

// // 3.1: map method -> This will modify every element in the array

// // Old way
// for (let num = 0; num <= data1.length - 1; num++) {
//   console.log(data1[num], "old way");
// }

// // Using modern js map method
// data1.map((elem) => {
//   console.log(elem, "map method");
// });

// // 3.2: filter method -> This will modify only filtered elements from array

// // Old Way
// const filteredArray1 = [];
// for (let i = 0; i <= data.length - 1; i++) {
//   if (data[i] % 2 == 0) {
//     filteredArray1.push(data[i]);
//   }
// }
// console.log(filteredArray1, "old way");

// // Using modern js filter method
// const filteredArray = data.filter((aniket) => {
//   return aniket % 2 == 0;
// });
// console.log(filteredArray, "filter method");

// // -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x

// const names1 = ["Kunal", "Vidya"];
// const names2 = ["Aniket", "Pradnya"];

// // Old way to merge two arrays
// console.log(names1.concat(names2), "old way");

// // using modern js spread operator => "..."
// const newNames = [...names1, ...names2];
// console.log(newNames, "spread op");

// // Trying to filter particular name from array
// const checkName = newNames.filter((name) => {
//   return name === "Vidya";
// });
// console.log(checkName);

// // -x-x-x-x-x-x--x-x-x-x-x-x--x

// // Objects vs Arrays

// const namesArr = ["Kunal", "Vidya1"];
// const namesObj = {
//   0: "Kunal",
//   1: "Vidya2",
// };

// console.log(namesArr[1]);
// console.log(namesObj["1"]);

// // -x-x-x-x-x--x-x-x-x--x-x-x-x--x

// // Playing Around with objects

// const bioData = { name: "Kunal", age: 23 };
// console.log(bioData);
// // Accessing object via bracket notation
// console.log(bioData["age"]);
// // Accessing object via dot notation
// console.log(bioData.name);
// // Adding new field to object
// bioData["hobbies"] = ["cricket", "coding", "riding"];
// bioData.qual = {
//   ssc: 90,
//   dip: 70,
// };
// console.log(bioData);
// console.log(bioData.hobbies);
// console.log(bioData.hobbies[2]);
// console.log(bioData.qual.ssc);

// // -x-x-x--x-x-x-x-x-x-x--x-x-x-x-x-x

// // Fake Database Navigation and other handling methods

// const database = [
//   {
//     title: "My first post",
//     creator: "Kunal",
//     desc: "acwgrgwtthtrhtetherhethe",
//     categories: ["fiction", "motivation", "scifias"],
//     likeCount: 10,
//     comments: [
//       {
//         username: "kunal",
//         content: "csdgehththrthhtr",
//       },
//       {
//         username: "aniket",
//         content: "csdgehtgrgregergegergtrr",
//       },
//     ],
//   },
//   {
//     title: "My second post",
//     creator: "Aniket",
//     desc: "acwgrgwtthtrhtetherhethe",
//     categories: ["action", "motivation"],
//     likeCount: 10,
//     comments: [
//       {
//         username: "vidya",
//         content: "csdgehththrthhtr",
//       },
//       {
//         username: "pradnya",
//         content: "csdgehtgrgregergegergtrr",
//       },
//     ],
//   },
//   {
//     title: "My third post",
//     creator: "Pradnya",
//     desc: "acwgrgwtthtrhtetherhethe",
//     categories: ["action", "scifi"],
//     likeCount: 10,
//     comments: [
//       {
//         username: "kunal",
//         content: "csdgehththrthhtr",
//       },
//       {
//         username: "aniket",
//         content: "csdgehtgrgregergegergtrr",
//       },
//     ],
//   },
// ];
// console.log(database);

// console.log(database[1].title);
// console.log(database[1].categories[0]);
// console.log(database[1].comments[0].content);

// // // How individual post looks like during every iteration of map and filter method
// // const post = {
// //   title: "My second post",
// //   creator: "Aniket",
// //   desc: "acwgrgwtthtrhtetherhethe",
// //   categories: ["action", "motivation"],
// //   likeCount: 10,
// //   comments: [
// //     {
// //       username: "vidya",
// //       content: "csdgehththrthhtr",
// //     },
// //     {
// //       username: "kunal",
// //       content: "csdgehtgrgregergegergtrr",
// //     },
// //   ],
// // };

// // Filter all posts by categories
// const filteredPostsByCategory = database.filter((post) => {
//   return post.categories.includes("motivation");
// });
// console.log(filteredPostsByCategory, "category filter");

// // Filter all posts by commentor name
// const filteredPostsByCommentor = database.filter((post) => {
//   return post.comments.map((comment) => comment.username).includes("kunal");
// });
// console.log(filteredPostsByCommentor, "comment filter");

// // Filter all posts by commentor name and get back only post creator name
// const filteredPostsByCommentor1 = database.filter((post) => {
//   return post.comments.map((comment) => comment.username).includes("kunal");
// });
// const findCreator = filteredPostsByCommentor1.map((post) => {
//   return post.creator;
// });
// console.log(findCreator, "comment filter creator name");

// // Short hand method for doing this
// const filteredPostsByCommentor2 = database
//   .filter((post) => {
//     return post.comments.map((comment) => comment.username).includes("kunal");
//   })
//   .map((post) => {
//     return post.creator;
//   });
// console.log(filteredPostsByCommentor2, "comment filter cretor name short hand");

// // -x-x-x--x-x-x-x-x-x-x--x-x-x-x-x-x-x-
