const quotes = [
  "Believe you can and you're halfway there.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Do not watch the clock. Do what it does. Keep going.",
  "Your time is limited, don't waste it living someone else's life.",
  "The best way to predict the future is to create it.",
  "It always seems impossible until it is done.",
  "Dream big and dare to fail.",
  "You are never too old to set another goal or to dream a new dream.",
  "Start where you are. Use what you have. Do what you can.",
];

const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");

function generateQuote() {
  if (usedIndexes.size >= quotes.length) {
    usedIndexes.clear();
  }

  while (true) {
    const randomIdx = Math.floor(Math.random() * quotes.length);

    if (usedIndexes.has(randomIdx)) continue;
    const quote = quotes[randomIdx];
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIdx);
    break;
  }
}
