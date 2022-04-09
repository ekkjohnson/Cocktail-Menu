// Alphabet array for use in function
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var letterBox = document.getElementById('search-by-letter')

function letterSearch () {
    // looping over the alphabet array
    for (let i = 0; i < alphabet.length; i++) {
        // creating a button for each letter
        var button = document.createElement('button')
        button.textContent = alphabet[i].toUpperCase()
        button.setAttribute('class', 'a-z-btn')
        letterBox.appendChild(button)
        var letter = alphabet[i]
        // logic to handle our few letters that don't have any drinks to return
        if(letter === 'u' || letter === 'x'){
            button.addEventListener('click', function () {
                console.log('No drinks found with those search parameters');
            })
        // adds event listener to each letter button
        // removes all children nodes (previous letter search results)
        // grabs all cocktails starting with the letter at index i
        } else {
            button.addEventListener('click', function () {
                removeAllChildNodes(cardHolder)
                getCocktails(alphabet[i])
            })
        }
    }
}
// calling function on load to generate buttons
letterSearch()

// while the parent argument has children, it will remove them.
// I used this in clearing my previous letter search, and deleting previously created modal elements
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}