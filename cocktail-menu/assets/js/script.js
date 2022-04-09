// URLs given by the DB for searching by first letter or drink name
var cocktailByLetter =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
var cocktailByName =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
var cardHolder = document.getElementById("search-results");
// function takes in a drink and searches by name.
function getCocktail(x) {
  fetch(`${cocktailByName}${x}`).then(function (res) {
    if (res.status !== 200) {
      console.log("fetch found nothing!");
      return;
    }
    res.json().then(function (data) {
      var drink = data.drinks[0];
      // runs the drink through the modal creating function
      modalCreator(drink);
    });
  });
}

function getCocktails(x) {
  fetch(`${cocktailByLetter}${x}`)
    .then(function (res) {
      if (res.status !== 200) {
        console.log("fetch found nothing!");
        return;
      }
      res.json().then(function (data) {
        var drinks = data.drinks;
        // loops over drink data array and generates a card for each
        // and adds an event listener to them
        for (let i = 0; i < drinks.length; i++) {
          var card = document.createElement("div");
          card.addEventListener("click", function () {
            var currentDrink = drinks[i].strDrink;
            // once you click on a card that drink is pushed through the get cocktail function
            // and that runs it through the modal creator to generate the modal for that selected drink
            getCocktail(currentDrink);
          });
          card.setAttribute("class", "drink-card");
          cardHolder.appendChild(card);
          var drinkImg = document.createElement("img");
          drinkImg.setAttribute("src", drinks[i].strDrinkThumb);
          card.appendChild(drinkImg);
          var drinkName = document.createElement("p");
          drinkName.textContent = drinks[i].strDrink;
          card.appendChild(drinkName);
        }
      });
    })
    .catch(function (err) {
      console.error(err);
    });
}

