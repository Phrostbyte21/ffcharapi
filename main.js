function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

/* The number of cards to draw on page load.

   WARNING!!! 
   Because of the function below this function, it will
   skip over array objects if there's no picture. So
   declaring "25" as the count might not actually give
   you 25 cards if in the first 25 array objects some
   are missing the .pictures data. Keep that in mind.*/

function first(array, count = 30) {
    return array.slice(0, count);
}

/* Loops through the card draw. If there's no image, it skips 
   that object in the array and goes to the next one.*/
function addCard(card) {
    if (!card.pictures[0]) {
        index ++;
    } else {
        let li = createNode('li'),
        img = createNode('img'),
        span = createNode('span');

        img.src = card.pictures[0].url;
        span.innerText = `${card.name}\n\nAge: ${card.age}\nGender: ${card.gender}\nRace: ${card.race}\nOrigin: ${card.origin}`;

        append(li, img);
        append(li, span);
        append(ul, li);

        index ++;
    }       
}

// Delaring variables
const url = 'https://www.moogleapi.com/api/v1/characters/';
const ul = document.getElementById('ffchars');
let index = 0;

// Displaying API data in HTML
document.getElementById('ffchars').className = "card cardFlip";

let cards;

fetch(url)
    .then(resp => resp.json())
    .then(data => {
        cards = data;
        console.log(cards)
        
        first(cards).map(addCard)

    })

/* Functionality for the button at the bottom of the page
   for users to add another card. */
document.getElementById("addCard").addEventListener("click", () => {
    addCard(cards[index]);
    document.getElementById("addCard").innerHTML = "Added!";
    setTimeout(function(){ document.getElementById("addCard").innerHTML = "Add Another Card" }, 2000);
});