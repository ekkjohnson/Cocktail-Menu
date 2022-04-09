var holder = document.getElementById('modal-holder')
// function to create modals with drink data, taking in a drink as an argument
function modalCreator (drink) {
  // removes all previous modals, even though they hide on close
  // I didn't want to leave the leftover modals in the html
  removeAllChildNodes(holder)
  // Building out the modal structure, appending elements, and adding content.
  var modalContainer = document.createElement('div')
  modalContainer.setAttribute('class', 'modal')
  holder.appendChild(modalContainer)
  var shell = document.createElement('div')
  shell.setAttribute('class', 'modal-shell')
  modalContainer.appendChild(shell)
  var closeBtn = document.createElement('span')
  closeBtn.setAttribute('class', 'close')
  closeBtn.textContent = 'ⓧ'
  closeBtn.addEventListener('click', function() {
    modalContainer.style.display = 'none'
  })
  shell.appendChild(closeBtn)
  var modalContent = document.createElement('div')
  shell.appendChild(modalContent)
  var drinkTitle = document.createElement('h1')
  drinkTitle.textContent = drink.strDrink
  modalContent.appendChild(drinkTitle)
  var drinkImg = document.createElement('img')
  drinkImg.setAttribute('src', drink.strDrinkThumb)
  modalContent.appendChild(drinkImg)
  var bottomContent = document.createElement('div')
  bottomContent.setAttribute('class', 'modal-bottom')
  modalContent.appendChild(bottomContent)
  var ingredientContainer = document.createElement('div')
  ingredientContainer.setAttribute('class', 'modal-left')
  var recipeContainer = document.createElement('div')
  recipeContainer.setAttribute('class', 'modal-right')
  bottomContent.appendChild(ingredientContainer)
  bottomContent.appendChild(recipeContainer)
  var ingredientTitle = document.createElement('h3')
  ingredientTitle.textContent = 'Ingredients:'
  ingredientContainer.appendChild(ingredientTitle)
  var ingredientList = document.createElement('ul')
  ingredientContainer.appendChild(ingredientList)
  // loops over the data object keys dynamically
  for (let i = 1; i < 16; i++) {
    var num = i;
    var ingredient = 'strIngredient';
    var measurement = 'strMeasure';
    // the data held up to 15 different ingredients and measurements
    // this logic only grabs the ing/meas that actually had values assigned.
    if (drink[ingredient + num] !== null && drink[measurement + num] !== null){
        var ing = drink[ingredient + num]
        var meas = drink[measurement + num]
        var MeasurementIngredient = document.createElement('li')
        MeasurementIngredient.textContent = `${meas} ${ing}`
        ingredientList.appendChild(MeasurementIngredient)
    }
    
  }
  var recipeTitle = document.createElement('h3')
  recipeTitle.textContent = 'Instructions:'
  recipeContainer.appendChild(recipeTitle)
  var recipeInfo = document.createElement('p')
  recipeInfo.textContent = drink.strInstructions
  recipeContainer.appendChild(recipeInfo)
}