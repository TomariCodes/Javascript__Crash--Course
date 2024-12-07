const concessions = [
  {
    name: "Pizza",
    price: 399,
    type: "food",
  },
  {
    name: "Popcorn",
    price: 199,
    type: "food",
  },
  {
    name: "Juice",
    price: 270,
    type: "drink",
  },

  { name: "Burger", price: 299, type: "food" },

  {
    name: "Hotdog",
    price: 175,
    type: "food",
  },
  {
    name: "Pop",
    price: 200,
    type: "drink",
  },
  {
    name: "Water",
    price: 100,
    type: "drink",
  },
];

concessions.forEach((item) => {
  console.log(item.name);
  console.log("$" + item.price / 100);
});

newMenu = [];

concessions.map((concession) => {
  if (concession.type === "food") {
    console.log(concession);
    newMenu.push(concession);
  }
});

console.log(newMenu);

const result = 5 + 5 ? "truthy" : "falsy"; // 10
console.log(result);
const result2 = 5 - 5 ? "truthy" : "falsy"; // 0 
console.log(result2);
const result3 = 5 - 6 ? "truthy" : "falsy"; // -1
console.log(result3);
const result4 = 'Babydoll' - 6 ? "truthy" : "falsy"; // NAN
console.log(result4);


function clickedButton() {
let buttonContent = document.querySelector("button").innerHTML;
if (buttonContent = "Click Here") {
  document.querySelector('button').innerHTML = "Clicked";
}
}