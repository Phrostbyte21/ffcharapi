function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function first(array, count = 25) {
    return array.slice(0, count);
}

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

const url = 'https://www.moogleapi.com/api/v1/characters/';
const ul = document.getElementById('ffchars');
let index = 0;

document.getElementById('ffchars').className = "card cardFlip";

let authors;

fetch(url)
    .then(resp => resp.json())
    .then(data => {
        authors = data;
        console.log(authors)
        
        first(authors).map(addAuthor)

    })

document.getElementById("addCard").addEventListener("click", () => {
    addAuthor(authors[index]);
    document.getElementById("addCard").innerHTML = "Added!";
    setTimeout(function(){ document.getElementById("addCard").innerHTML = "Add Another Card" }, 2000);
});




//Working Before if/then statement
/*
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function first(array, count = 25) {
    return array.slice(0, count);
}

function addAuthor(author) {
    let li = createNode('li'),
            img = createNode('img'),
            span = createNode('span');

        img.src = author.pictures[0].url;
        span.innerText = `Name: ${author.name} \nGender: ${author.gender} \nJob: ${author.job} \nRace: ${author.race}`;

        append(li, img);
        append(li, span);
        append(ul, li);
        index += 1;
}

const url = 'https://www.moogleapi.com/api/v1/characters/';
const ul = document.getElementById('ffchars');
let index = 0;

document.getElementById('ffchars').className = "card cardFlip";

let authors;

fetch(url)
    .then(resp => resp.json())
    .then(data => {
        authors = data;
        console.log(authors)
        
        first(authors).map(addAuthor)

    })

document.getElementById("addCard").addEventListener("click", () => {
    addAuthor(authors[index]);
    document.getElementById("addCard").innerHTML = "Added!";
    setTimeout(function(){ document.getElementById("addCard").innerHTML = "Add Another Card" }, 2000);
});
*/