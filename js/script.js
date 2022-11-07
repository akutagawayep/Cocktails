const mainCards = document.querySelector(".main-cards");
let data;let drinks;

import { fetchData } from "./fetch.js";
(async () => {
  data = await fetchData();
  loadDrinks(data);
})();

function loadDrinks(data) {
  drinks = data.drinks;
  drinks.forEach((drink) => {
    const card = document.createElement("div");
    card.addEventListener("click", () => {
      localStorage.setItem("id", `${drink.idDrink}`);
      location.href = "page.html";
    });
    mainCards.append(card);
    card.innerHTML = `<div class="card_container">
    <div class="card">
    <div class="card_block">
      <img src='${drink.strDrinkThumb}' alt="" />
      <div class="card_text">
        <p>${drink.strDrink}</p>
      </div>
      </div>
    </div>
    </div>`;
  });
}
