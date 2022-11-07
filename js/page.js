const infoAbout = document.querySelector(".info-about");
let data;
let drinks;

import { fetchData } from "./fetch.js";
(async () => {
	data = await fetchData();
  loadDrink(data)
})();


function loadDrink(data) {
  drinks = data.drinks;
  console.log(drinks);
  for (let i = 0; i <= drinks.length; i++) {
    if (drinks[i].idDrink === localStorage.getItem("id")) {
      const infoCard = document.createElement("div");
      infoAbout.append(infoCard);
      infoCard.innerHTML = ` <div class="card_container">
      <div class="card about">
      <div class="card_block">
        <img src='${drinks[i].strDrinkThumb}' alt="" />
        <div class="card_text ">
          <p>${drinks[i].strDrink}</p>
          <p>${drinks[i].strCategory}</p>
          <p>${drinks[i].strAlcoholic}</p>
          <p>${drinks[i].strGlass}</p>
          <p>${drinks[i].strInstructions}</p>
          <p>${drinks[i].strIngredient1},${drinks[i].strIngredient2},${drinks[i].strIngredient3}</p>
          <p>${drinks[i].strMeasure1}</p>
        </div>
        </div>
      </div>
      </div>`;
    }
  }
}
