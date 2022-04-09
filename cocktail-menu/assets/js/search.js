var userName = document.getElementById("user-input");
var zipSearch = document.getElementById("zip-input");
var searchFormEL = document.getElementById("searchForm");
var formBtn = document.getElementById("BtnSubmit");
var userNameVal;
var zipSearchVal;
//function to take values from user input. Inputs those values to the cocktail link and stores them in local storage
function searchInput(event) {
  event.preventDefault();
  userNameVal = document.getElementById("user-input").value;
  zipSearchVal = document.getElementById("zip-input").value;
// checks to make sure user input values for user name and zip code
  if (zipSearch.value == 0 || userName.value == 0) {
    return;
  }
  // takes user input and inputs them to link address for cocktail page.
  var cocktailLink =
    "./cocktail.html?q=" + userNameVal + "&format=" + zipSearchVal;
  location.assign(cocktailLink); 
  // stores user inputs to local storage
  localStorage.setItem("userName", JSON.stringify(userName.value));
  localStorage.setItem("zipCode", JSON.stringify(zipSearch.value));
}
// event handles event for click of submit button
searchFormEL.addEventListener("submit", searchInput);
