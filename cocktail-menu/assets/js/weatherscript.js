var APIKey = "8c833adbed35c6453a1255f89d32c9b8";
var cTemp;
var user;
var coldDayDrinks = ["irish coffee", "Egg Nog - Healthy", "hot toddy"];
var warmDayDrinks = ["Dirty Martini", "Old Fashioned", "Bloody Mary"];
var hotDayDrinks = ["Mojito", "Barracuda", "Tequila Sunrise"];
var zipSearch = JSON.parse(window.localStorage.getItem("zipCode"));
userWelcomeEl = document.getElementById("welcome-message");
var weatherEl;
var weatherDivEl;
var userEl;
var weatherDivElsub;
// pulls values from local storage
var searchUsers = JSON.parse(
  window.localStorage.getItem("userName").toUpperCase()
);
// function to run functions for weather and userdata to page.
function getParams() {
  weatherApi(zipSearch);
  userNameFun();
}
//fuction create user welcome display
function userNameFun() {
  userEl = document.createElement("p");
  userWelcomeEl.appendChild(userEl);
  userWelcomeEl.textContent = "Welcome " + searchUsers + "!";
}
//function to run suggested drink based on the weather temperature
function suggestDrink() {
  if (cTemp < 40) {
    getCocktail(
      coldDayDrinks[Math.floor(Math.random() * coldDayDrinks.length)]
    );
  } else if (cTemp > 70) {
    getCocktail(hotDayDrinks[Math.floor(Math.random() * hotDayDrinks.length)]);
  } else {
    getCocktail(
      warmDayDrinks[Math.floor(Math.random() * warmDayDrinks.length)]
    );
  }
}
// fuction to call weather api
function weatherApi(x) {
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?zip=" +
    x +
    "&appid=" +
    APIKey +
    "&units=imperial";
  fetch(queryURL)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(response);
      }
    }) //function to pull data from weather api and dynamically create elements on cocktail.html
    .then(function (data) {
      weatherEl = document.getElementById("weather");
	  weatherDivEl = document.createElement("div")
	  weatherEl.appendChild(weatherDivEl)
	  weatherDivEl.setAttribute("id", "weatherDiv1")
	  var weatherDivId = document.getElementById('weatherDiv1')
	  weatherDivElsub = document.createElement("div")
	  weatherEl.appendChild(weatherDivElsub)
	  weatherDivElsub.setAttribute("id", "weatherDiv2")
	  var weatherDivId2 = document.getElementById('weatherDiv2')
      var date = data.dt;
      var reformatDate = moment(date, "X").format("l");
      var dateEl = document.createElement("p");
      dateEl.textContent = "Today is " + reformatDate;
      weatherDivId.appendChild(dateEl);
      var city = data.name;
      var cityEl = document.createElement("p");
      weatherDivId.appendChild(cityEl);
      cityEl.textContent = city;
      var condition = data.weather[0].description;
      var conditionEl = document.createElement("p");
      weatherDivId2.appendChild(conditionEl);
      conditionEl.textContent = condition;
      var cIcon = data.weather[0].icon;
      var iconEl = document.createElement("img");
      iconEl.src = "https://openweathermap.org/img/wn/" + cIcon + "@2x.png";
      weatherDivId2.appendChild(iconEl);
      cTemp = data.main.temp;
      var tempEl = document.createElement("p");
      tempEl.textContent = `Temp: ${cTemp} °F`;
      weatherDivId.appendChild(tempEl);
      suggestDrink();
    });
}
// calls function to load website on load
getParams();
