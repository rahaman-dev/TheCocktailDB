let loadAPI = (searchText) => {
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchText}`
  )
    .then((res) => res.json())
    .then((data) => getCocktail(data.drinks));
};

// search btn and enter key
let clickSearchBtnAndEnterKey = () => {
  let getInput = document.getElementById("search");
  let getInputField = getInput.value;
  if (getInputField.length >= 2) {
    alert("please write one character only");
  }
  loadAPI(getInputField);
  getInput.value = "";
};

// Click Search Button
let getSearchText = () => {
  document.getElementById("searchBtn").addEventListener("click", function () {
    clickSearchBtnAndEnterKey();
  });
};

// Press Enter key
document.getElementById("search").addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    clickSearchBtnAndEnterKey();
  }
});

// Letter
let spanClass = document.getElementsByClassName("span");
for (let i = 0; i < spanClass.length; i++) {
  spanClass[i].addEventListener("click", function () {
    let getInnerText = spanClass[i].innerText;
    loadAPI(getInnerText);
  });
}

let getCocktail = (data) => {
  let getContainer = document.getElementById("content-container");
  data.forEach((element) => {
    let crtDiv = document.createElement("div");
    crtDiv.innerHTML = `
    <div class="container2">
      <div id="first" class="fist">
      <img src="${element.strDrinkThumb}" alt="" />
      <h3>${element.strDrink}</h3>
      </div>
      </div>
      `;
    getContainer.appendChild(crtDiv);
  });
};
getSearchText();
