// Code your solutions in this file
// 1. Gift Wrapping with `for` loop
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

// 2. Thank You Cards with `writeCards` function
function writeCards(names, event) {
  const thankYouMessages = [];
  
  for (let i = 0; i < names.length; i++) {
    thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }

  return thankYouMessages;
}

console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

// 3. Countdown with `while` loop
function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--; // Decrease the number by 1 in each iteration
  }
}

countDown(10);
