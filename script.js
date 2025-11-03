let a = ["Hello", "World", "!"];
console.log(a.join(" "));

const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];
let c = cards.splice(2, 1);
cards[5] = "Карточка-6";
cards[3] = "Карточка-4";
console.log(cards);
