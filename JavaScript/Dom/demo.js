// Database for mini-project 2
// const fakeData = [
//   {
//     id: 1,
//     name: "Kunal Raut",
//     img: "https://tse3.mm.bing.net/th?id=OIP.iuvJjIFEqWQfS15aPURrrQHaLH&pid=Api&P=0",
//     desg: "FullStack Dev",
//     about:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctquas architecto repellat cumque nobis voluptates facilis ut perspiciatis possimus incidunt.",
//   },
//   {
//     id: 2,
//     name: "Aniket Singh",
//     img: "https://tse3.mm.bing.net/th?id=OIP.OGGhtiTG0g0U120iXItRJAHaLH&pid=Api&P=0",
//     desg: "FrontEnd Intern",
//     about:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctquas architecto repellat cumque nobis voluptates facilis ut perspiciatis possimus incidunt.",
//   },
//   {
//     id: 3,
//     name: "Pradnya Jogi",
//     img: "https://tse1.mm.bing.net/th?id=OIP.i5a164FI_E3YHnsx4Q_UlAHaJQ&pid=Api&P=0",
//     desg: "FrontEnd Intern",
//     about:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctquas architecto repellat cumque nobis voluptates facilis ut perspiciatis possimus incidunt.",
//   },
// ];

/*

Query selector => demo -> search for a tag named demo (getElementByTagName(demo))
Query selector => .demo -> search for a class named demo (getElementByClassName(demo))
Query selector => #demo -> search for a id named demo (getElementById(demo))

*/

// // Mini-Project 2
// // Sources
// const prev = document.querySelector(".prev");
// const next = document.querySelector(".next");
// const random = document.querySelector(".random");

// // Dests
// const image = document.querySelector(".review-img");
// const person = document.querySelector(".review-person");
// const desg = document.querySelector(".review-desg");
// const about = document.querySelector(".review-about");

// let index = 0;
// let currentCard = fakeData[index];
// person.textContent = currentCard.name;
// desg.textContent = currentCard.desg;
// image.textContent = currentCard.img;
// about.textContent = currentCard.about;

// prev.addEventListener("click", (e) => {
//   index--;
//   if (index < 0) {
//     index = 2;
//   }
//   currentCard = fakeData[index];
//   person.textContent = currentCard.name;
//   desg.textContent = currentCard.desg;
//   image.src = currentCard.img;
//   about.textContent = currentCard.about;
// });
// next.addEventListener("click", (e) => {
//   index++;
//   if (index > 2) {
//     index = 0;
//   }
//   currentCard = fakeData[index];
//   person.textContent = currentCard.name;
//   desg.textContent = currentCard.desg;
//   image.src = currentCard.img;
//   about.textContent = currentCard.about;
// });

// // Mini-Project 1
// let count = 0; // counter to update value field
// // Dest selector
// const value = document.querySelector(".counter-value");

// // Method 1 - old school and long form
// // Source selectors
// const decrease = document.querySelector(".dec");
// const reset = document.querySelector(".reset");
// const increase = document.querySelector(".inc");

// decrease.addEventListener("click", () => {
//   count--;
//   if (count < 0) {
//     value.style.color = "red";
//   }
//   if (count === 0) {
//     value.style.color = "white";
//   }
//   if (count > 0) {
//     if (count > 0) value.style.color = "green";
//   }
//   value.textContent = count;
// });
// reset.addEventListener("click", () => {
//   count = 0;
//   value.style.color = "white";
//   value.textContent = count;
// });
// increase.addEventListener("click", () => {
//   count++;
//   if (count < 0) {
//     value.style.color = "red";
//   }
//   if (count === 0) {
//     value.style.color = "white";
//   }
//   if (count > 0) {
//     if (count > 0) value.style.color = "green";
//   }
//   value.textContent = count;
// });

// // Method 2 - Modern way and short sweet
// // Source selector
// const btns = document.querySelectorAll(".btn");

// btns.forEach((btn) => {
//   btn.addEventListener("click", (event) => {
//     if (event.target.classList.contains("inc")) {
//       count++;
//     } else if (event.target.classList.contains("dec")) {
//       count--;
//     } else {
//       count = 0;
//     }
//     if (count < 0) {
//       value.style.color = "red";
//     }
//     if (count === 0) {
//       value.style.color = "white";
//     }
//     if (count > 0) {
//       if (count > 0) value.style.color = "green";
//     }
//     value.textContent = count;
//   });
// });
