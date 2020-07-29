function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

// The number of cards to draw on page load
function first(array, count = 26) {
    return array.slice(0, count);
}

// Loops through the card draw. If there's no image, it skips 
// that object in the array and goes to the next one.
function addAuthor(author) {
    if (!author.pictures[0]) {
        index += 1;
    } else {
        let li = createNode('li'),
        img = createNode('img'),
        span = createNode('span');

        img.src = author.pictures[0].url;
        span.innerText = `${author.name}\n\nAge: ${author.age}\nGender: ${author.gender}\nRace: ${author.race}\nOrigin: ${author.origin}`;

        append(li, img);
        append(li, span);
        append(ul, li);

        index += 1;
    }       
}

// Delaring variables
const url = 'https://www.moogleapi.com/api/v1/characters/';
const ul = document.getElementById('ffchars');
let index = 0;

// Displaying API data in HTML
document.getElementById('ffchars').className = "card cardFlip";

let authors;

fetch(url)
    .then(resp => resp.json())
    .then(data => {
        authors = data;
        console.log(authors)
        
        first(authors).map(addAuthor)

    })

// Functionality for the button at the bottom of the page
// for users to add another card.
document.getElementById("addCard").addEventListener("click", () => {
    addAuthor(authors[index]);
    document.getElementById("addCard").innerHTML = "Added!";
    setTimeout(function(){ document.getElementById("addCard").innerHTML = "Add Another Card" }, 2000);
});