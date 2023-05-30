import { emoji } from "./emoji.js";
let main = document.querySelector(".main__div");

function deleteRepeatsCards(arr) {
  let clearedArr = arr.map((card) => {
    return {
      ...card,
      keywords: [...new Set(card.keywords.split(" "))].join(" "),
    };
  });
  return clearedArr;
}

let clearedArr = deleteRepeatsCards(emoji);

printCards(clearedArr);

function printCards(cards) {
  cards.forEach((card) => {
    printCard(card);
  });
}

function printCard(card) {
  let parent = document.createElement("div");
  parent.classList.add("card_emoji");

  let divSymbol = document.createElement("div");
  divSymbol.classList.add("symbol");
  divSymbol.innerText = card.symbol;

  let divTitle = document.createElement("h2");
  divTitle.classList.add("title");
  divTitle.innerText = card.title;

  let divKeywords = document.createElement("p");
  divKeywords.classList.add("keywords");
  divKeywords.innerText = card.keywords;

  parent.append(divSymbol);
  parent.append(divTitle);
  parent.append(divKeywords);

  main.append(parent);
}

let input = document.querySelector(".input");
input.addEventListener("input", (evt) => {
  let inputValue = evt.target.value.toLowerCase();
  let filteredCards = clearedArr.filter(
    (card) =>
      card.title.toLowerCase().includes(inputValue) ||
      card.keywords.toLowerCase().includes(inputValue)
  );
  main.innerHTML = "";
  printCards(filteredCards);
});
